
// server/api/dashboard/insuranceSales.js
import prisma from '~/server/database/client';


export default defineEventHandler(async (event) => {
  try {
    const insuranceSales = await prisma.insuranceSales.findMany();
    return {
      success: true,
      data: insuranceSales,
    };
  } catch (error) {
    console.error('Error fetching insurance sales:', error);
    return {
      success: false,
      error: 'Failed to fetch insurance sales',
    };
  }
});
