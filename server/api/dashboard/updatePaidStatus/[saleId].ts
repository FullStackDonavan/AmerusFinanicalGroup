import prisma from '~/server/database/client';
import { eventHandler, getQuery, readBody } from 'h3';

export default eventHandler(async (event) => {
  const { saleId } = event.context.params; // Correctly get the saleId from params
  const body = await readBody(event);

  console.log('Request params:', event.context.params);
  console.log('Request body:', body);

  if (!saleId) {
    return { statusCode: 400, body: { error: 'Sale ID is missing' } };
  }

  const { paid } = body;
  if (paid === undefined) {
    return { statusCode: 400, body: { error: 'Paid status is missing' } };
  }

  try {
    // Find the sale by its ID
    const sale = await prisma.insuranceSales.findUnique({
      where: {
        id: parseInt(saleId),
      },
    });

    console.log('Found sale:', sale);

    if (!sale) {
      return { statusCode: 404, body: { error: 'Sale not found' } };
    }

    // Update the paid status of the sale
    const updatedSale = await prisma.insuranceSales.update({
      where: {
        id: parseInt(saleId),
      },
      data: {
        paid: paid,
      },
    });

    console.log('Updated sale:', updatedSale);

    return { statusCode: 200, body: updatedSale };
  } catch (error) {
    console.error('Error updating paid status: ', error);
    return { statusCode: 500, body: { error: 'Failed to update paid status' } };
  }
});
