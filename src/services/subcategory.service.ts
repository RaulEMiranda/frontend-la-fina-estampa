import { Subcategory } from "@/schemas/subcategory.schema";
import api from "@/utils/api";


export const getSubcategories = async (): Promise<Subcategory[]> => {
  const { data } = await api.get("/subcategories/");
  return data;
};

export const getSubcategory = async (name: string): Promise<Subcategory> => {
  const { data } = await api.get(`/subcategories/${name}/`);
  return data;
};
