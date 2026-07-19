import { Router } from "express";
import { protect } from "../middleware/auth.middleware";

import {
  addTruck,
  getTrucks,
  getTruck,
  editTruck,
  removeTruck,
} from "../controllers/truck.controller";

const router = Router();

router.post("/", protect, addTruck);
router.get("/", protect, getTrucks);
router.get("/:id", protect, getTruck);
router.put("/:id", protect, editTruck);
router.delete("/:id", protect, removeTruck);

export default router;