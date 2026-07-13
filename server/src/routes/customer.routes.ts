import { Router } from "express";
import {
  addCustomer,
  getCustomers,
  editCustomer,
  removeCustomer,
} from "../controllers/customer.controller";

const router = Router();

router.post("/", addCustomer);
router.get("/", getCustomers);
router.put("/:id", editCustomer);
router.delete("/:id", removeCustomer);

export default router;