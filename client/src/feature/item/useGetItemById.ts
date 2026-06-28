import { useQuery } from "@tanstack/react-query";
import { getItemById } from "./item.api";
import itemKeys from "./item.keys";
import type { Item } from "@/types/items";
import type { ApiError, ApiResponseWithData } from "@/types/api";

const useGetItemById = (id: string) =>
  useQuery<ApiResponseWithData<Item>, ApiError>({
    queryKey: itemKeys.byId(id),
    queryFn: () => getItemById(id),
  });

export default useGetItemById;
