"use client";

import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Content, ImageField } from "@prismicio/client";

import classNames from "classnames";

type HeroClientWrapperProps = {
  children: React.ReactNode;
  slice: Content.HeroSlice;
};

export const HeroClientWrapper: React.FC<HeroClientWrapperProps> = ({
  children,
  slice,
}) => {
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

  if (!isMounted) return;
  return (
    <section
      className={classNames("hero", {
        "hero--default": !isVar,
        "hero--is-var": isVar,
      })}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        background: `url(${isMobile ? bgMobileImage?.url : bgImage.url})`,
      }}
    >
      {children}
    </section>
  );
};
