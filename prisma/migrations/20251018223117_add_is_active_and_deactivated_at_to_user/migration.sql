/*
  Warnings:

  - You are about to drop the column `deactivatedAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "deactivatedAt",
ADD COLUMN     "desactivatedAt" TIMESTAMP(3);
