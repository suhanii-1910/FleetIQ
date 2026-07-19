import { Router } from "express";
import { protect } from "../middleware/auth.middleware";

import {
  addDriver,
  getDrivers,
  editDriver,
  removeDriver,
} from "../controllers/driver.controller";

const router = Router();

router.post("/", protect, addDriver);
router.get("/", protect, getDrivers);
router.put("/:id", protect, editDriver);
router.delete("/:id", protect, removeDriver);

export default router;