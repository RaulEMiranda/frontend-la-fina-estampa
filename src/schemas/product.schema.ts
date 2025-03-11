import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "El nombre es obligatorio"),
  description: z.string(),
  price: z.number().positive("El precio debe ser positivo"),
  stock: z.number().int().min(0, "El stock no puede ser negativo"),
  categoryId: z.number(),
  subcategoryId: z.number().nullable().optional(),
  image: z.string().url().nullable().optional(),
  created_at: z.string().datetime(),
});

export type Product = z.infer<typeof ProductSchema>;
