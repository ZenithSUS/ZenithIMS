import { z } from "zod";
import { objectIdSchema, paginationSchema } from "../utils/zod-utils.js";

export const itemParamsSchema = z.object({
  id: objectIdSchema,
});

export const createItemSchema = z.object({
  itemCode: z.string().min(1, "Item code is required"),
  itemName: z.string().min(1, "Item name is required"),
  category: z.string().min(1, "Category is required"),
  unit: z.string().min(1, "Unit is required"),
  currentStock: z.number().min(0, "Current stock cannot be negative"),
  minimumStock: z.number().min(0, "Minimum stock cannot be negative"),
  location: z.string().min(1, "Location is required"),
});

export const getAllItemsPaginatedSchema = z.object({
  ...paginationSchema,
});

export const updateItemSchema = z.object({
  id: objectIdSchema,
  item: createItemSchema
    .partial()
    .refine((item) => Object.keys(item).length > 0, {
      message: "At least one field must be provided for update",
    }),
});

export type UpdateItemInput = z.infer<typeof updateItemSchema>["item"];
