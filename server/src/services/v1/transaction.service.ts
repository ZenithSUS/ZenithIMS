import * as transactionRepo from "../../repositories/transaction.repository.js";
import * as itemRepo from "../../repositories/item.repository.js";
import * as transactionSchema from "../../schemas/transaction.schema.js";
import type { ITransactionInput } from "../../models/transaction.model.js";
import type { UpdateTransactionInput } from "../../schemas/transaction.schema.js";
import AppError from "../../utils/app-error.js";

export const createTransactionServiceV1 = async (
  transaction: ITransactionInput,
) => {
  const validatedTransaction =
    transactionSchema.createTransactionSchema.parse(transaction);

  const item = await itemRepo.getItemById(validatedTransaction.itemId);

  if (!item) {
    throw AppError.NotFound("Item not found");
  }

  if (
    validatedTransaction.transactionType === "OUT" &&
    item.currentStock < validatedTransaction.quantity
  ) {
    throw AppError.BadRequest("Insufficient stock");
  }

  const newTransaction =
    await transactionRepo.createTransaction(validatedTransaction);

  const stockChange =
    validatedTransaction.transactionType === "IN"
      ? validatedTransaction.quantity
      : -validatedTransaction.quantity;

  await itemRepo.updateItemCurrentStock(
    item._id.toString(),
    item.currentStock + stockChange,
  );

  return newTransaction;
};

export const getAllTransactionServiceV1 = async (
  page: number,
  limit: number,
) => {
  const validatedParams =
    transactionSchema.getAllTransactionPaginatedSchema.parse({ page, limit });

  const paginatedTransaction = transactionRepo.getAllTransactionPaginated(
    validatedParams.page,
    validatedParams.limit,
  );
  return paginatedTransaction;
};

export const getTransactionByIdServiceV1 = async (id: string) => {
  const validatedParams = transactionSchema.transactionParamsSchema.parse({
    id,
  });

  const transaction = await transactionRepo.getTransactionById(
    validatedParams.id,
  );

  if (!transaction) {
    throw AppError.NotFound("Transaction does not exist");
  }

  return transaction;
};

export const getTransactionsByItemIdPaginatedServiceV1 = async (
  itemId: string,
  page: number,
  limit: number,
) => {
  const validatedParams = transactionSchema.getTransactionsByItemIdSchema.parse(
    {
      id: itemId,
      page,
      limit,
    },
  );

  const transactions = await transactionRepo.getTransactionsByItemIdPaginated(
    validatedParams.id,
    validatedParams.page,
    validatedParams.limit,
  );

  if (!transactions) {
    throw AppError.NotFound("Transactions for this item do not exist");
  }

  return transactions;
};

export const updateTransactionByIdServiceV1 = async (
  id: string,
  transaction: UpdateTransactionInput,
) => {
  const validatedParams = transactionSchema.updateTransactionSchema.parse({
    id,
    transaction,
  });

  const existing = await transactionRepo.getTransactionById(validatedParams.id);

  if (!existing) {
    throw AppError.NotFound("Transaction does not exist");
  }

  const updatedTransaction = await transactionRepo.updateTransactionById(
    validatedParams.id,
    validatedParams.transaction,
  );

  return updatedTransaction;
};

export const deleteTransactionByIdServiceV1 = async (id: string) => {
  const validatedParams = transactionSchema.transactionParamsSchema.parse({
    id,
  });

  const existing = await transactionRepo.getTransactionById(validatedParams.id);

  if (!existing) {
    return AppError.NotFound("Transaction does not exist");
  }

  const deletedTransaction = await transactionRepo.deleteTransactionById(
    validatedParams.id,
  );

  return deletedTransaction;
};
