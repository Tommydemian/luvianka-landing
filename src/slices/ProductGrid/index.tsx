import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { UnderLineIcon } from "@/components/Icons/UnderlineIcon";
import ProductGridClient from "@/components/ProductGrid/ProductGridClient";
import { Product } from "@/components/ProductGrid/ProductGridClient";

export type ProductsGridProps = SliceComponentProps<Content.ProductSliceSlice>;

const ProductsGrid = ({ slice }: ProductsGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container-x"
    >
      <div className="section-heading-container">
        <h1 className="section-heading-pretitle">
          {slice.primary.eyebrow_text}
        </h1>
        <h2 className="section-heading-title">{slice.primary.main_heading}</h2>
        <UnderLineIcon />
      </div>
      <ProductGridClient
        productCards={slice.primary.product_grid as unknown as Product[]}
      />
    </section>
  );
};

export default ProductsGrid;
