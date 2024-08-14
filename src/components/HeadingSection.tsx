import React from "react";
import { KeyTextField } from "@prismicio/client";
import { UnderLineIcon } from "@/components/Icons/UnderlineIcon";

type HeadingSectionProps = {
  eyebrowText: KeyTextField;
  mainHeading: KeyTextField;
  hasSvg?: boolean;
};

export const HeadingSection: React.FC<HeadingSectionProps> = ({
  eyebrowText,
  mainHeading,
  hasSvg = false,
}) => {
  return (
    <div className="heading-section">
      <h1 className="heading-section__eyebrow-text">{eyebrowText}</h1>
      <h2 className="heading-section__main-heading">{mainHeading}</h2>
      {hasSvg && <UnderLineIcon />}
    </div>
  );
};
