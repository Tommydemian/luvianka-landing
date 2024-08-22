"use client";

import React, { useState, useEffect, useRef } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { Content, GroupField } from "@prismicio/client";
import classNames from "classnames";
import { ChevronDownIcon } from "@/components/Icons/ChevronDown";
import { Simplify } from "../../../prismicio-types";
import { NavLinkProps } from "./DesktopNavigation";

type NavLinkWithDropDownProps = NavLinkProps & {
  dropdownOpen: boolean;
  setDropdownOpen: (isOpen: boolean) => void;
  productList: GroupField<Simplify<Content.SettingsDocumentDataProductsItem>>;
};

export const NavLinkWithDropDown: React.FC<NavLinkWithDropDownProps> = ({
  item,
  handleLinkClick,
  productList,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  useEffect(() => {
    const handleMouseEnterMenu = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(true);
    };

    const handleMouseLeaveMenu = () => {
      setIsOpen(false);
    };

    const menuElement = dropdownRef.current?.querySelector(
      ".d-nav-dropdown__menu"
    );
    menuElement?.addEventListener("mouseenter", handleMouseEnterMenu);
    menuElement?.addEventListener("mouseleave", handleMouseLeaveMenu);

    return () => {
      menuElement?.removeEventListener("mouseenter", handleMouseEnterMenu);
      menuElement?.removeEventListener("mouseleave", handleMouseLeaveMenu);
    };
  }, []);

  return (
    <div
      className={`d-nav-dropdown ${isOpen ? "is-open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <li
        className={classNames("navbar__item", {
          "navbar__item--is-products": item.is_product_category,
          "dropdown-open": isOpen,
        })}
      >
        <PrismicNextLink
          field={item.link}
          onClick={handleLinkClick}
          className="navbar__link"
        >
          {item.label}
          <span className="chevron-wrapper">
            <ChevronDownIcon className="chevron-down" />
          </span>
        </PrismicNextLink>
      </li>
      <div
        className={`d-nav-dropdown__menu flow-content--sm ${isOpen ? "open" : ""}`}
      >
        {productList.map(({ product_link, product_name }) => (
          <li key={product_name} className="d-nav__link">
            <PrismicNextLink field={product_link} className="d-nav__link">
              {product_name}
            </PrismicNextLink>
          </li>
        ))}
      </div>
    </div>
  );
};
