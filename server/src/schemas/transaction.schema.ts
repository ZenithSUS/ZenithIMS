import { z } from "zod";
import { objectIdSchema, paginationSchema } from "../utils/zod-utils.js";

export const transactionParamsSchema = z.object({
  id: objectIdSchema,
});

export const createTransactionSchema = z.object({
  itemId: objectIdSchema,
  transactionType: z.enum(["IN", "OUT"]),
  quantity: z.number().min(1, "Quantity must be a positive number"),
  remarks: z.string().optional(),
  createdBy: z.string().min(3, "Created by is required"),
});

export const getAllTransactionPaginatedSchema = z.object({
  ...paginationSchema,
});

export const updateTransactionSchema = z.object({
  id: objectIdSchema,
  transaction: createTransactionSchema
    .partial()
    .refine((transaction) => Object.keys(transaction).length > 0, {
      message: "At least one field must be provided for update",
    }),
});

export type UpdateTransactionInput = z.infer<
  typeof updateTransactionSchema
>["transaction"];
