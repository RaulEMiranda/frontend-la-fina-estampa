import api from "@/utils/api";
import { Order } from "@/schemas/order.schema";
import { OrderItem } from "@/schemas/orderItem.schema";

// Crear una orden nueva (Checkout)
export const createOrder = async (orderData: Partial<Order>) => {
  const { data } = await api.post<Order>("/orders/", orderData);
  return data;
};

// Obtener las órdenes de un cliente específico
export const getOrdersByCustomer = async (customerId: number) => {
  const { data } = await api.get<Order[]>(`/orders/?customer=${customerId}`);
  return data;
};

// Obtener detalles de una orden específica
export const getOrderById = async (orderId: number) => {
  const { data } = await api.get<Order>(`/orders/${orderId}/`);
  return data;
};

// Obtener los productos dentro de una orden específica
export const getOrderItems = async (orderId: number) => {
  const { data } = await api.get<OrderItem[]>(`/orders/${orderId}/items/`);
  return data;
};
