// healthInsuranceSales.ts
import prisma from '~/server/database/client';

export default async function handler(req, res) {
  try {
    const healthInsuranceSales = await prisma.insuranceSales.findMany({
      where: {
        category: 'Health',
      },
    });
    res.status(200).json({ success: true, data: healthInsuranceSales });
  } catch (error) {
    console.error('Error fetching health insurance sales:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch health insurance sales' });
  }
}
