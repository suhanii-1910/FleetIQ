import { Router } from "express";
import {
  addDriver,
  getDrivers,
  editDriver,
  removeDriver,
} from "../controllers/driver.controller";

const router = Router();

router.post("/", addDriver);
router.get("/", getDrivers);
router.put("/:id", editDriver);
router.delete("/:id", removeDriver);

export default router;