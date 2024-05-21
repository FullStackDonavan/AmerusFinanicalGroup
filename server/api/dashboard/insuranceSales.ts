
import { defineEventHandler } from "h3";
import { findInsuranceSales } from "~/server/database/repositories/askJackRespository";
// import { getUserById } from "~/server/database/repositories/userRespository";

export default defineEventHandler(async (event) => {
    const queries = getQuery(event)
    const insuranceSalesId = parseInt(queries.id as string)

    const InsuranceSales =  await findInsuranceSales(insuranceSalesId)
    


    return InsuranceSales
})