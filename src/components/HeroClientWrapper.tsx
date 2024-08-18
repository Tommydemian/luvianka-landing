"use client";

import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Content, ImageField } from "@prismicio/client";

import classNames from "classnames";

type HeroClientWrapperProps = {
  children: React.ReactNode;
  slice: Content.HeroSlice;
};

const HeroClientWrapper: React.FC<HeroClientWrapperProps> = ({
  children,
  slice,
}) => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);
  const isVar = slice.variation === "heroNoCta";
  const bgImage = slice.primary.hero_background_image;
  const bgMobileImage: ImageField | null = isVar
    ? slice.primary.hero_mobile_background_image
    : slice.primary.hero_background_image;

  const { isMobile } = useIsMobile();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const newBackgroundImage = isMobile
      ? bgMobileImage?.url || bgImage.url
      : bgImage.url;

    if (newBackgroundImage) {
      setBackgroundImage(newBackgroundImage);
    } else {
      setBackgroundImage("");
    }
  }, [isMobile, bgMobileImage, bgImage]);

  if (!isMounted) return null;

  return (
    <section
      className={classNames("hero", {
        "hero--default": !isVar,
        "hero--is-var": isVar,
      })}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={
        {
          "--bg-image": `url(${backgroundImage})`,
        } as React.CSSProperties
      }
    >
      {children}
    </section>
  );
};

export default HeroClientWrapper;
