import itemKeys from "./item.keys";
import { useQuery } from "@tanstack/react-query";
import { getItemsPagination } from "./item.api";
import { dataLimits } from "@/config/limits";
import type { ApiError, ApiResponseWithPagination } from "@/types/api";
import type { Item } from "@/types/items";

const useGetItemsPagination = (page: number) =>
  useQuery<ApiResponseWithPagination<Item, "item">, ApiError>({
    queryKey: itemKeys.paginated(page),
    queryFn: () => getItemsPagination(page, dataLimits.item),
  });

export default useGetItemsPagination;
