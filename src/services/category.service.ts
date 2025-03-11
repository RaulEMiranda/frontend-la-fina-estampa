
import { Category } from "@/schemas/category.schema";
import api from "@/utils/api";

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await api.get("/categories/");
  return data;
};

export const getCategory = async (name: string): Promise<Category> => {
  const { data } = await api.get(`/categories/${name}/`);
  return data;
};
