import type { IItem, IItemInput } from "../models/item.model.js";
import type { IPaginatedResponse } from "../types/api.js";
import type { UpdateItemInput } from "../schemas/item.schema.js";
import Item from "../models/item.model.js";

export const createItem = async (item: IItemInput) => {
  const newItem = await Item.create(item);
  return newItem.toObject();
};

export const getAllItemsPaginated = async (
  page: number,
  limit: number,
): Promise<IPaginatedResponse<IItem>> => {
  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    Item.find().skip(skip).limit(limit).lean().sort({ createdAt: -1 }),
    Item.countDocuments(),
  ]);

  return {
    data: items,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
};

export const getItemById = async (id: string) => {
  const item = await Item.findById(id).lean();
  return item;
};

export const updateItem = async (id: string, item: UpdateItemInput) => {
  const updatedItem = await Item.findByIdAndUpdate(id, item, {
    returnDocument: "after",
  }).lean();

  return updatedItem;
};

export const deleteItem = async (id: string) => {
  const deletedItem = await Item.findByIdAndDelete(id).lean();
  return deletedItem;
};
