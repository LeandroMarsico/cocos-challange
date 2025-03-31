import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/queryKey";
import { postOrder } from "../services/orderService";

export const useOrder = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.orders],
      });
    },
  });

  return {
    placeOrder: mutation.mutateAsync,
    isPending: mutation.isPending,
    order: mutation.data,
    error: mutation.error,
    reset: mutation.reset,
    isSuccess: mutation.isSuccess, 
    isError: mutation.isError, 
  };
};