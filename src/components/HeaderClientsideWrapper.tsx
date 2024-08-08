"use client";

import React from "react";
import { CTA } from "./CTA";
import { MobileMenuIcon } from "../assets/svgs/MobileMenuIcon";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { CtaInfo } from "@/../types";

export const HeaderClientSideWrapper = ({ link, label }: CtaInfo) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <CTA className="main-cta" field={link}>
      {label}
    </CTA>
  ) : (
    <MobileMenuIcon />
  );
};
