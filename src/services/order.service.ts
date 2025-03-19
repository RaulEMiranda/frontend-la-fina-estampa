import { Order } from "@/schemas/order.schema";
import { apiPrivate } from "@/utils/api";

export const getOrders = async (): Promise<Order[]> => {
  const { data } = await apiPrivate.get("/orders/");
  return data;
};

export const getOrder = async (id: number): Promise<Order> => {
  const { data } = await apiPrivate.get(`/orders/${id}/`);
  return data;
};
