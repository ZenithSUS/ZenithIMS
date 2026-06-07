import * as itemRepo from "../../repositories/item.repository.js";
import * as itemSchema from "../../schemas/item.schema.js";
import type { IItemInput } from "../../models/item.model.js";
import type { UpdateItemInput } from "../../schemas/item.schema.js";

export const createItemService = async (item: IItemInput) => {
  const validatedItem = itemSchema.createItemSchema.parse(item);
  const newItem = await itemRepo.createItem(validatedItem);
  return newItem;
};

export const getAllItemsPaginatedService = async (
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

export const getItemByIdService = async (id: string) => {
  const validatedParams = itemSchema.itemParamsSchema.parse({ id });
  const item = await itemRepo.getItemById(validatedParams.id);
  return item;
};

export const updateItemByIdService = async (
  id: string,
  item: UpdateItemInput,
) => {
  const validatedParams = itemSchema.updateItemSchema.parse({ id, item });

  const updatedItem = await itemRepo.updateItem(
    validatedParams.id,
    validatedParams.item,
  );
  return updatedItem;
};

export const deleteItemByIdService = async (id: string) => {
  const validatedParams = itemSchema.itemParamsSchema.parse({ id });
  const deletedItem = await itemRepo.deleteItem(validatedParams.id);
  return deletedItem;
};
