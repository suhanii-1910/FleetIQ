/*
  Warnings:

  - Added the required column `profit` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Trip" ADD COLUMN     "profit" DOUBLE PRECISION NOT NULL;
