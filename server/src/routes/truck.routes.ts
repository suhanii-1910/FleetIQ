import { Router } from "express";
import {
  addTruck,
  getTrucks,
  getTruck,
  editTruck,
  removeTruck,
} from "../controllers/truck.controller";

const router = Router();

router.post("/", addTruck);
router.get("/", getTrucks);
router.get("/:id", getTruck);
router.put("/:id", editTruck);
router.delete("/:id", removeTruck);

export default router;