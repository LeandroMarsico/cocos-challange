import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { QUERY_KEYS } from "../constants/queryKey";

export const useLocalSearch = <T,>(
  data: T[],
  filterFn: (item: T, term: string) => boolean,
  options?: { enabled?: boolean }
) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const query = useQuery({
    queryKey: [QUERY_KEYS.localSearch, searchTerm],
    queryFn: () => {
      if (!searchTerm.trim()) return [];
      return data.filter((item) => filterFn(item, searchTerm));
    },
    enabled: options?.enabled ?? !!data,
  });

  return {
    searchTerm,
    setSearchTerm,
    results: query.data || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch
  };
};