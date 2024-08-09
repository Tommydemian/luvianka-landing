import React from "react";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

type CTAProps = PrismicNextLinkProps & {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
};

export const CTA = ({
  className,
  children,
  variant = "primary",
  ...rest
}: CTAProps) => {
  const baseClass = "main-cta";
  const variantClass =
    variant === "secondary" ? `${baseClass} secondary` : baseClass;
  const finalClassName = className
    ? `${variantClass} ${className}`
    : variantClass;

  return (
    <PrismicNextLink className={finalClassName} {...rest}>
      {children}
    </PrismicNextLink>
  );
};
