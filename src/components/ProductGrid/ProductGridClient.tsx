"use client";

import React, { useEffect, useState } from "react";
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
    <div className="landing-product-grid desktop-grid">
      {productCategories.map((category) => (
        <div key={category.id} className="product-card">
          <PrismicNextImage field={category.data.product_category_image} />
          <h3 className="product-title">
            {category.data.product_category_title || ""}
          </h3>
          <PrismicRichText
            field={category.data.product_category_description}
            components={{
              paragraph: ({ children }) => <p>{children}</p>,
            }}
          />
          {category.data.product_page && (
            <CTA
              link={category.data.product_page}
              label="View Products"
              className="cta in-prod"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductGridClient;
