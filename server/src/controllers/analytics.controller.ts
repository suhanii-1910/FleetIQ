import { Request, Response } from "express";
import {
  getRevenueAnalytics,
  getProfitAnalytics,
} from "../services/analytics.service";

export const getRevenue = async (req: Request, res: Response) => {
  try {
    const stats = await getRevenueAnalytics();

    res.status(200).json({
      success: true,
      stats,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getProfit = async (req: Request, res: Response) => {
  try {
    const stats = await getProfitAnalytics();

    res.status(200).json({
      success: true,
      stats,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};