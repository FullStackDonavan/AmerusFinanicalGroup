import { findInsuranceSales } from "~/server/database/repositories/askJackRespository"; 
import { getUserById } from "~/server/database/repositories/userRespository";

export default eventHandler(async (event) => {
    // No need to extract query parameters if you're fetching all sales
    const insuranceSales = await findInsuranceSales();

    const insuranceSalesWithAuth = await Promise.all(insuranceSales.map(async (insuranceSale: IInsuranceSales) => {
        const user = await getUserById(insuranceSale.sellerId); // Assuming the sellerId is used to get the user
        insuranceSale.authName = '@' + user.username; // Assuming username is a property of the user object
        return insuranceSale;
    }));
    
    console.log("Response from API:", insuranceSalesWithAuth); // Corrected console.log
    return insuranceSalesWithAuth;
});
