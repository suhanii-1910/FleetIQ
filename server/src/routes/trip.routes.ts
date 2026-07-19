import { Router } from "express";
import { protect } from "../middleware/auth.middleware";

import {
  addTrip,
  getTrips,
  editTrip,
  removeTrip,
} from "../controllers/trip.controller";

const router = Router();

router.post("/", protect, addTrip);
router.get("/", protect, getTrips);
router.put("/:id", protect, editTrip);
router.delete("/:id", protect, removeTrip);

export default router;