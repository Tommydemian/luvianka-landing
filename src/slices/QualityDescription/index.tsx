import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Container } from "@/components/Container";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `QualityDescription`.
 */
export type QualityDescriptionProps =
  SliceComponentProps<Content.QualityDescriptionSlice>;

/**
 * Component for "QualityDescription" Slices.
 */
const QualityDescription = ({
  slice,
}: QualityDescriptionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="quality-main-content"
    >
      <Container>
        <div className="quality-main-content__layout">
          <div className="quality-main-content__text">
            <h3 className="quality-main-content__title">
              {slice.primary.title}
            </h3>
            <PrismicRichText
              field={slice.primary.body_text}
              components={{
                paragraph: ({ children }) => (
                  <p className="quality-main-content__body-text">{children}</p>
                ),
              }}
            />
          </div>
          <PrismicNextImage
            field={slice.primary.image}
            className="quality-main-content__image"
          />
        </div>
      </Container>
    </section>
  );
};

export default QualityDescription;
