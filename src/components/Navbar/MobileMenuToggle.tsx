"use client";

import React from "react";
import { HamburguerIcon } from "../Icons/Hamburguer";
import { CloseIcon } from "../Icons/Close";

type MobileMenuTogglePros = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const MobileMenuToggle: React.FC<MobileMenuTogglePros> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <button
      className="navbar__toggle-menu-button mobile-menu-wrapper"
      onClick={toggleMenu}
    >
      <span className="sr-only">Toggle Menu</span>
      <div className="icon-wrapper">
        <HamburguerIcon
          className={isMenuOpen ? "icon inactive" : "icon active"}
        />
        <CloseIcon className={isMenuOpen ? "icon active" : "icon inactive"} />
      </div>
    </button>
  );
};
