import { searchInsuranceSales } from "~/server/database/repositories/askJackRespository"; // Assuming there's a function named searchInsuranceSales
import { getUserById } from "~/server/database/repositories/userRespository";
import { IInsuranceSales } from "./types/IInsuranceSales"; // Import the correct interface for insurance sales

export default eventHandler(async (event) => {
  const queries = getQuery(event)

    const insuranceSales = await searchInsuranceSales(queries.search as string); // Corrected function name

    const insuranceSalesWithAuth = await Promise.all(insuranceSales.map(async (insuranceSale: IInsuranceSales) => {
        const user = await getUserById(insuranceSale.sellerId); // Assuming the sellerId is used to get the user
        insuranceSale.authName = '@' + user.username; // Assuming username is a property of the user object
        return insuranceSale;
    }));

    return insuranceSalesWithAuth;
});
