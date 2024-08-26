import React from "react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { CTA } from "@/components/CTA";

import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import classNames from "classnames";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const def = slice.variation === "default";
  const bgContent = slice.variation === "heroNoCta";
  const headingOnly = slice.variation === "heroOnlyHeading";

  return (
    <section
      className={classNames("relative hero", {
        "hero--before-none": bgContent,
        "hero--before-darker": headingOnly,
      })}
    >
      <PrismicNextImage
        loading="eager"
        priority
        field={slice.primary.hero_background_image}
        className="hero__bg-image"
      />
      <div
        className={classNames("hero__content flow-content", {
          "hero__content--with-bg": bgContent,
        })}
      >
        <PrismicRichText
          field={slice.primary.hero_heading}
          components={{
            heading1: ({ children }) => (
              <h1
                className={classNames("hero__main-heading", {
                  "hero__main-heading--with-bg": bgContent,
                  "hero__main-heading--heading-only": headingOnly,
                })}
              >
                {children}
              </h1>
            ),
          }}
        />
        <PrismicRichText
          field={!headingOnly ? slice.primary?.hero_body : null}
          components={{
            paragraph: ({ children }) => (
              <p
                className={classNames("hero__desc", {
                  "hero__desc--with-bg": bgContent,
                })}
              >
                {children}
              </p>
            ),
          }}
        />
        {def ? (
          <CTA
            link={slice.primary.button_link}
            label={slice.primary.button_text}
            variant="primary"
            className="hero__cta"
          />
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
