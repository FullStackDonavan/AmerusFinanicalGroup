
import { defineEventHandler } from "h3";
import { findInsuranceSales } from "~/server/database/repositories/askJackRespository";
// import { getUserById } from "~/server/database/repositories/userRespository";

export default defineEventHandler(async (event) => {

    const Sales =  await findInsuranceSales()
    

    console.log("Response from API:", Sales); // Corrected console.log
    return Sales
})