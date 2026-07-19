import express from "express";
import { protect } from "../middleware/auth.middleware";

import {
  getRevenue,
  getProfit,
  topTrucks,
  topCustomers,
  topDrivers,
} from "../controllers/analytics.controller";

const router = express.Router();

router.get("/revenue", protect, getRevenue);
router.get("/profit", protect, getProfit);
router.get("/top-trucks", protect, topTrucks);
router.get("/top-customers", protect, topCustomers);
router.get("/top-drivers", protect, topDrivers);

export default router;