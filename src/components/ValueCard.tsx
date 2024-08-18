import React, { ReactElement } from "react";
import { KeyTextField } from "@prismicio/client";

type ValueCardProps = {
  icon: ReactElement;
  title: string;
  description: string;
};

export const ValueCard: React.FC<ValueCardProps> = () => {
  return <div className="value-card">ValueCard</div>;
};
