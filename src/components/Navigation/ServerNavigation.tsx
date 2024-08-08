import { PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";

type ServerNavigationProps = {
  slice: Content.NavigationSlice;
};

export const ServerNavigation = ({ slice }: ServerNavigationProps) => {
  const navLinks = slice.primary.nav_item;

  return (
    <nav className="header-nav desktop-nav">
      <ul className="header-navlist">
        {navLinks.map(({ label, link, is_product_category }) => (
          <li key={label}>
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
