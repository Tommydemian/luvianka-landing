"use client";

import React, { useEffect, useState, useLayoutEffect } from "react";
import styles from "./Navbar.module.css";

import { Content } from "@prismicio/client";
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
  className?: string;
};

export const NavBar = ({ settings, className }: NavBarProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const { isMobile } = useIsMobile();
  const { state: isMenuOpen, toggle: toggleMenu } = useToggle(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const settingsData = settings[0];

  useLayoutEffect(() => {
    setIsHydrated(true);
  }, []);

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

  if (!isHydrated) {
    return (
      <nav className={classNames(styles.navbar, className)}>
        <NavbarLogo />
      </nav>
    );
  }

  return (
    <nav
      className={classNames(styles.navbar, className, {
        [styles.isMobile]: isMobile,
      })}
    >
      <NavbarLogo />
      {isMobile && (
        <MobileMenuToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
      {isMobile ? (
        <MobileNavigation
          settings={settingsData}
          productList={settingsData.data.products}
          isMenuOpen={isMenuOpen}
          onClose={toggleMenu}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
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
