import React from "react";
import { IconElementProps } from "@/../types";

export const ChevronIcon: React.FC<IconElementProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="16"
      fill="none"
      viewBox="0 0 11 16"
      className={className}
    >
      <path
        stroke="#000"
        strokeLinecap="square"
        strokeWidth="1.6"
        d="M2 14l7-6-7-6"
      ></path>
    </svg>
  );
};
