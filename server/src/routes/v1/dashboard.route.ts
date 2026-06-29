import { Router } from "express";
import * as dashboardController from "../../controllers/v1/dashboard.controller.js";

const router = Router();

router.get("/", dashboardController.getDashboardDataControllerV1);

export default router;
