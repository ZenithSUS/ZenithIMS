import type {
  ITransaction,
  ITransactionInput,
} from "../models/transaction.model.js";
import type { IPaginatedResponse } from "../types/api.js";
import type { UpdateTransactionInput } from "../schemas/transaction.schema.js";
import Transaction from "../models/transaction.model.js";

export const createTransaction = async (transaction: ITransactionInput) => {
  const newTransaction = await Transaction.create(transaction);
  return newTransaction.toObject();
};

export const getAllTransactionPaginated = async (
  page: number,
  limit: number,
): Promise<IPaginatedResponse<ITransaction>> => {
  const skip = (page - 1) * limit;
  const [transactions, total] = await Promise.all([
    Transaction.find().skip(skip).limit(limit).lean().sort({ createdAt: -1 }),
    Transaction.countDocuments(),
  ]);

  return {
    data: transactions,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
};

export const getTransactionById = async (id: string) => {
  const transaction = await Transaction.findById(id).lean();
  return transaction;
};

export const getTransactionsByItemIdPaginated = async (
  itemId: string,
  page: number,
  limit: number,
): Promise<IPaginatedResponse<ITransaction>> => {
  const skip = (page - 1) * limit;

  const [transactions, total] = await Promise.all([
    Transaction.find({ itemId }).skip(skip).limit(limit).lean().sort({
      createdAt: -1,
    }),
    Transaction.countDocuments({ itemId }),
  ]);

  return {
    data: transactions,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
};

export const getTransactionDashboard = async () => {
  const startOfToday = new Date().setHours(0, 0, 0, 0);
  const endOfToday = new Date().setHours(23, 59, 59, 999);

  const [totalStockIn, totalStockOutToday] = await Promise.all([
    Transaction.countDocuments({ transactionType: "IN" }),
    Transaction.countDocuments({
      transactionType: "OUT",
      createdAt: { $gte: startOfToday, $lte: endOfToday },
    }),
  ]);

  return { totalStockIn, totalStockOutToday };
};

export const updateTransactionById = async (
  id: string,
  transaction: UpdateTransactionInput,
) => {
  const updatedTransaction = await Transaction.findByIdAndUpdate(
    id,
    transaction,
    {
      returnDocument: "after",
    },
  ).lean();

  return updatedTransaction;
};

export const deleteTransactionById = async (id: string) => {
  const deletedTransaction = await Transaction.findByIdAndDelete(id).lean();
  return deletedTransaction;
};
