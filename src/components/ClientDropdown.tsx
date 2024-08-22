"use client";

import React, { useState, useCallback } from "react";
import classNames from "classnames";

import { usePathname } from "next/navigation";

import { DropdownOffChevronIcon } from "@/components/Icons/DropdownOffChevron";
import { PrismicNextLink } from "@prismicio/next";

import { Content } from "@prismicio/client";

type ClientDropdownProps = {
  categories: Content.ProductCategoryDocument[];
};

export const ClientDropdown: React.FC<ClientDropdownProps> = ({
  categories,
}) => {
  const pathname = usePathname();
  // grab slug
  const splittedArr = pathname.split("/");
  const slug = splittedArr[splittedArr.length - 1];

  console.log(slug, "path");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(slug);

  const handleMenu = React.useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleCategorySelect = useCallback(
    (categoryUid: string) => {
      setActiveCategory(categoryUid);
      setIsMenuOpen(false);
    },
    [setActiveCategory]
  );

  return (
    <div className="dropdown relative">
      <div
        onClick={handleMenu}
        className={classNames("dropdown__field", {
          "dropdown__field--is-active": isMenuOpen,
        })}
      >
        {activeCategory}
        <DropdownOffChevronIcon bold={isMenuOpen} />
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
                "dropdown__menu-item--is-selected":
                  category.uid === activeCategory,
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
