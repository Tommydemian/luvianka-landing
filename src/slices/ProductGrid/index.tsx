import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { UnderLineIcon } from "@/components/Icons/UnderlineIcon";
import ProductGridClient from "@/components/ProductGrid/ProductGridClient";
import { HeadingSection } from "@/components/HeadingSection";
import { Container } from "@/components/Container";
import { Product } from "@/components/ProductGrid/ProductGridClient";

export type ProductsGridProps = SliceComponentProps<Content.ProductSliceSlice>;

const ProductsGrid = ({ slice }: ProductsGridProps): JSX.Element => {
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
      <ProductGridClient
        productCards={slice.primary.product_grid as unknown as Product[]}
      />
    </section>
  );
};

export default ProductsGrid;
