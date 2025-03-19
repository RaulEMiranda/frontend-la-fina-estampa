import { Subcategory } from "@/schemas/subcategory.schema";
import { apiPublic } from "@/utils/api";



export const getSubcategories = async (): Promise<Subcategory[]> => {
  const { data } = await apiPublic.get("/subcategories/");
  return data;
};

export const getSubcategory = async (name: string): Promise<Subcategory> => {
  const { data } = await apiPublic.get(`/subcategories/${name}/`);
  return data;
};
