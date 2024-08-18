import React from "react";
import dynamic from "next/dynamic";
import { Content } from "@prismicio/client";
import { CTA } from "@/components/CTA";

const HeroClientWrapper = dynamic(
  () => import("../../components/HeroClientWrapper"),
  {
    ssr: false,
  }
);

import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import classNames from "classnames";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const showCTA = slice.variation === "default";
  const isVar = slice.variation === "heroNoCta";

  const ContentWrapper = isVar ? "div" : React.Fragment;
  const contentWrapperProps = isVar
    ? { className: "container", style: { width: "100%" } }
    : {};

  return (
    <HeroClientWrapper slice={slice}>
      <ContentWrapper {...contentWrapperProps}>
        <div className={classNames({ "hero__desc-container-bg": isVar })}>
          <PrismicRichText
            field={slice.primary.hero_heading}
            components={{
              heading1: ({ children }) => (
                <h1
                  className={classNames("hero__main-heading heading-font", {
                    "hero__main-heading--is-var": isVar,
                    "hero__main-heading--default": !isVar,
                  })}
                >
                  {children}
                </h1>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.hero_body}
            components={{
              paragraph: ({ children }) => (
                <p
                  className={classNames("hero__desc", {
                    "hero__desc--is-var": isVar,
                  })}
                >
                  {children}
                </p>
              ),
            }}
          />
        </div>
        {showCTA && (
          <CTA
            link={slice.primary.button_link}
            label={slice.primary.button_text}
            variant="primary"
            className="hero__cta"
          />
        )}
      </ContentWrapper>
    </HeroClientWrapper>
  );
};

export default Hero;
