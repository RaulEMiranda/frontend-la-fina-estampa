"use client";

import { Product } from "@/schemas/product.schema";
import { getCategories, getCategory } from "@/services/category.service";
import { getProductById, getProducts } from "@/services/product.service";
import { useEffect, useState } from "react";

export default function Hola() {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({ page: 1, pageSize: 10, category: 1 }); 
        const result = await getCategory( "Animes")
        const results = await getCategories()
        const product = await getProductById("Satoru Gojo")
        console.log(product);
        
        console.log(results);
        console.log(result);
        
        setProducts(data.results);
        setTotalCount(data.count);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <p>Total de productos: {totalCount}</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
