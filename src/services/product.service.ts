import { Product } from "@/schemas/product.schema";
import api from "@/utils/api";

interface PaginatedResponse<T> {
  results: T[];
  count: number;
  next: string | null;
  previous: string | null;
}


interface ProductFilters {
  page?: number;
  pageSize?: number;
  category?: number;
  subcategory?: number;
  search?: string;
  ordering?: string;
}

export const getProducts = async (filters: ProductFilters = {}) => {
  const params = new URLSearchParams();

  if (filters.page) params.append("page", filters.page.toString());
  if (filters.pageSize) params.append("page_size", filters.pageSize.toString());
  if (filters.category) params.append("category", filters.category.toString());
  if (filters.subcategory) params.append("subcategory", filters.subcategory.toString());
  if (filters.search) params.append("search", filters.search);
  if (filters.ordering) params.append("ordering", filters.ordering);

  const { data } = await api.get<PaginatedResponse<Product>>(`/products/?${params.toString()}`);
  return data;
};

export const getProductById = async (name: string) => {
  const { data } = await api.get<Product>(`/products/${name}/`);
  return data;
};
