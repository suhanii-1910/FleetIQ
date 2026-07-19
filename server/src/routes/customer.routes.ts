import { Router } from "express";
import { protect } from "../middleware/auth.middleware";

import {
  addCustomer,
  getCustomers,
  editCustomer,
  removeCustomer,
} from "../controllers/customer.controller";

const router = Router();

router.post("/", protect, addCustomer);
router.get("/", protect, getCustomers);
router.put("/:id", protect, editCustomer);
router.delete("/:id", protect, removeCustomer);

export default router;