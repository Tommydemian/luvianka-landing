import React, { useMemo } from "react";
import { PrismicNextLink } from "@prismicio/next";

import Link from "next/link";

import { PrismicNextImage } from "@prismicio/next";
import { Content, GroupField } from "@prismicio/client";
import classNames from "classnames";
import { Simplify } from "../../../prismicio-types";

type ProductCategoryListProps = {
  displayImage: boolean;
  productList: GroupField<Simplify<Content.SettingsDocumentDataProductsItem>>;
  className: string;
  onitemClick: () => void;
};

export const ProductCategoryList: React.FC<ProductCategoryListProps> = ({
  displayImage,
  productList,
  className,
  onitemClick,
}) => {
  const handleRedirect = (e: React.MouseEvent) => {
    e.preventDefault();
    onitemClick();
  };

  return (
    <ul
      role="list"
      className={classNames("m-product-category-list", className)}
    >
      {productList.map(({ product_name, product_image, product_link }) => (
        <li key={product_name} className="m-product-category-list__item">
          <PrismicNextLink
            field={product_link}
            className="m-product-category-list__link"
            onClick={handleRedirect}
          >
            <p className="m-product-category-list__title">{product_name}</p>
            {displayImage && (
              <PrismicNextImage
                field={product_image}
                className="m-product-category-list__image"
              />
            )}
          </PrismicNextLink>
        </li>
      ))}
    </ul>
  );
};
