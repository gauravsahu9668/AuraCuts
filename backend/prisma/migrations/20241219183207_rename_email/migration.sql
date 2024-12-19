/*
  Warnings:

  - You are about to drop the column `email` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Shopkeeper` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Shopkeeper` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Shopkeeper` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Customer_email_key";

-- DropIndex
DROP INDEX "Shopkeeper_email_key";

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "email",
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Shopkeeper" DROP COLUMN "email",
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_username_key" ON "Customer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Shopkeeper_username_key" ON "Shopkeeper"("username");
