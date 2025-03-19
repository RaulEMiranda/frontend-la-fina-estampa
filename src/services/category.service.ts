import { Category } from "@/schemas/category.schema";
import { apiPublic } from "@/utils/api";

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await apiPublic.get("/categories/");
  return data;
};

export const getCategory = async (name: string): Promise<Category> => {
  const { data } = await apiPublic.get(`/categories/${name}/`);
  return data;
};
