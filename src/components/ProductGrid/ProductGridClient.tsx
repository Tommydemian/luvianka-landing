"use client";

import React, { useEffect, useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { CTA } from "../CTA";
import MobileSwiper from "./MobileSwiper";
import { useIsMobile } from "../../hooks/useIsMobile";
import { KeyTextField, ImageField, LinkField } from "@prismicio/client";

export type Product = {
  product_image: ImageField;
  product_title: KeyTextField;
  product_description: KeyTextField;
  button_link: LinkField;
  button_text: KeyTextField;
};

export type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="product-card">
    <PrismicNextImage field={product.product_image} />
    <h3 className="product-title">{product.product_title || ""}</h3>
    <p>{product.product_description || ""}</p>
    {/* <CTA
      link={product.button_link}
      label={product.button_text || ""}
      className="cta in-prod"
    /> */}
  </div>
);

export type ProductGridClientProps = {
  productCards: Product[];
};

const ProductGridClient: React.FC<ProductGridClientProps> = ({
  productCards,
}) => {
  const { isMobile } = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (isMobile) {
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
