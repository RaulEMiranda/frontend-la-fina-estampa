import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  first_name: z.string().nullable(),
  last_name: z.string().nullable(),
  email: z.string().email("Debe ser un email válido"),
});

export const CustomerSchema = z.object({
  id: z.number(),
  phone: z.string().nullable(),
  address: z.string().nullable(),
  created_at: z.string().datetime({ message: "Debe ser una fecha válida" }),
  user: UserSchema,
});

export type Customer = z.infer<typeof CustomerSchema>;
