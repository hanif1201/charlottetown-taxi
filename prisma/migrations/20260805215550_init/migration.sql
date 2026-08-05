-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "serviceKey" TEXT NOT NULL,
    "tripType" TEXT NOT NULL,
    "pickup" TEXT NOT NULL,
    "dropoff" TEXT,
    "when" TIMESTAMP(3) NOT NULL,
    "waitTime" TEXT,
    "returnWhen" TIMESTAMP(3),
    "returnFrom" TEXT,
    "passengers" TEXT NOT NULL,
    "luggage" TEXT,
    "childSeats" TEXT,
    "accessibility" TEXT,
    "vehicle" TEXT,
    "vehicleCount" TEXT,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmBy" TEXT,
    "notes" TEXT,
    "pageUrl" TEXT,
    "serviceDetail" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Booking_createdAt_idx" ON "Booking"("createdAt");
