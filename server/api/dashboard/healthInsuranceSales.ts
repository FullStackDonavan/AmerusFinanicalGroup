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

    // Aggregate total sales for each user
    const salesByUser = {};
    for (const sale of healthInsuranceSales) {
      if (!salesByUser[sale.sellerId]) {
        salesByUser[sale.sellerId] = {
          userId: sale.sellerId,
          totalSales: sale.price,
        };
      } else {
        salesByUser[sale.sellerId].totalSales += sale.price;
      }
    }

    // Fetch user details and merge with aggregated sales
    const leaderboardData = [];
    for (const userId of Object.keys(salesByUser)) {
      const userSales = salesByUser[userId];
      const user = await getUserById(userId);
      if (user) {
        leaderboardData.push({
          ...user,
          totalSales: userSales.totalSales,
        });
      }
    }

    // Sort leaderboard data by total sales in descending order
    leaderboardData.sort((a, b) => b.totalSales - a.totalSales);

    return {
      success: true,
      data: leaderboardData,
    };
  } catch (error) {
    console.error('Error fetching health insurance sales:', error);
    return {
      success: false,
      error: 'Failed to fetch health insurance sales',
    };
  }
});