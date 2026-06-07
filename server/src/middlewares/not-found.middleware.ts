import type { Request, Response, NextFunction } from "express";
import AppError from "../utils/app-error.js";
import colors from "../utils/log-colors.js";

const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(404);

  console.log("=".repeat(50));
  console.log(
    `${colors.red}Route not found - ${req.method} ${req.originalUrl}${colors.reset}`,
  );
  console.log("=".repeat(50) + "\n");

  const error = new AppError(
    `Route not found - ${req.method} ${req.originalUrl}`,
    404,
  );

  next(error);
};

export default notFoundMiddleware;
