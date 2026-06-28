import api from "@/lib/axios";
import type {
  ApiResponseWithData,
  ApiResponseWithPagination,
} from "@/types/api";
import type { Item } from "@/types/items";

export const getItemsPagination = async (
  page: number,
  limit: number,
): Promise<ApiResponseWithPagination<Item, "item">> => {
  const { data: res } = await api.get<ApiResponseWithPagination<Item, "item">>(
    `/api/v1/items/?page=${page}&limit=${limit}`,
  );

  return res;
};

export const getItemById = async (id: string) => {
  const { data: res } = await api.get<ApiResponseWithData<Item>>(
    `/api/v1/items/${id}`,
  );

  return res;
};
