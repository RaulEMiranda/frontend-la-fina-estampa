"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { getSubcategories } from "@/services/subcategory.service";

export default function Subcategories() {
  const { subcategory } = useParams();
  const [isValid, setIsValid] = useState<boolean | null>(null); // Estado para validar la subcategoría

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const validSubcategories = await getSubcategories();
        console.log(validSubcategories);
        
        const exists = validSubcategories.some((item) => item.name === subcategory);
        console.log(exists);
        
        // Actualiza el estado con el resultado de la validación
        setIsValid(exists);
      } catch (error) {
        console.error("Error al obtener las subcategorías:", error);
        setIsValid(false); // Asume no válida si hay un error
      }
    };

    fetchSubcategories();
  }, [subcategory]);

  // Muestra "not found" si isValid es false
  if (isValid === false) {
    notFound();
  }

  // Mientras valida, muestra un indicador de carga
  if (isValid === null) {
    return <p>Cargando...</p>;
  }

  return <h1>Subcategoría: {subcategory}</h1>;
}
