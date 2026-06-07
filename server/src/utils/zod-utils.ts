import { z } from "zod";
import mongoose from "mongoose";

export const objectIdSchema = z
  .string()
  .min(1, "ObjectId is required")
  .refine((id) => mongoose.Types.ObjectId.isValid(id), {
    message: "Invalid Id format",
  });

export const paginationSchema = {
  page: z.number().min(1, "Page must be a positive integer").default(1),
  limit: z
    .number()
    .min(1, "Limit must be a positive integer")
    .max(100, "Limit cannot exceed 100")
    .default(10),
};
