import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/queryKey";
import { fetchSearchResults } from "../services/searchService";

export const useSearch = (query: string) => {
  const queryResult = useQuery({
    queryKey: [QUERY_KEYS.search, query],
    queryFn: () => fetchSearchResults(query),
    enabled: Boolean(query),
  });

  return {
    results: queryResult.data || [],
    count: queryResult.data || 0,
    isLoading: queryResult.isLoading,
    isError: queryResult.isError,
    error: queryResult.error,
    isEmpty: !queryResult.isLoading && (queryResult.data?.length === 0),
    refetch: queryResult.refetch
  };
};