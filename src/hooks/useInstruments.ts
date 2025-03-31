import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/queryKey";
import { fetchInstruments } from "../services/instrumentService";

export const useInstruments = () => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.instruments],
    queryFn: fetchInstruments,
  });

  return {
    instruments: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
    isEmpty: !query.isLoading && !query.data?.length,
  };
};