import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Container } from "@/components/Container";
import { PrismicNextImage } from "@prismicio/next";
import { KeyTextField } from "@prismicio/client";

/**
 * Props for `CorportationData`.
 */
export type CorportationDataProps =
  SliceComponentProps<Content.CorportationDataSlice>;

/**
 * Component for "CorportationData" Slices.
 */
const CorportationData = ({ slice }: CorportationDataProps): JSX.Element => {
  const corpoData = slice.primary;
  const heading = slice.primary.heading;

  if (!corpoData || !heading) return <></>;

  const words = heading.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="corporation-data"
    >
      <Container>
        <div className="corporation-data-layout">
          <article className="corporation-data__images">
            <PrismicNextImage
              field={corpoData.first_logo}
              className="corporation-data__images-1"
            />
            <PrismicNextImage
              field={corpoData.second_logo}
              className="corporation-data__images-2"
            />
          </article>
          <div className="corporation-data__text-wrapper">
            <h3 className="corporation-data__text-title">
              {firstWord}{" "}
              <span className="corporation-data__text-title corporation-data__text-title--red">
                {restWords.join(" ")}
              </span>
            </h3>
            <PrismicRichText
              field={corpoData.body_text}
              components={{
                paragraph: ({ children }) => (
                  <p className="corporation-data__text-description">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CorportationData;
