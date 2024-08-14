import { Content } from "@prismicio/client";

import { CTA } from "@/components/CTA";

import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const bgImage = slice.primary.hero_background_image;
  return (
    <section
      className="hero"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        background: `url(${bgImage.url})`,
      }}
    >
      <PrismicRichText
        field={slice.primary.hero_heading}
        components={{
          heading1: ({ children }) => (
            <h1 className="hero__main-heading heading-font">{children}</h1>
          ),
        }}
      />

      <PrismicRichText
        field={slice.primary.hero_body}
        components={{
          paragraph: ({ children }) => <p className="hero__desc">{children}</p>,
        }}
      />
      <CTA
        link={slice.primary.button_link}
        label={slice.primary.button_text}
        variant="primary"
      />
    </section>
  );
};

export default Hero;
