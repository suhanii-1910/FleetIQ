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
export const getTopTrucks = async () => {
  const trucks = await prisma.truck.findMany({
    include: {
      trips: true,
    },
  });

  return trucks.map((truck) => {
    const totalRevenue = truck.trips.reduce(
      (sum, trip) => sum + trip.revenue,
      0
    );

    const totalProfit = truck.trips.reduce(
      (sum, trip) => sum + trip.profit,
      0
    );

    return {
      truckNumber: truck.truckNumber,
      totalRevenue,
      totalProfit,
      totalTrips: truck.trips.length,
    };
  });
};
export const getTopCustomers = async () => {
  const customers = await prisma.customer.findMany({
    include: {
      trips: true,
    },
  });

  return customers.map((customer) => {
    const totalRevenue = customer.trips.reduce(
      (sum, trip) => sum + trip.revenue,
      0
    );

    const totalProfit = customer.trips.reduce(
      (sum, trip) => sum + trip.profit,
      0
    );

    return {
      customerName: customer.name,
      company: customer.company,
      totalRevenue,
      totalProfit,
      totalTrips: customer.trips.length,
    };
  });
};
export const getTopDrivers = async () => {
  const drivers = await prisma.driver.findMany({
    include: {
      trips: true,
    },
  });

  return drivers.map((driver) => {
    const totalRevenue = driver.trips.reduce(
      (sum, trip) => sum + trip.revenue,
      0
    );

    const totalProfit = driver.trips.reduce(
      (sum, trip) => sum + trip.profit,
      0
    );

    return {
      driverName: driver.name,
      totalRevenue,
      totalProfit,
      totalTrips: driver.trips.length,
    };
  });
};