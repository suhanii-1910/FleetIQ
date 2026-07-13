import { Request, Response } from "express";
import {
  createCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
} from "../services/customer.service";

export const addCustomer = async (req: Request, res: Response) => {
  try {
    const { name, company, phone, email, userId } = req.body;

    const customer = await createCustomer(
      name,
      company,
      phone,
      email,
      userId
    );

    res.status(201).json({
      success: true,
      customer,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCustomers = async (_req: Request, res: Response) => {
  try {
    const customers = await getAllCustomers();

    res.status(200).json({
      success: true,
      customers,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const editCustomer = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const customer = await updateCustomer(id, req.body);

    res.status(200).json({
      success: true,
      customer,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeCustomer = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    await deleteCustomer(id);

    res.status(200).json({
      success: true,
      message: "Customer deleted successfully",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};