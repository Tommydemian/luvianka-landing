import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor,
  className = "",
}) => (
  <section
    className={`section-width ${className}`}
    style={backgroundColor ? { backgroundColor } : undefined}
  >
    {children}
  </section>
);
