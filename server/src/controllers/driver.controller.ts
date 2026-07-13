import { Request, Response } from "express";
import {
  createDriver,
  getAllDrivers,
  updateDriver,
  deleteDriver,
} from "../services/driver.service";

export const addDriver = async (req: Request, res: Response) => {
  try {
    const {
      name,
      phone,
      licenseNumber,
      salary,
      status,
      userId,
    } = req.body;

    const driver = await createDriver(
      name,
      phone,
      licenseNumber,
      Number(salary),
      status,
      userId
    );

    res.status(201).json({
      success: true,
      driver,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDrivers = async (_req: Request, res: Response) => {
  try {
    const drivers = await getAllDrivers();

    res.status(200).json({
      success: true,
      drivers,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const editDriver = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const driver = await updateDriver(id, req.body);

    res.status(200).json({
      success: true,
      driver,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeDriver = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    await deleteDriver(id);

    res.status(200).json({
      success: true,
      message: "Driver deleted successfully",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};