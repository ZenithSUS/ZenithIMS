import type { ApiError, ApiResponseWithData } from "@/types/api";
import type { DashboardData } from "@/types/dashboard";
import { useQuery } from "@tanstack/react-query";
import dashboardKeys from "./dashboard.keys";
import { getDashboardData } from "./dashboard.api";

const useDashboardData = () =>
  useQuery<ApiResponseWithData<DashboardData>, ApiError>({
    queryKey: dashboardKeys.all,
    queryFn: () => getDashboardData(),
  });

export default useDashboardData;
