import prisma from "../config/prisma";

export const getDashboardStats = async () => {
  const totalRevenue = await prisma.trip.aggregate({
    _sum: {
      revenue: true,
    },
  });

  const totalProfit = await prisma.trip.aggregate({
    _sum: {
      profit: true,
    },
  });

  const totalFuelCost = await prisma.trip.aggregate({
    _sum: {
      fuelCost: true,
    },
  });

  const totalTrips = await prisma.trip.count();

  const totalTrucks = await prisma.truck.count();

  const totalDrivers = await prisma.driver.count();

  const totalCustomers = await prisma.customer.count();

  return {
    totalRevenue: totalRevenue._sum.revenue || 0,
    totalProfit: totalProfit._sum.profit || 0,
    totalFuelCost: totalFuelCost._sum.fuelCost || 0,
    totalTrips,
    totalTrucks,
    totalDrivers,
    totalCustomers,
  };
};