import * as transactionService from "../../services/v1/transaction.service.js";
import type { NextFunction, Request, Response } from "express";
import type { ITransactionInput } from "../../models/transaction.model.js";
import type { IdParams } from "../../types/api.js";

export const createTransactionControllerV1 = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: ITransactionInput = req.body;

    const newTransaction =
      await transactionService.createTransactionServiceV1(data);

    return res.status(200).json({
      success: true,
      message: "Transaction Created Successfully",
      data: newTransaction,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTransactionControllerV1 = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    const transactions = await transactionService.getAllTransactionServiceV1(
      page,
      limit,
    );

    return res.status(200).json({
      success: true,
      message: "Transactions Fetched Successfully",
      data: transactions,
    });
  } catch (error) {
    next(error);
  }
};

export const getTransactionByIdControllerV1 = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;

    const transaction =
      await transactionService.getTransactionByIdServiceV1(id);

    return res.status(200).json({
      success: true,
      message: "Transaction Fetched Successfully",
      data: transaction,
    });
  } catch (error) {
    next(error);
  }
};

export const getTransactionsByItemIdPaginatedControllerV1 = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;

    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    const transactions =
      await transactionService.getTransactionsByItemIdPaginatedServiceV1(
        id,
        page,
        limit,
      );

    return res.status(200).json({
      success: true,
      message: "Transactions Fetched Successfully",
      data: transactions,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTransactionByIdControllerV1 = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const data: ITransactionInput = req.body;

    const updatedTransaction =
      await transactionService.updateTransactionByIdServiceV1(id, data);

    return res.status(200).json({
      success: true,
      message: "Transaction Updated Successfully",
      data: updatedTransaction,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTransactionByIdControllerV1 = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;

    const deletedTransaction =
      await transactionService.deleteTransactionByIdServiceV1(id);

    return res.status(200).json({
      success: true,
      message: "Transaction Deleted Successfully",
      data: deletedTransaction,
    });
  } catch (error) {
    next(error);
  }
};
