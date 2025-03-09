import {z} from 'zod';

export const ProductSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    description: z.string(),
    images: z.array(z.string()),
    category: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export const ProductResponseSchema = z.object({
    data: z.array(ProductSchema),
});

export type Product = z.infer<typeof ProductSchema>;