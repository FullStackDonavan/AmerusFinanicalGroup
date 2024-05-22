// server/api/dashboard/updatePaidStatus.ts
import prisma from '~/server/database/client';

export default async function handler(req, res) {
  const { saleId } = req.query;
  const { paid } = req.body;

  try {
    // Find the sale by its ID
    const sale = await prisma.insuranceSales.findUnique({
      where: {
        id: parseInt(saleId),
      },
    });

    if (!sale) {
      return res.status(404).json({ error: 'Sale not found' });
    }

    const updatedSale = await prisma.insuranceSales.update({
      where: {
        id: parseInt(saleId),
      },
      data: {
        paid: paid,
      },
    });

    res.status(200).json(updatedSale);
  } catch (error) {
    console.error('Error updating paid status: ', error);
    res.status(500).json({ error: 'Failed to update paid status' });
  }
}
