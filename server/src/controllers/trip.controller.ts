import { Request, Response } from "express";
import {
  createTrip,
  getAllTrips,
  updateTrip,
  deleteTrip,
} from "../services/trip.service";

export const addTrip = async (req: Request, res: Response) => {
  try {
    const {
      source,
      destination,
      distance,
      revenue,
      fuelCost,
      tollCost,
      otherCost,
      truckId,
      driverId,
      customerId,
      userId,
    } = req.body;

    const trip = await createTrip(
      source,
      destination,
      Number(distance),
      Number(revenue),
      Number(fuelCost),
      Number(tollCost),
      Number(otherCost),
      truckId,
      driverId,
      customerId,
      userId
    );

    res.status(201).json({
      success: true,
      trip,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTrips = async (_req: Request, res: Response) => {
  try {
    const trips = await getAllTrips();

    res.status(200).json({
      success: true,
      trips,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const editTrip = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const trip = await updateTrip(id, req.body);

    res.status(200).json({
      success: true,
      trip,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeTrip = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    await deleteTrip(id);

    res.status(200).json({
      success: true,
      message: "Trip deleted successfully",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};