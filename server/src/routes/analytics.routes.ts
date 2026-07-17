import express from "express";
import {
  getRevenue,
  getProfit,
} from "../controllers/analytics.controller";

const router = express.Router();

router.get("/revenue", getRevenue);
router.get("/profit", getProfit);

export default router;