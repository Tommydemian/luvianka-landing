"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, EffectCube } from "swiper/modules";
import { PrismicNextImage } from "@prismicio/next";
import { CTA } from "../CTA";

import { Product, ProductCardProps } from "./ProductGridClient";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
// import "swiper/css/scrollbar";

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

type MobileSwiperProps = {
  productCards: Product[];
};

// TODO: Add effect to active slice

const MobileSwiper: React.FC<MobileSwiperProps> = ({ productCards }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Scrollbar, EffectCube]}
      slidesPerView={1}
      spaceBetween={20}
      navigation
      effect="cube"
      pagination={{ type: "fraction" }}
      // scrollbar={{ draggable: true }}
      className="landing-product-grid mobile-swiper"
    >
      {productCards.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileSwiper;
