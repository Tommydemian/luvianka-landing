import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import styles from "@/components/hero.module.css";
import "@/app/globals.css";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  console.log(slice);
  return (
    <section
      className={styles.heroSection}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={slice.primary.hero_heading}
        components={{
          heading1: ({ children }) => (
            <h1 className={`${styles.heroTitle} heading-font`}>{children}</h1>
          ),
        }}
      />

      <PrismicRichText
        field={slice.primary.hero_subheading}
        components={{
          paragraph: ({ children }) => (
            <p className={`${styles.heroDesc} heading-font`}>{children}</p>
          ),
        }}
      />
      <PrismicNextLink field={slice.primary.button_link}>
        {slice.primary.button_text}
      </PrismicNextLink>
    </section>
  );
};

export default Hero;
