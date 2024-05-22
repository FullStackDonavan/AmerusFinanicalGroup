
import prisma from '~/server/database/client';
import { getUserById } from '~/server/database/repositories/userRespository';

export default defineEventHandler(async (event) => {
  try {
    // Fetch all insurance sales
    const insuranceSales = await prisma.insuranceSales.findMany();

    // Group sales by sellerId
    const salesBySeller: { [key: number]: any[] } = {};
    for (const sale of insuranceSales) {
      const sellerId = sale.sellerId;
      if (!salesBySeller[sellerId]) {
        salesBySeller[sellerId] = [];
      }
      salesBySeller[sellerId].push(sale);
    }

    // Fetch and merge seller details with sales data
    const salesWithSellerNames = [];
    for (const sellerId in salesBySeller) {
      const sellerDetails = await getUserById(parseInt(sellerId));
      if (sellerDetails) {
        const salesForSeller = salesBySeller[sellerId].map((sale) => ({
          ...sale,
          sellerName: `${sellerDetails.firstName} ${sellerDetails.lastName}`,
        }));
        salesWithSellerNames.push(...salesForSeller);
      }
    }

    return {
      success: true,
      data: salesWithSellerNames,
    };
  } catch (error) {
    console.error('Error fetching insurance sales:', error);
    return {
      success: false,
      error: 'Failed to fetch insurance sales',
    };
  }
});
