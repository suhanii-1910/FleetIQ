import { Router } from "express";
import {
  addTrip,
  getTrips,
  editTrip,
  removeTrip,
} from "../controllers/trip.controller";

const router = Router();

router.post("/", addTrip);
router.get("/", getTrips);
router.put("/:id", editTrip);
router.delete("/:id", removeTrip);

export default router;