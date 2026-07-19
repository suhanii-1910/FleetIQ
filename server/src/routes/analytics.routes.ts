import express from "express";
import {
  getRevenue,
  getProfit,
  topTrucks,
  topCustomers,
  topDrivers,
} from "../controllers/analytics.controller";

const router = express.Router();

router.get("/revenue", getRevenue);
router.get("/profit", getProfit);
router.get("/top-trucks", topTrucks);
router.get("/top-customers", topCustomers);
router.get("/top-drivers", topDrivers);

export default router;