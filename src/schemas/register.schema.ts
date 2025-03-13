import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email("Debe ser un email válido"),
  password: z.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .refine(value => /\d/.test(value), "La contraseña debe contener al menos un número"),
});

export type Register = z.infer<typeof RegisterSchema>;
