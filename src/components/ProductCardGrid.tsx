"use client";

import React from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { useCategory } from "@/context/CategoryContext";
import { PrismicNextImage } from "@prismicio/next";

export const ProductCardGrid: React.FC = () => {
  const { selectedCategoryId, categories } = useCategory();

  var category = categories.find((c) => c.id === selectedCategoryId);
  var products = category?.data.category_products;

  return (
    <Section>
      <Container className="product-grid">
        {products?.map(
          ({
            product_code,
            product_image,
            product_lifespan,
            product_title,
            product_type,
            product_weight,
          }) => {
            return (
              <article key={product_code}>
                <div>
                  <PrismicNextImage field={product_image} />
                </div>
                <div>
                  <h3>{product_title}</h3>
                  <p>{product_type}</p>
                  <div>
                    <p>Codigo</p>
                    <p>{product_code}</p>
                  </div>
                  <div>
                    <p>Peso</p>
                    <p>{product_weight}</p>
                  </div>
                  <div>
                    <p>Vida Util</p>
                    <p>{product_lifespan}</p>
                  </div>
                </div>
              </article>
            );
          }
          // <ProductCard key={product.product.link_type} product={product} />
        )}
      </Container>
    </Section>
  );
};
