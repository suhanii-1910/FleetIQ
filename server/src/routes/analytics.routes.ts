import express from "express";
import {
  getRevenue,
  getProfit,
  topTrucks,
} from "../controllers/analytics.controller";

const router = express.Router();

router.get("/revenue", getRevenue);
router.get("/profit", getProfit);
router.get("/top-trucks", topTrucks);

export default router;