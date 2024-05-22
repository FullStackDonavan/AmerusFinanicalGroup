import prisma from '~/server/database/client';
import { getUserById } from '~/server/database/repositories/userRespository';

export default defineEventHandler(async (event) => {
  try {
    // Fetch all health insurance sales
    const healthInsuranceSales = await prisma.insuranceSales.findMany({
      where: {
        category: 'Health',
      },
    });

    // Fetch seller details and merge with sales data
    const salesWithSellerNames = [];
    for (const sale of healthInsuranceSales) {
      const sellerDetails = await getUserById(sale.sellerId);
      const sellerName = sellerDetails ? `${sellerDetails.firstName} ${sellerDetails.lastName}` : 'Unknown';
      const saleWithSellerName = {
        ...sale,
        price: sale.price.toNumber(), // Ensure price is a number
        sellerName,
      };
      salesWithSellerNames.push(saleWithSellerName);
    }

    // Optionally sort the sales data by date or other criteria
    salesWithSellerNames.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
      success: true,
      data: salesWithSellerNames,
    };
  } catch (error) {
    console.error('Error fetching health insurance sales:', error);
    return {
      success: false,
      error: 'Failed to fetch health insurance sales',
    };
  }
});
