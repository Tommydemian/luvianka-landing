"use client";

import React, { useState, useEffect } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";
import { useMobileMenu } from "@/context/MobileMenuContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import DropdownItem from "@/components/DropdownItem";

type ClientNavigationProps = {
  slice: Content.NavigationSlice;
};

export const ClientNavigation = ({ slice }: ClientNavigationProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const { isOpen } = useMobileMenu();
  const navLinks = slice.primary.nav_item;
  const prodList = slice.primary.products;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (isDesktop) return null;

  return (
    <nav className={`header-nav mobile-nav ${isOpen ? "active" : ""}`}>
      <ul className="header-navlist">
        {navLinks.map(({ label, link, is_product_category }) => (
          <li key={label}>
            {is_product_category ? (
              <DropdownItem label={label} link={link} products={prodList} />
            ) : (
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
