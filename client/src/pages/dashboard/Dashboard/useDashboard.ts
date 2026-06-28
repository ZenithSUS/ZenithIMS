import useGetItemsPagination from "@/feature/item/useGetItemsPagination";
import { useState } from "react";

const useDashboard = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    refetch: refetchItems,
  } = useGetItemsPagination(page);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () => setPage((prevPage) => prevPage - 1);

  const items = data?.data.item || [];
  const totalItems = data?.data.pagination.total || 0;

  return {
    page,
    setPage,
    handleNextPage,
    handlePrevPage,
    items,
    totalItems,
    isLoading,
    isError,
    refetchItems,
  };
};

export default useDashboard;
