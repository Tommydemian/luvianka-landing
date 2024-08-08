import { KeyTextField, LinkField, ImageField } from "@prismicio/client";

export type navLink = {
  link: string;
  label: string;
  icon?: string;
};

export type CtaInfo = {
  label: KeyTextField;
  link: LinkField;
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
