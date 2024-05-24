// salesLog.ts

import prisma from '~/server/database/client';

export default defineEventHandler(async (event) => {
  try {
    const userId = event.payload.userId; // Accessing the user ID from the payload

    // Fetch insurance sales belonging to the logged-in user (filtered by user ID)
    const insuranceSales = await prisma.insuranceSales.findMany({
      where: {
        userId: userId,
      },
    });

    // Map the sales data to include the client name
    const salesWithClientNames = insuranceSales.map((sale) => ({
      id: sale.id,
      date: sale.date,
      clientName: `${sale.firstName} ${sale.lastName}`,
      price: Number(sale.price), // Ensure price is a number
      category: sale.category,
      paid: sale.paid
    }));

    // Optionally sort the sales data by date or other criteria
    salesWithClientNames.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
      success: true,
      data: salesWithClientNames,
    };
  } catch (error) {
    console.error('Error fetching insurance sales:', error);
    return {
      success: false,
      error: 'Failed to fetch insurance sales',
    };
  }
});
