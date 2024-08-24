import React from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import ProductGridClient from "@/components/ProductGrid/ProductGridClient";
import { HeadingSection } from "@/components/HeadingSection";

export type ProductsGridProps = SliceComponentProps<Content.ProductSliceSlice>;

const ProductsGrid = async ({
  slice,
}: ProductsGridProps): Promise<JSX.Element> => {
  const client = createClient();

  const productCategories = await client.getAllByType("product_category", {
    fetchLinks: [
      "product_category.product_category_image",
      "product_category.product_category_title",
      "product_category.product_category_description",
      "product_category.category_products",
    ],
  });
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="product-grid"
    >
      <HeadingSection
        eyebrowText={slice.primary.eyebrow_text}
        mainHeading={slice.primary.main_heading}
        hasSvg
      />
      <ProductGridClient productCategories={productCategories} />
    </section>
  );
};

export default ProductsGrid;
