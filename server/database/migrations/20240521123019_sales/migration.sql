/*
  Warnings:

  - Added the required column `category` to the `InsuranceSales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InsuranceSales" ADD COLUMN     "category" TEXT NOT NULL;
