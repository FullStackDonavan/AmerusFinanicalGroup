import prisma from '~/server/database/client';
import { getUserById } from '~/server/database/repositories/userRespository';

export default defineEventHandler(async (event) => {
  try {
    // Fetch all insurance sales
    const insuranceSales = await prisma.insuranceSales.findMany();

    // Group and aggregate sales by sellerId
    const salesBySeller = insuranceSales.reduce((acc, sale) => {
      const sellerId = sale.sellerId;
      if (!acc[sellerId]) {
        acc[sellerId] = { totalSales: 0, sellerId };
      }
      acc[sellerId].totalSales += sale.price.toNumber(); // Ensure price is a number
      return acc;
    }, {});

    // Fetch and merge seller details with aggregated sales data
    const salesWithSellerNames = [];
    for (const sellerId in salesBySeller) {
      const sellerDetails = await getUserById(parseInt(sellerId));
      if (sellerDetails) {
        salesWithSellerNames.push({
          ...salesBySeller[sellerId],
          sellerName: `${sellerDetails.firstName} ${sellerDetails.lastName}`,
        });
      }
    }

    // Sort the sales data by total sales in descending order
    salesWithSellerNames.sort((a, b) => b.totalSales - a.totalSales);

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
