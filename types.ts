import { KeyTextField, LinkField, ImageField } from "@prismicio/client";

export type navLink = {
  link: string;
  label: string;
  icon?: string;
};

export type IconElementProps = {
  className?: string;
};

export type Product = {
  product_picture: ImageField;
  product_text: KeyTextField;
  product_link: LinkField;
};

type NavigationItem = {
  label: string;
  link: LinkField;
  is_product_category: boolean;
};

type ProductCategory = {
  category_label: string;
  products: {
    product_image: ImageField;
    product_name: string;
    product_link: LinkField;
  }[];
};
