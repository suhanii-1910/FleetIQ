import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const user = await registerUser(name, email, password);

    const { password: _, ...safeUser } = user;

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: safeUser,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// 👇 ADD THIS BELOW THE REGISTER FUNCTION

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await loginUser(email, password);

    const { password: _, ...safeUser } = result.user;

    res.status(200).json({
      success: true,
      message: "Login successful",
      token: result.token,
      user: safeUser,
    });
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};