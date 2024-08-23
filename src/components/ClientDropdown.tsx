"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import classNames from "classnames";
import { DropdownOffChevronIcon } from "@/components/Icons/DropdownOffChevron";
import { PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";
import { useIsMobile } from "@/hooks/useIsMobile";

type ClientDropdownProps = {
  categories: Content.ProductCategoryDocument[];
  activeUid: string;
};

export const ClientDropdown: React.FC<ClientDropdownProps> = ({
  categories,
  activeUid,
}) => {
  const { isMobile } = useIsMobile();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleCategorySelect = useCallback((categoryUid: string) => {
    setIsMenuOpen(false);
    //
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobile &&
        isMenuOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, isMenuOpen]);

  const activeCategory = categories.find(
    (category) => category.uid === activeUid
  );

  return (
    <div className="dropdown relative" ref={dropdownRef}>
      <div
        onClick={handleMenu}
        className={classNames("dropdown__field", {
          "dropdown__field--is-active": isMenuOpen,
        })}
      >
        {activeCategory?.data.product_category_title || "Selecciona categoría"}
        <DropdownOffChevronIcon
          bold={isMenuOpen}
          className="interactivity-none"
        />
      </div>
      <div
        className={classNames("dropdown__menu", {
          "dropdown__menu--is-open": isMenuOpen,
        })}
      >
        <ul className="dropdown__menu-list" role="list">
          {categories.map((category) => (
            <li
              key={category.id}
              className={classNames("dropdown__menu-item", {
                "dropdown__menu-item--is-selected": category.uid === activeUid,
              })}
              onClick={() => handleCategorySelect(category.uid)}
            >
              <PrismicNextLink field={category.data.product_page}>
                {category.data.product_category_title}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
