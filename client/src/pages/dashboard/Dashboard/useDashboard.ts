import useDashboardData from "@/feature/dashboard/useGetDashboardData";

const useDashboard = () => {
  const {
    data: dashboardData,
    isLoading,
    isError,
    refetch: refetchItems,
  } = useDashboardData();

  return {
    dashboardData,
    isLoading,
    isError,
    refetchItems,
  };
};

export default useDashboard;
