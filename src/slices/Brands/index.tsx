import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Container } from "@/components/Container";

/**
 * Props for `Brands`.
 */
export type BrandsProps = SliceComponentProps<Content.BrandsSlice>;

/**
 * Component for "Brands" Slices.
 */
const Brands = ({ slice }: BrandsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="brands"
    >
      <Container className="container--lg">
        <article className="brands__wrapper">
          <h2 className="brands__heading">{slice.primary.heading}</h2>
          <PrismicRichText
            field={slice.primary.body_text}
            components={{
              paragraph: ({ children }) => (
                <p className="brands__body-text">{children}</p>
              ),
            }}
          />
          {slice.primary.brand_images.map((image, index) => (
            <div key={index} className="brands__image-container">
              <PrismicNextImage
                field={image.image1}
                className="brands__image"
              />
              <PrismicNextImage
                field={image.image2}
                className="brands__image"
              />
              <PrismicNextImage
                field={image.image3}
                className="brands__image"
              />
              <PrismicNextImage
                field={image.image4}
                className="brands__image"
              />
            </div>
          ))}
        </article>
      </Container>
    </section>
  );
};

export default Brands;
