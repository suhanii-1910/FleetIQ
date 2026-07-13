import prisma from "../config/prisma";

export const createCustomer = async (
  name: string,
  company: string,
  phone: string,
  email: string,
  userId: string
) => {
  return await prisma.customer.create({
    data: {
      name,
      company,
      phone,
      email,
      userId,
    },
  });
};

export const getAllCustomers = async () => {
  return await prisma.customer.findMany();
};

export const updateCustomer = async (
  id: string,
  data: {
    name?: string;
    company?: string;
    phone?: string;
    email?: string;
  }
) => {
  return await prisma.customer.update({
    where: { id },
    data,
  });
};

export const deleteCustomer = async (id: string) => {
  return await prisma.customer.delete({
    where: { id },
  });
};