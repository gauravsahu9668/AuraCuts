-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shopkeeper" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Shopkeeper_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phoneNumber_key" ON "Customer"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Shopkeeper_email_key" ON "Shopkeeper"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Shopkeeper_phoneNumber_key" ON "Shopkeeper"("phoneNumber");
