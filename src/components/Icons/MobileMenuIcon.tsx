"use client";

import React from "react";

type MobileMenuIconProps = {
  isActive: boolean;
  toggle: () => void;
};

export function MobileMenuIcon({ isActive, toggle }: MobileMenuIconProps) {
  return (
    <button className="mobile-menu-wrapper" onClick={toggle}>
      <div className="icon-wrapper">
        <svg
          className={`icon ${isActive ? "active" : "inactive"}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.47 5.47L18.53 18.53M18.53 5.47L5.47 18.53"
          />
        </svg>
        <svg
          className={`icon ${isActive ? "inactive" : "active"}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 6h18M3 12h18M3 18h18"
          />
        </svg>
      </div>
    </button>
  );
}
