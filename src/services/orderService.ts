import { Order, OrderResponse } from "../types/orders";
import { ORDERS_URL } from "../constants/env-vars.ts";

export const postOrder = async (order: Order): Promise<OrderResponse> => {
  const response = await fetch(ORDERS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });

  return response.json();
};