import prisma from '~/server/database/client';
import { getUserById } from '~/server/database/repositories/userRespository';

export default defineEventHandler(async (event) => {
  try {
    // Get the user ID from the request context, assuming you have a way to get the logged-in user's ID.
    const userId = event.context.auth?.user?.id; // Adjust this line according to your auth implementation.

    if (!userId) {
      throw new Error('User not authenticated');
    }

    // Fetch all health insurance sales for the logged-in user
    const healthInsuranceSales = await prisma.insuranceSales.findMany({
      where: {
        sellerId: userId,
      },
    });

    // Group and aggregate sales by sellerId (only one sellerId in this case)
    const salesBySeller = healthInsuranceSales.reduce((acc, sale) => {
      if (!acc.totalSales) {
        acc.totalSales = 0;
        acc.sellerId = userId;
      }
      acc.totalSales += sale.price.toNumber(); // Ensure price is a number
      return acc;
    }, {});

    // Fetch seller details and merge with aggregated sales data
    const sellerDetails = await getUserById(parseInt(userId));
    const sellerName = sellerDetails ? `${sellerDetails.firstName} ${sellerDetails.lastName}` : 'Unknown';
    const salesWithSellerNames = [{
      ...salesBySeller,
      sellerName,
    }];

    // Sort the sales data by total sales in descending order (redundant in this case as there's only one user)
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
