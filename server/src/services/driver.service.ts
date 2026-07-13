import prisma from "../config/prisma";

export const createDriver = async (
  name: string,
  phone: string,
  licenseNumber: string,
  salary: number,
  status: string,
  userId: string
) => {
  return await prisma.driver.create({
    data: {
      name,
      phone,
      licenseNumber,
      salary,
      status,
      userId,
    },
  });
};

export const getAllDrivers = async () => {
  return await prisma.driver.findMany();
};

export const updateDriver = async (
  id: string,
  data: {
    name?: string;
    phone?: string;
    licenseNumber?: string;
    salary?: number;
    status?: string;
  }
) => {
  return await prisma.driver.update({
    where: { id },
    data,
  });
};

export const deleteDriver = async (id: string) => {
  return await prisma.driver.delete({
    where: { id },
  });
};