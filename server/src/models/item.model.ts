import { Document, model, Schema } from "mongoose";

export interface IItem extends Document {
  itemCode: string;
  itemName: string;
  category: string;
  unit: string;
  currentStock: number;
  minimumStock: number;
  location: string;
}

export interface IItemInput {
  itemCode: string;
  itemName: string;
  category: string;
  unit: string;
  currentStock: number;
  minimumStock: number;
  location: string;
}

const itemSchema = new Schema<IItem>(
  {
    itemCode: {
      type: String,
      required: true,
      unique: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "General",
    },
    unit: {
      type: String,
    },
    currentStock: {
      type: Number,
      default: 0,
    },
    minimumStock: {
      type: Number,
      default: 0,
    },
    location: {
      type: String,
      default: "Warehouse",
    },
  },
  {
    timestamps: true,
  },
);

itemSchema.index({ itemCode: 1 });

export default model<IItem>("Item", itemSchema);
