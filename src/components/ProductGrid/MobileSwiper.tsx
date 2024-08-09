"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { PrismicNextImage } from "@prismicio/next";
import { CTA } from "../CTA";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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

const MobileSwiper = ({ productCards }) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="landing-product-grid mobile-swiper"
      spaceBetween={20}
      slidesPerView={1.5}
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
