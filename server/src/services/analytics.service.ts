import prisma from "../config/prisma";

export const getRevenueAnalytics = async () => {
  const trips = await prisma.trip.findMany({
    select: {
      revenue: true,
      createdAt: true,
    },
  });

  const totalRevenue = trips.reduce(
    (sum, trip) => sum + trip.revenue,
    0
  );

  const totalTrips = trips.length;

  const monthlyRevenue: Record<string, number> = {};

  trips.forEach((trip) => {
    const month = trip.createdAt.toLocaleString("default", {
      month: "long",
    });

    if (!monthlyRevenue[month]) {
      monthlyRevenue[month] = 0;
    }

    monthlyRevenue[month] += trip.revenue;
  });

  return {
    totalRevenue,
    totalTrips,
    monthlyRevenue,
  };
};
export const getProfitAnalytics = async () => {
  const trips = await prisma.trip.findMany({
    select: {
      profit: true,
      createdAt: true,
    },
  });

  const totalProfit = trips.reduce(
    (sum, trip) => sum + trip.profit,
    0
  );

  const averageProfit =
    trips.length > 0 ? totalProfit / trips.length : 0;

  const monthlyProfit: Record<string, number> = {};

  trips.forEach((trip) => {
    const month = trip.createdAt.toLocaleString("default", {
      month: "long",
    });

    if (!monthlyProfit[month]) {
      monthlyProfit[month] = 0;
    }

    monthlyProfit[month] += trip.profit;
  });

  return {
    totalProfit,
    averageProfit,
    monthlyProfit,
  };
};