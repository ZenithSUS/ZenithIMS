import type { NextFunction, Request, Response } from "express";
import * as dashboardService from "../../services/v1/dashboard.service.js";

export const getDashboardDataControllerV1 = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const dashboard = await dashboardService.getDashboardDataServiceV1();

    return res.status(200).json({
      success: true,
      message: "Dashboard data fetched successfully",
      data: dashboard,
    });
  } catch (error) {
    next(error);
  }
};
