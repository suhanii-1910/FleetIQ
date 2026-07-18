import express from "express";
import {
  getRevenue,
  getProfit,
  topTrucks,
  topCustomers,
} from "../controllers/analytics.controller";

const router = express.Router();

router.get("/revenue", getRevenue);
router.get("/profit", getProfit);
router.get("/top-trucks", topTrucks);
router.get("/top-customers", topCustomers);

export default router;