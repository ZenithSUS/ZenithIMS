import * as itemRepo from "../../repositories/item.repository.js";
import * as itemSchema from "../../schemas/item.schema.js";
import type { IItemInput } from "../../models/item.model.js";
import type { UpdateItemInput } from "../../schemas/item.schema.js";
import AppError from "../../utils/app-error.js";

export const createItemServiceV1 = async (item: IItemInput) => {
  const validatedItem = itemSchema.createItemSchema.parse(item);

  const existing = await itemRepo.getItemByItemCode(validatedItem.itemCode);

  if (existing) {
    throw AppError.Conflict("Item code already exists");
  }

  const newItem = await itemRepo.createItem(validatedItem);
  return newItem;
};

export const getAllItemsPaginatedServiceV1 = async (
  page: number,
  limit: number,
) => {
  const validatedParams = itemSchema.getAllItemsPaginatedSchema.parse({
    page,
    limit,
  });
  const paginatedItems = await itemRepo.getAllItemsPaginated(
    validatedParams.page,
    validatedParams.limit,
  );
  return paginatedItems;
};

export const getItemByIdServiceV1 = async (id: string) => {
  const validatedParams = itemSchema.itemParamsSchema.parse({ id });
  const item = await itemRepo.getItemById(validatedParams.id);

  if (!item) {
    throw AppError.NotFound("Item not found");
  }

  return item;
};

export const updateItemByIdServiceV1 = async (
  id: string,
  item: UpdateItemInput,
) => {
  const validatedParams = itemSchema.updateItemSchema.parse({ id, item });

  const existing = await itemRepo.getItemById(validatedParams.id);

  if (!existing) {
    throw AppError.NotFound("Item not found");
  }

  const updatedItem = await itemRepo.updateItem(
    validatedParams.id,
    validatedParams.item,
  );
  return updatedItem;
};

export const deleteItemByIdServiceV1 = async (id: string) => {
  const validatedParams = itemSchema.itemParamsSchema.parse({ id });

  const existing = await itemRepo.getItemById(validatedParams.id);

  if (!existing) {
    throw AppError.NotFound("Item not found");
  }

  const deletedItem = await itemRepo.deleteItem(validatedParams.id);
  return deletedItem;
};
