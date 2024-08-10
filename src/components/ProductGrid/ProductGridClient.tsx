"use client";

import React, { useEffect, useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { CTA } from "../CTA";
import MobileSwiper from "./MobileSwiper";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ImageField, LinkField } from "@prismicio/client";

export type Product = {
  product_image: ImageField;
  product_title: string;
  product_description: string;
  button_link: LinkField;
  button_text: string;
};

export type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="product-card">
    <PrismicNextImage field={product.product_image} />
    <h3 className="product-title">{product.product_title}</h3>
    <p>{product.product_description}</p>
    <CTA className="main-cta in-prod" field={product.button_link}>
      {product.button_text}
    </CTA>
  </div>
);

export type ProductGridClientProps = {
  productCards: Product[];
};

const ProductGridClient: React.FC<ProductGridClientProps> = ({
  productCards,
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (!isDesktop) {
    return <MobileSwiper productCards={productCards} />;
  }

  return (
    <div className="landing-product-grid desktop-grid">
      {productCards.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGridClient;
