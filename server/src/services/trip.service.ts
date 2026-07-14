import prisma from "../config/prisma";

export const createTrip = async (
  source: string,
  destination: string,
  distance: number,
  revenue: number,
  fuelCost: number,
  tollCost: number,
  otherCost: number,
  truckId: string,
  driverId: string,
  customerId: string,
  userId: string
) => {
  const profit = revenue - fuelCost - tollCost - otherCost;

  return await prisma.trip.create({
    data: {
      source,
      destination,
      distance,
      revenue,
      fuelCost,
      tollCost,
      otherCost,
      profit,
      truckId,
      driverId,
      customerId,
      userId,
    },
  });
};

export const getAllTrips = async () => {
  return await prisma.trip.findMany({
    include: {
      truck: true,
      driver: true,
      customer: true,
    },
  });
};

export const updateTrip = async (
  id: string,
  data: {
    source?: string;
    destination?: string;
    distance?: number;
    revenue?: number;
    fuelCost?: number;
    tollCost?: number;
    otherCost?: number;
  }
) => {
  if (
    data.revenue !== undefined ||
    data.fuelCost !== undefined ||
    data.tollCost !== undefined ||
    data.otherCost !== undefined
  ) {
    const trip = await prisma.trip.findUnique({
      where: { id },
    });

    if (!trip) {
      throw new Error("Trip not found");
    }

    const revenue = data.revenue ?? trip.revenue;
    const fuelCost = data.fuelCost ?? trip.fuelCost;
    const tollCost = data.tollCost ?? trip.tollCost;
    const otherCost = data.otherCost ?? trip.otherCost;

    data = {
      ...data,
      profit: revenue - fuelCost - tollCost - otherCost,
    } as any;
  }

  return await prisma.trip.update({
    where: { id },
    data,
  });
};

export const deleteTrip = async (id: string) => {
  return await prisma.trip.delete({
    where: { id },
  });
};