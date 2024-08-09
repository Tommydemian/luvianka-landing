"use client";

import React, { useEffect } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { ChevronDown } from "@/assets/svgs/ChevronDown";
import { useToggle } from "../hooks/useToggle";
import { toggleHtmlScroll } from "@/utils/toggleHtmlScroll";
import { useMediaQuery } from "../hooks/useMediaQuery";
import {
  Content,
  GroupField,
  LinkField,
  KeyTextField,
} from "@prismicio/client";
import { Simplify } from "../../prismicio-types";
import { Product } from "@/../types";

type DropdownItemProps = {
  label: KeyTextField;
  link: LinkField;
  products:
    | GroupField<Simplify<Content.NavigationSliceDefaultPrimaryProductsItem>>
    | Product[];
};

const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  link,
  products,
}) => {
  const { state: isOpen, toggle } = useToggle(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const isProduct = (item: any): item is Product => {
    return (
      "product_picture" in item &&
      "product_text" in item &&
      "product_link" in item
    );
  };

  useEffect(() => {
    toggleHtmlScroll(isOpen);
    return () => toggleHtmlScroll(false);
  }, [isOpen]);

  if (isDesktop) {
    return <PrismicNextLink field={link}>{label}</PrismicNextLink>;
  }

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button className="dropdown-trigger" onClick={toggle}>
        <PrismicNextLink field={link}>{label}</PrismicNextLink>
        <span className={`chevron-icon ${isOpen ? "rotate" : ""}`}>
          <ChevronDown />
        </span>
      </button>
      <div className={`dropdown-menu ${isOpen ? "visible" : ""}`}>
        <ul>
          {products.map((item, index) => {
            return (
              isProduct(item) && (
                <li key={item.product_text || index}>
                  <PrismicNextLink field={item.product_link}>
                    {item.product_text}
                  </PrismicNextLink>
                  <PrismicNextImage field={item.product_picture} />
                </li>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropdownItem;
