import React, { useMemo } from "react";
import Link from "next/link";
import { createClient } from "../../prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";
import classNames from "classnames";

type ProductCategoryListProps = {
  displayImage: boolean;
  productCategories: Content.ProductCategoryDocument[];
  className: string;
};

// async function getProductCategory() {
//   const client = createClient();
//   return client.getAllByType("product_category");
// }

export const ProductCategoryList: React.FC<ProductCategoryListProps> = ({
  displayImage,
  productCategories,
  className,
}) => {
  const categories = useMemo(
    () => [...productCategories].reverse(),
    [productCategories]
  );

  return (
    <ul
      role="list"
      className={classNames("m-product-category-list", className)}
    >
      {categories.map((item) => (
        <li
          key={item.data.product_category_title}
          className="m-product-category-list__item"
        >
          <Link
            href={`productos/${item.uid}`}
            className="m-product-category-list__link"
          >
            <p className="m-product-category-list__title">
              {item.data.product_category_title}
            </p>
            {displayImage && (
              <PrismicNextImage
                field={item.data.product_category_image}
                className="m-product-category-list__image"
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
