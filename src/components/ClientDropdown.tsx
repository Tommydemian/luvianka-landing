"use client";

import React from "react";
import classNames from "classnames";
import { DropdownOffChevronIcon } from "@/components/Icons/DropdownOffChevron";
import { useCategory } from "@/context/CategoryContext";

export const ClientDropdown: React.FC = () => {
  const { categories, selectedCategoryId, setSelectedCategoryId } =
    useCategory();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenu = React.useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleCategorySelect = React.useCallback(
    (categoryId: string) => {
      setSelectedCategoryId(categoryId);
      setIsMenuOpen(false);
    },
    [setSelectedCategoryId]
  );

  const selectedCategory = categories.find(
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
        {selectedCategory?.data.product_category_title || "Select a category"}
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
                  category.id === selectedCategoryId,
              })}
              onClick={() => handleCategorySelect(category.id)}
            >
              {category.data.product_category_title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
