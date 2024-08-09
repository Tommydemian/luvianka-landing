import { Content } from "@prismicio/client";

import { CTA } from "@/components/CTA";

import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import styles from "@/components/hero.module.css";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
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
            <p className={styles.heroDesc}>{children}</p>
          ),
        }}
      />
      <CTA className="main-cta" field={slice.primary.button_link}>
        {slice.primary.button_text}
      </CTA>
    </section>
  );
};

export default Hero;
