import { Document, Schema, Types, model } from "mongoose";

export interface ITransaction extends Document {
  itemId: Types.ObjectId;
  transactionType: "IN" | "OUT";
  quantity: number;
  remarks?: string | undefined;
  createdBy: string;
}

export interface ITransactionInput {
  itemId: string;
  transactionType: "IN" | "OUT";
  quantity: number;
  remarks?: string | undefined;
  createdBy: string;
}

const transactionSchema = new Schema<ITransaction>(
  {
    itemId: {
      type: Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
    transactionType: {
      type: String,
      enum: ["IN", "OUT"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    remarks: {
      type: String,
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

transactionSchema.index({ itemId: 1, createdAt: -1 });

export default model<ITransaction>("Transaction", transactionSchema);
