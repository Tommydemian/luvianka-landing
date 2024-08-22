"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Content, LinkField } from "@prismicio/client";
// Nav Components
import { NavbarLogo } from "@/components/Navbar/NavbarLogo";
import { MobileMenuToggle } from "@/components/Navbar/MobileMenuToggle";
import { MobileNavigation } from "@/components/Navbar/MobileNavigation";
import { DesktopNavigation } from "@/components/Navbar/DesktopNavigation";

// hooks
import { useIsMobile } from "@/hooks/useIsMobile";
import { useToggle } from "@/hooks/useToggle";

import classNames from "classnames";

type NavBarProps = {
  settings: Content.SettingsDocument[];
  productCategories: Content.ProductCategoryDocument[];
  className?: string;
};

export const NavBar = ({
  settings,
  className,
  productCategories,
}: NavBarProps) => {
  const pathname = usePathname();
  const { isMobile } = useIsMobile();
  const { state: isMenuOpen, toggle: toggleMenu } = useToggle(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const settingsData = settings[0];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      toggleMenu();
    }
  }, [isMobile, isMenuOpen, toggleMenu]);

  const handleLinkClick = () => {
    if (isMobile) {
      toggleMenu();
    }
  };

  return (
    <nav className={classNames("navbar", className, { "is-mobile": isMobile })}>
      <NavbarLogo />
      {isMobile && (
        <MobileMenuToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
      {isMobile ? (
        <MobileNavigation
          settings={settingsData}
          productCategories={productCategories}
          isMenuOpen={isMenuOpen}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          handleLinkClick={handleLinkClick}
        />
      ) : (
        <DesktopNavigation
          settings={settingsData}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          handleLinkClick={handleLinkClick}
          productList={settingsData.data.products}
        />
      )}
    </nav>
  );
};
