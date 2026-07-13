import { Request, Response } from "express";
import {
  createTruck,
  getAllTrucks,
  getTruckById,
  updateTruck,
  deleteTruck,
} from "../services/truck.service";

export const addTruck = async (req: Request, res: Response) => {
  try {
    const { truckNumber, model, capacity, status, userId } = req.body;

    const truck = await createTruck(
      truckNumber,
      model,
      Number(capacity),
      status,
      userId
    );

    res.status(201).json({
      success: true,
      truck,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTrucks = async (_req: Request, res: Response) => {
  try {
    const trucks = await getAllTrucks();

    res.status(200).json({
      success: true,
      trucks,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTruck = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const truck = await getTruckById(id);

    if (!truck) {
      return res.status(404).json({
        success: false,
        message: "Truck not found",
      });
    }

    res.status(200).json({
      success: true,
      truck,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const editTruck = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const truck = await updateTruck(id, req.body);

    res.status(200).json({
      success: true,
      truck,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeTruck = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    await deleteTruck(id);

    res.status(200).json({
      success: true,
      message: "Truck deleted successfully",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};