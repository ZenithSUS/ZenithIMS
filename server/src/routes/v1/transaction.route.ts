import { Router } from "express";
import * as transactionController from "../../controllers/v1/transaction.controller.js";

const router = Router();

router.post("/", transactionController.createTransactionControllerV1);
router.get("/", transactionController.getAllTransactionControllerV1);
router.get(
  "/item/:id",
  transactionController.getTransactionsByItemIdPaginatedControllerV1,
);
router.get("/:id", transactionController.getTransactionByIdControllerV1);
router.put("/:id", transactionController.updateTransactionByIdControllerV1);
router.delete("/:id", transactionController.deleteTransactionByIdControllerV1);

export default router;
