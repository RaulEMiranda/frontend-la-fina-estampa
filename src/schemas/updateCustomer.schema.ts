import { z } from "zod";

export const UpdateCustomerSchema = z.object({
  phone: z
    .string()
    .min(7, "El número debe tener al menos 7 dígitos")
    .max(15, "El número no debe exceder 15 dígitos")
    .nullable()
    .optional(),
  address: z
    .string()
    .max(255, "La dirección no debe exceder 255 caracteres")
    .nullable()
    .optional(),
  first_name: z.string().min(1, "El nombre no puede estar vacío").optional(),
  last_name: z.string().min(1, "El apellido no puede estar vacío").optional(),
  email: z.string().email("Debe ser un email válido").optional(),
});

export type UpdateCustomer = z.infer<typeof UpdateCustomerSchema>;
