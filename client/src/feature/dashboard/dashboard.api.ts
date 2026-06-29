import api from "@/lib/axios";
import type { ApiResponseWithData } from "@/types/api";
import type { DashboardData } from "@/types/dashboard";

export const getDashboardData = async () => {
  const { data: res } =
    await api.get<ApiResponseWithData<DashboardData>>(`/api/v1/dashboard`);

  return res;
};
