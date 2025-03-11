import { z } from "zod";

export const PaymentSchema = z.object({
  id: z.number().optional(),
  orderId: z.number(),
  amount: z.number().positive(),
  method: z.enum(["card", "paypal", "bank"]),
  transaction_id: z.string().min(1),
  paid_at: z.string().datetime(),
});

export type Payment = z.infer<typeof PaymentSchema>;
