import { Router } from "express";
import * as itemController from "../../controllers/v1/item.controller.js";

const router = Router();

router.post("/", itemController.createItemControllerV1);
router.get("/", itemController.getAllItemsPaginatedControllerV1);
router.get("/:id", itemController.getItemByIdControllerV1);
router.put("/:id", itemController.updateItemByIdControllerV1);
router.delete("/:id", itemController.deleteItemByIdControllerV1);

export default router;
