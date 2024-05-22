import prisma from '../../database/client';
import { getUserById } from '../../database/repositories/userRepository';

export default defineEventHandler(async (event) => {
  try {
    // Fetch all insurance sales with the "Health" category
    const healthInsuranceSales = await prisma.insuranceSales.findMany({
      where: {
        category: 'Health',
      },
    });

    // Fetch and merge seller details with sales data
    const salesWithSellerNames = [];
    for (const sale of healthInsuranceSales) {
      const sellerDetails = await getUserById(sale.sellerId);
      if (sellerDetails) {
        salesWithSellerNames.push({
          ...sale,
          sellerName: `${sellerDetails.firstName} ${sellerDetails.lastName}`,
        });
      }
    }

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
