import React from "react";
import { IconElementProps } from "@/../types";

export const Atom: React.FC<IconElementProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="#05090c"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M18.893 7.936a8.003 8.003 0 0 1-7.774 12.016m-6.012-3.888a8.003 8.003 0 0 1 7.774-12.016" />
        <circle
          cx="17.657"
          cy="6.343"
          r="2"
          transform="rotate(45 17.657 6.343)"
        />
        <circle
          cx="6.343"
          cy="17.657"
          r="2"
          transform="rotate(45 6.343 17.657)"
        />
        <circle cx="12" cy="12" r="2" transform="rotate(45 12 12)" />
      </g>
    </svg>
  );
};
