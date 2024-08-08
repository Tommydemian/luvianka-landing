"use client";

import React from "react";
import { CTA } from "./CTA";
import { MobileMenuIcon } from "../assets/svgs/MobileMenuIcon";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { CtaInfo } from "@/../types";
import { useMobileMenu } from "@/context/MobileMenuContext";

export const HeaderClientSideWrapper = ({ link, label }: CtaInfo) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { isOpen, toggleMenu } = useMobileMenu();

  return isDesktop ? (
    <CTA className="main-cta" field={link}>
      {label}
    </CTA>
  ) : (
    <MobileMenuIcon isActive={isOpen} toggle={toggleMenu} />
  );
};
