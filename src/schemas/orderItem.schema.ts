import { z } from "zod";

export const OrderItemSchema = z.object({
  id: z.number().optional(),
  orderId: z.number(),
  productId: z.number(),
  quantity: z.number().int().min(1, "Debe ser al menos 1"),
  price: z.number().positive(),
});

export type OrderItem = z.infer<typeof OrderItemSchema>;
