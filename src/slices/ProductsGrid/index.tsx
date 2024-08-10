import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { UnderLineSvg } from "@/components/UnderlineSvg";
import ProductGridClient from "@/components/ProductGrid/ProductGridClient";
import { Product } from "@/components/ProductGrid/ProductGridClient";

export type ProductsGridProps = SliceComponentProps<Content.ProductsGridSlice>;

const ProductsGrid = ({ slice }: ProductsGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container-x"
    >
      <div className="section-heading-container">
        <h1 className="section-heading-pretitle">{slice.primary.heading}</h1>
        <h2 className="section-heading-title">{slice.primary.sub_heading}</h2>
        <UnderLineSvg />
      </div>
      <ProductGridClient
        productCards={slice.primary.product_card as unknown as Product[]}
      />
    </section>
  );
};

export default ProductsGrid;
