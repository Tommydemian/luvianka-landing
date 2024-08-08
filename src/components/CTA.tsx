import React from "react";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

type CTAProps = PrismicNextLinkProps & {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
};

export const CTA = ({
  className = "main-cta",
  children,
  ...rest
}: CTAProps) => {
  return (
    <PrismicNextLink className={className} {...rest}>
      {children}
    </PrismicNextLink>
  );
};
