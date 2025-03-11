import { z } from "zod";

export const OrderSchema = z.object({
  id: z.number().optional(),
  customerId: z.number(),
  total_price: z.number().positive(),
  couponId: z.number().nullable().optional(),
  status: z.enum(["pending", "paid", "shipped"]),
  created_at: z.string().datetime(),
});

export type Order = z.infer<typeof OrderSchema>;
