-- AlterTable
ALTER TABLE "User" ADD COLUMN     "deactivatedAt" TIMESTAMP(3),
ALTER COLUMN "isActive" SET DEFAULT true;
