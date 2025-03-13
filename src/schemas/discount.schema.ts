import { z } from "zod";

export const DiscountSchema = z.object({
  id: z.number().optional(),
  productId: z.number(),
  discount_percentage: z.number().min(0).max(100, "Debe estar entre 0 y 100"),
  start_date: z.string().datetime(),
  end_date: z.string().datetime(),
});

export type Discount = z.infer<typeof DiscountSchema>;
