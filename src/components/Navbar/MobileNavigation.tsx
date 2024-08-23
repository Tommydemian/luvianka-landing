import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { Content, GroupField } from "@prismicio/client";
import classNames from "classnames";
import { ChevronIcon } from "@/components/Icons/Chevron";
import { ProductCategoryList } from "@/components/ProductCategories/ProductCategoryList";
import { CTA } from "@/components/CTA";
import { Simplify } from "../../../prismicio-types";

type MobileNavigationProps = {
  settings: Content.SettingsDocument;
  productList: GroupField<Simplify<Content.SettingsDocumentDataProductsItem>>;
  isMenuOpen: boolean;
  onClose: () => void;
  dropdownOpen: boolean;
  setDropdownOpen: (isOpen: boolean) => void;
};

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  settings,
  productList,
  isMenuOpen,
  onClose,
  dropdownOpen,
  setDropdownOpen,
}) => {
  const handleItemClick = () => {
    setDropdownOpen(false);
    onClose();
  };

  return (
    <div
      className={classNames("navbar__menu-container", {
        "navbar__menu-container--open": isMenuOpen,
      })}
    >
      <ul role="list" className="navbar__list">
        {settings.data.navigation.map(
          ({ link, label, is_product_category }) => (
            <li
              key={label}
              className={classNames("navbar__item", {
                "m-navbar__item--is-products": is_product_category,
              })}
            >
              <PrismicNextLink
                field={link}
                onClick={onClose}
                className="navbar__link navbar__link--products"
              >
                {label}
              </PrismicNextLink>
              {is_product_category && (
                <>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="chevron-wrapper"
                    aria-expanded={dropdownOpen}
                  >
                    <ChevronIcon
                      className={classNames("chevron", {
                        "chevron--rotate": dropdownOpen,
                      })}
                    />
                  </button>
                  <ProductCategoryList
                    displayImage
                    productList={productList}
                    onItemClick={handleItemClick}
                    className={
                      dropdownOpen ? "m-product-category-list--open" : ""
                    }
                  />
                </>
              )}
            </li>
          )
        )}
      </ul>
      <div className="navbar__cta-container">
        <CTA
          label={settings.data.button_text}
          link={settings.data.button_link}
          variant="primary"
          className="navbar__cta"
        />
      </div>
    </div>
  );
};
