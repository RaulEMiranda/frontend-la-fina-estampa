import { OrderItem } from "@/schemas/orderItem.schema";
import { apiPrivate } from "@/utils/api";

export const getOrderItems = async (order_id: number): Promise<OrderItem[]> => {
  const { data } = await apiPrivate.get(`/order-items/${order_id}/`);
  return data;
};

export const getOrderItem = async (item_id: number): Promise<OrderItem> => {
  const { data } = await apiPrivate.get(`/order-items/item/${item_id}/`);
  return data;
};
