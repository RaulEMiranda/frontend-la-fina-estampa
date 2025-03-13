import { z } from "zod";

export const CouponSchema = z.object({
  id: z.number().optional(),
  code: z.string().max(20, "Máximo 20 caracteres"),
  discount_amount: z.number().positive("Debe ser un número positivo"),
  start_date: z.string().datetime(),
  end_date: z.string().datetime(),
  is_active: z.boolean(),
});

export type Coupon = z.infer<typeof CouponSchema>;
