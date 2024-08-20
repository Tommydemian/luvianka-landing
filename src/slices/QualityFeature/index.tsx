import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Container } from "@/components/Container";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `QualityFeature`.
 */
export type QualityFeatureProps =
  SliceComponentProps<Content.QualityFeatureSlice>;

/**
 * Component for "QualityFeature" Slices.
 */
const QualityFeature = ({ slice }: QualityFeatureProps): JSX.Element => {
  const title = slice.primary.title;
  const words = title ? title.split(" ") : [];
  const lastWord = words.length > 0 ? words.pop() : "";
  const remainingWords = words.join(" ");
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="quality"
    >
      <Container>
        <div className="quality__feature">
          <PrismicNextImage field={slice.primary.image} />
          <div className="quality__feature-text">
            <h2
              style={
                {
                  "--text-align": "left",
                  "--margin-inline": "unset",
                } as React.CSSProperties
              }
              className="section-title section-title--quality"
            >
              {remainingWords}{" "}
              {lastWord && (
                <span
                  style={
                    { color: "var(--color-primary)" } as React.CSSProperties
                  }
                  className="accent"
                >
                  {lastWord}
                </span>
              )}
            </h2>
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QualityFeature;
