"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import { PrismicNextImage } from "@prismicio/next";
import { CTA } from "../CTA";

import { Product, ProductCardProps } from "./ProductGridClient";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="product-card">
    <PrismicNextImage field={product.product_image} />
    <h3 className="product-title">{product.product_title}</h3>
    <p>{product.product_description}</p>
    {/* <CTA inProd link={product.button_link} label={product.button_text} /> */}
  </div>
);

type MobileSwiperProps = {
  productCards: Product[];
};

// TODO: Add effect to active slice

const MobileSwiper: React.FC<MobileSwiperProps> = ({ productCards }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1.5}
      spaceBetween={20}
      centeredSlidesnavigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
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
