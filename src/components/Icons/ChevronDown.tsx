import React from "react";
import { IconElementProps } from "@/../types";

export const ChevronDownIcon: React.FC<IconElementProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.25em"
      height="1.25em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="none"
        stroke="#05090c"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 9l6 6 6-6"
      ></path>
    </svg>
  );
};
