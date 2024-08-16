"use client";

import React, { createContext, useState, useContext } from "react";
import { Content } from "@prismicio/client";

type CategoryContextType = {
  selectedCategoryId: string | null;
  setSelectedCategoryId: (id: string) => void;
  categories: Content.ProductCategoryDocument[];
  // products: Content.SingleProductDocument[];
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

type CategoryProviderProps = {
  children: React.ReactNode;
  categories: Content.ProductCategoryDocument[];
  // products: Content.SingleProductDocument[];
};

export const CategoryProvider: React.FC<CategoryProviderProps> = ({
  children,
  categories,
  // products,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    categories[0]?.id || null
  );

  return (
    <CategoryContext.Provider
      value={{
        selectedCategoryId,
        setSelectedCategoryId,
        categories,
        // products,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
