import { Product } from "@/schemas/product.schema";
import { apiPublic } from "@/utils/api";

export const getProducts = async (params?: {
  page?: number;
  page_size?: number;
  search?: string;
  ordering?: "price" | "-price" | "name" | "-name";
}): Promise<{ results: Product[]; count: number }> => {
  const { data } = await apiPublic.get("/products/", { params });
  return data;
};

export const getProduct = async (id: number): Promise<Product> => {
  const { data } = await apiPublic.get(`/products/${id}/`);
  return data;
};

export const getProductsByCategory = async (
  category_name: string,
  subcategory?: string
): Promise<{ results: Product[]; count: number }> => {
  const { data } = await apiPublic.get(`/products/category/${category_name}/`, {
    params: subcategory ? { subcategory } : {},
  });
  return data;
};
