import React from "react";
import { IconElementProps } from "@/../types";

type DropdownOffChevronIconProps = IconElementProps & {
  bold?: boolean;
};

export const DropdownOffChevronIcon: React.FC<DropdownOffChevronIconProps> = ({
  className,
  bold,
}) => {
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
        d="M12.707 15.707a1 1 0 01-1.414 0L5.636 10.05A1 1 0 117.05 8.636l4.95 4.95 4.95-4.95a1 1 0 011.414 1.414l-5.657 5.657z"
        clipRule="evenodd"
        opacity={bold ? "1" : "0.6"}
      ></path>
    </svg>
  );
};
