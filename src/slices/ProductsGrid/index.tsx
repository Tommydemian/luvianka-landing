import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { UnderLineSvg } from "@/components/UnderlineSvg";
import { CTA } from "@/components/CTA";

/**
 * Props for `ProductsGrid`.
 */
export type ProductsGridProps = SliceComponentProps<Content.ProductsGridSlice>;

/**
 * Component for "ProductsGrid" Slices.
 */
const ProductsGrid = ({ slice }: ProductsGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="section-heading-container">
        <h1 className="section-heading-pretitle">{slice.primary.heading}</h1>
        <h2 className="section-heading-title">{slice.primary.sub_heading}</h2>
        <UnderLineSvg />
      </div>
      <div className="landing-product-grid">
        {slice.primary.product_card.map(
          ({
            button_link,
            button_text,
            product_description,
            product_image,
            product_title,
          }) => (
            <div key={product_title} className="product-card">
              <PrismicNextImage field={product_image} />
              <h3>{product_title}</h3>
              <p>{product_description}</p>
              <CTA className="main-cta in-prod" field={button_link}>
                {button_text}
              </CTA>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ProductsGrid;
