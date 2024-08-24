"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { PrismicNextImage } from "@prismicio/next";
import { CTA } from "../CTA";
import { PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

type ProductCardProps = {
  category: Content.ProductCategoryDocument<string>;
};

const ProductCard: React.FC<ProductCardProps> = ({ category }) => {
  const {
    product_category_description,
    product_category_image,
    product_page,
    product_category_title,
  } = category.data;

  return (
    <div className="product-card">
      <PrismicNextImage field={product_category_image} />
      <h3 className="product-title">{product_category_title}</h3>
      <PrismicRichText
        field={product_category_description}
        components={{
          paragraph: ({ children }) => <p>{children}</p>,
        }}
      />
      {product_page && (
        <CTA link={product_page} label="View Products" className="cta" />
      )}
    </div>
  );
};

type MobileSwiperProps = {
  productCategories: Content.ProductCategoryDocument<string>[];
};

const MobileSwiper: React.FC<MobileSwiperProps> = ({ productCategories }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1.5}
      spaceBetween={20}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      className="landing-product-grid mobile-swiper"
    >
      {productCategories.map((category) => (
        <SwiperSlide key={category.id}>
          <ProductCard category={category} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileSwiper;
