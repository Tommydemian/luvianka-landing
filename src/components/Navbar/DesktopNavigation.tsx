import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { Content, GroupField } from "@prismicio/client";
import classNames from "classnames";
import { CTA } from "@/components/CTA";
import { NavLinkWithDropDown } from "./NavLinkWithDropdown";
import { Simplify } from "../../../prismicio-types";

type NavigationItem = Content.SettingsDocument["data"]["navigation"][number];

export type NavLinkProps = {
  item: NavigationItem;
  handleLinkClick: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ item, handleLinkClick }) => {
  return (
    <li
      key={item.label}
      className={classNames("navbar__item", {
        "navbar__item--is-products": item.is_product_category,
      })}
    >
      <PrismicNextLink
        field={item.link}
        onClick={handleLinkClick}
        className="navbar__link"
      >
        {item.label}
      </PrismicNextLink>
    </li>
  );
};

type DesktopNavigationProps = {
  settings: Content.SettingsDocument;
  dropdownOpen: boolean;
  setDropdownOpen: (isOpen: boolean) => void;
  handleLinkClick: () => void;
  productList: GroupField<Simplify<Content.SettingsDocumentDataProductsItem>>;
};

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  settings,
  dropdownOpen,
  setDropdownOpen,
  handleLinkClick,
  productList,
}) => {
  return (
    <>
      <ul role="list" className="navbar__list">
        {settings.data.navigation.map((item) =>
          item.is_product_category ? (
            <NavLinkWithDropDown
              key={item.label}
              item={item}
              handleLinkClick={handleLinkClick}
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
              productList={productList}
            />
          ) : (
            <NavLink
              key={item.label}
              item={item}
              handleLinkClick={handleLinkClick}
            />
          )
        )}
      </ul>
      <CTA
        label={settings.data.button_text}
        link={settings.data.button_link}
        onClick={handleLinkClick}
        variant="primary"
        className="navbar__cta"
      />
    </>
  );
};
