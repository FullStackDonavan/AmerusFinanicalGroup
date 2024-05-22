
import { defineEventHandler } from "h3";
import { findInsuranceSales } from "~/server/database/repositories/askJackRespository";
// import { getUserById } from "~/server/database/repositories/userRespository";

export default defineEventHandler(async (event) => {
    const queries = getQuery(event)

    const insuranceSales =  await findInsuranceSales()
    

    console.log("Response from API:", insuranceSales); // Corrected console.log
    return insuranceSales
})