"use client";

import React, { useState, useCallback } from "react";
import { KeyTextField } from "@prismicio/client";
import classNames from "classnames";
import { DropdownOffChevronIcon } from "@/components/Icons/DropdownOffChevron";

type SimplifiedCategory = {
  id: string;
  uid: string;
  title: KeyTextField;
};

type ClientDropdownProps = {
  productCategories: SimplifiedCategory[];
};

export const ClientDropdown: React.FC<ClientDropdownProps> = ({
  productCategories,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    productCategories[0]?.id
  );

  const handleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleCategorySelect = useCallback((categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setIsMenuOpen(false);
  }, []);

  const selectedCategory = productCategories.find(
    (category) => category.id === selectedCategoryId
  );

  return (
    <div className="dropdown relative">
      <div
        onClick={handleMenu}
        className={classNames("dropdown__field", {
          "dropdown__field--is-active": isMenuOpen,
        })}
      >
        {selectedCategory?.title || "Select a category"}
        <DropdownOffChevronIcon bold={isMenuOpen} />
      </div>
      <div
        className={classNames("dropdown__menu", {
          "dropdown__menu--is-open": isMenuOpen,
        })}
      >
        <ul className="dropdown__menu-list" role="list">
          {productCategories.map((category) => (
            <li
              key={category.id}
              className={classNames("dropdown__menu-item", {
                "dropdown__menu-item--is-selected":
                  category.id === selectedCategoryId,
              })}
              onClick={() => handleCategorySelect(category.id)}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
