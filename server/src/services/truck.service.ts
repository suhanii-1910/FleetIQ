import prisma from "../config/prisma";

export const createTruck = async (
  truckNumber: string,
  model: string,
  capacity: number,
  status: string,
  userId: string
) => {
  return await prisma.truck.create({
    data: {
      truckNumber,
      model,
      capacity,
      status,
      userId,
    },
  });
};

export const getAllTrucks = async () => {
  return await prisma.truck.findMany();
};

export const getTruckById = async (id: string) => {
  return await prisma.truck.findUnique({
    where: { id },
  });
};

export const updateTruck = async (
  id: string,
  data: {
    truckNumber?: string;
    model?: string;
    capacity?: number;
    status?: string;
  }
) => {
  return await prisma.truck.update({
    where: { id },
    data,
  });
};

export const deleteTruck = async (id: string) => {
  return await prisma.truck.delete({
    where: { id },
  });
};