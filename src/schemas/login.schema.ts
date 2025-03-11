import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Debe ser un email válido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export type Login = z.infer<typeof LoginSchema>;
