import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { LinkField, KeyTextField } from "@prismicio/client";
import clsx from "clsx";

type CTAVariant = "primary" | "secondary";

type CTAProps = {
  label: KeyTextField;
  link: LinkField;
  className?: string;
  variant?: CTAVariant;
  inProd?: boolean;
};

export const CTA: React.FC<CTAProps> = ({
  label = "contactanos",
  link,
  className,
  variant = "primary",
  inProd = false,
}) => {
  const ctaClass = clsx(
    "cta",
    {
      "cta--primary": variant === "primary",
      "cta--secondary": variant === "secondary",
      "cta--in-prod": inProd,
    },
    className
  );
  return (
    <PrismicNextLink field={link} className={ctaClass}>
      {label}
    </PrismicNextLink>
  );
};
