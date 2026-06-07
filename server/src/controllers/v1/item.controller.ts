import type { IItemInput } from "../../models/item.model.js";
import type { NextFunction, Request, Response } from "express";
import type { IdParams } from "../../types/api.js";
import * as itemService from "../../services/v1/item.service.js";

export const createItemControllerV1 = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: IItemInput = req.body;
    const newItem = await itemService.createItemService(data);

    return res.json({
      success: true,
      message: "Item created successfully",
      data: newItem,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllItemsPaginatedControllerV1 = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    const items = await itemService.getAllItemsPaginatedService(page, limit);

    return res.status(200).json({
      success: true,
      message: "Items fetched successfully",
      data: items,
    });
  } catch (error) {
    next(error);
  }
};

export const getItemByIdControllerV1 = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const item = await itemService.getItemByIdService(id);

    return res.status(200).json({
      success: true,
      message: "Item fetched successfully",
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteItemByIdControllerV1 = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    await itemService.deleteItemByIdService(id);

    return res.status(200).json({
      success: true,
      message: "Item deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateItemByIdControllerV1 = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const data: IItemInput = req.body;
    const updatedItem = await itemService.updateItemByIdService(id, data);

    return res.status(200).json({
      success: true,
      message: "Item updated successfully",
      data: updatedItem,
    });
  } catch (error) {
    next(error);
  }
};
