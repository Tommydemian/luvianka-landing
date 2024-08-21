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

export enum ContactType {
  COMERCIALIZA = "Comercializá",
  ATENCION = "Atención",
  TRABAJA = "Trabaja",
}
