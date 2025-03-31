import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/queryKey";
import { fetchPortfolio } from "../services/portfolioService";

export const usePortfolio = () => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.portfolio],
    queryFn: fetchPortfolio,
  });

  return {
    portfolio: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    isEmpty: !query.isLoading && !query.data?.length,
    refetch: query.refetch,
  };
};

