import prisma from '~/server/database/client';
import { getUserBySessionToken } from '~/server/app/services/sessionService';
import sendDefaultErrorResponse from "~/server/app/errors/responses/DefaultErrorsResponse";

export default defineEventHandler(async (event) => {
  try {
    const authToken = event.headers.authorization || null;
    
    if (!authToken) {
      return sendDefaultErrorResponse(event, 'Unauthorized', 403, 'Authentication token missing');
    }

    const user = await getUserBySessionToken(authToken);

    if (!user) {
      return sendDefaultErrorResponse(event, 'Unauthorized', 403, 'Invalid authentication token');
    }

    // Fetch insurance sales belonging to the logged-in user
    const insuranceSales = await prisma.insuranceSales.findMany({
      where: {
        userId: user.id,
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
