"use client";

import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import { CTA } from "../CTA";
import MobileSwiper from "./MobileSwiper";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Product } from "@/../types";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <PrismicNextImage field={product.product_image} />
    <h3 className="product-title">{product.product_title}</h3>
    <p>{product.product_description}</p>
    <CTA className="main-cta in-prod" field={product.button_link}>
      {product.button_text}
    </CTA>
  </div>
);

const ProductGridClient = ({ productCards }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

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
