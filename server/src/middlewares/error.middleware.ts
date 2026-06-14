import { ZodError } from "zod";
import type { NextFunction, Request, Response } from "express";
import AppError from "../utils/app-error.js";

const errorMiddleware = (
  err: Error,
  _: Request,
  res: Response,
  __: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: err.issues.map((e) => ({
        fields: e.path.join("."),
        message: e.message,
      })),
    });
  } else if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  } else {
    console.log("=".repeat(50));
    console.error("Unexpected error:", err.message);
    console.log("=".repeat(50) + "\n");
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      description: err.message,
    });
  }
};

export default errorMiddleware;
