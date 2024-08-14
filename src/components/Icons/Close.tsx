import React from "react";
import { IconElementProps } from "@/../types";

export const CloseIcon: React.FC<IconElementProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 011.06 0l12 12a.75.75 0 11-1.06 1.06l-12-12a.75.75 0 010-1.06z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M18.53 5.47a.75.75 0 010 1.06l-12 12a.75.75 0 01-1.06-1.06l12-12a.75.75 0 011.06 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
