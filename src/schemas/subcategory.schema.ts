import { z } from "zod";

export const SubcategorySchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "El nombre es obligatorio"),
  categoryId: z.number(),
});

export type Subcategory = z.infer<typeof SubcategorySchema>;
