"use client";

import React, { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { CTA } from "../CTA";
import MobileSwiper from "./MobileSwiper";
import { useIsMobile } from "../../hooks/useIsMobile";
import { Content } from "@prismicio/client";

export type ProductGridClientProps = {
  productCategories: Content.ProductCategoryDocument<string>[];
};

const ProductGridClient: React.FC<ProductGridClientProps> = ({
  productCategories,
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
    return <MobileSwiper productCategories={productCategories} />;
  }

  return (
    <Container>
      <div className="landing-product-grid desktop-grid">
        {productCategories.map((category) => (
          <div key={category.id} className="landing-product-grid__card">
            <PrismicNextImage field={category.data.product_category_image} />
            <div className="landing-product-grid__content">
              <div className="landing-product-grid__text-wrapper">
                <h3 className="landing-product-grid__title">
                  {category.data.product_category_title || ""}
                </h3>
                <PrismicRichText
                  field={category.data.product_category_description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="landing-product-grid__description line-clamp">
                        {children}
                      </p>
                    ),
                  }}
                />
              </div>
              {category.data.product_page && (
                <CTA
                  link={category.data.product_page}
                  label="ver producto"
                  className="landing-product-grid__cta cta"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductGridClient;
