"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
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

const ProductCard: React.FC<ProductCardProps> = React.memo(({ category }) => {
  const {
    product_category_description,
    product_category_image,
    product_page,
    product_category_title,
  } = category.data;

  return (
    <div className="mobile-product-card">
      <PrismicNextImage field={product_category_image} loading="eager" />
      <div className="mobile-product-card__content-wrapper">
        <h3 className="mobile-product-card__title">{product_category_title}</h3>
        <PrismicRichText
          field={product_category_description}
          components={{
            paragraph: ({ children }) => (
              <p className="mobile-product-card__desc line-clamp">{children}</p>
            ),
          }}
        />
        {product_page && (
          <CTA
            link={product_page}
            label="Ver Producto"
            className="cta cta--mobile"
          />
        )}
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

type MobileSwiperProps = {
  productCategories: Content.ProductCategoryDocument<string>[];
};

const MobileSwiper: React.FC<MobileSwiperProps> = ({ productCategories }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, A11y]}
      slidesPerView={1.5}
      spaceBetween={20}
      speed={300}
      watchSlidesProgress={true}
      slideToClickedSlide={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      a11y={{
        prevSlideMessage: "slide previa",
        nextSlideMessage: "slide siguiente",
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
