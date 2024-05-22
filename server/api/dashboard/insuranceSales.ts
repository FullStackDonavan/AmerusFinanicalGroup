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

    // Group and aggregate sales by sellerId
    const salesBySeller = healthInsuranceSales.reduce((acc, sale) => {
      const sellerId = sale.sellerId;
      if (!acc[sellerId]) {
        acc[sellerId] = { totalSales: 0, sellerId };
      }
      acc[sellerId].totalSales += sale.price.toNumber(); // Ensure price is a number
      return acc;
    }, {});

    // Fetch seller details and merge with aggregated sales data
    const salesWithSellerNames = [];
    for (const sellerId in salesBySeller) {
      const sellerSales = salesBySeller[sellerId];
      const sellerDetails = await getUserById(parseInt(sellerId));
      const sellerName = sellerDetails ? `${sellerDetails.firstName} ${sellerDetails.lastName}` : 'Unknown';
      const sellerSalesWithName = {
        ...sellerSales,
        sellerName,
      };
      salesWithSellerNames.push(sellerSalesWithName);
    }

    // Sort the sales data by total sales in descending order
    salesWithSellerNames.sort((a, b) => b.totalSales - a.totalSales);

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
