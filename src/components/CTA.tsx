import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { LinkField, KeyTextField } from "@prismicio/client";
import classNames from "classnames";

type CTAVariant = "primary" | "secondary";

type CTAProps = {
  label: KeyTextField;
  link: LinkField;
  className?: string;
  variant?: CTAVariant;
  inProd?: boolean;
  onClick?: () => void;
};

export const CTA: React.FC<CTAProps> = ({
  label = "contactanos",
  link,
  className,
  variant = "primary",
  onClick,
}) => {
  const ctaClass = classNames(
    "cta",
    {
      "cta--primary": variant === "primary",
      "cta--secondary": variant === "secondary",
    },
    className
  );
  return (
    <PrismicNextLink field={link} onClick={onClick} className={ctaClass}>
      {label}
    </PrismicNextLink>
  );
};
