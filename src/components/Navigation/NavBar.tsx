"use client";

import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";

import { CTA } from "@/components/CTA";
import Link from "next/link";
import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";
import { Content, LinkField } from "@prismicio/client";
import { linkResolver } from "../../prismicio";

import { ProductCategoryList } from "@/components/ProductCategories/ProductCategoryList";
import { HamburguerIcon } from "@/components/Icons/Hamburguer";
import { CloseIcon } from "@/components/Icons/Close";
import { ChevronIcon } from "@/components/Icons/Chevron";
import { ChevronDownIcon } from "@/components/Icons/ChevronDown";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useToggle } from "@/hooks/useToggle";

import classNames from "classnames";

type NavBarProps = {
  settings: Content.SettingsDocument;
  productCategories: Content.ProductCategoryDocument[];
  className?: string;
};

export const NavBar = ({
  settings,
  className,
  productCategories,
}: NavBarProps) => {
  // const router = useRouter();
  const { isMobile } = useIsMobile();
  const { state: isMenuOpen, toggle: toggleMenu } = useToggle(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      toggleMenu();
    }
  }, [isMobile, isMenuOpen, toggleMenu]);

  const handleLinkClick = () => {
    if (isMobile) {
      toggleMenu();
    }
  };

  // const isActive = (link: LinkField) => {
  //   if (link.link_type === 'Web') {
  //     return router.asPath === link.url;
  //   }
  //   if (link.link_type === 'Document' && link.uid) {
  //     return router.asPath.includes(link.uid);
  //   }
  //   return false;
  // };

  return (
    <nav className={classNames("navbar", className, { "is-mobile": isMobile })}>
      <Link href="/" className="navbar__logo-link">
        <Image
          className="navbar__logo"
          src="https://ik.imagekit.io/2ziqnactl/luviankaLogo.png"
          alt="logo de la marca"
          width={895}
          height={458}
          priority
        />
      </Link>
      <button
        className="navbar__toggle-menu-button mobile-menu-wrapper"
        onClick={toggleMenu}
      >
        <span className="sr-only">Toggle Menu</span>
        <div className="icon-wrapper">
          <HamburguerIcon
            className={isMenuOpen ? "icon inactive" : "icon active"}
          />
          <CloseIcon className={isMenuOpen ? "icon active" : "icon inactive"} />
        </div>
      </button>
      {isMobile ? (
        <div
          className={classNames("navbar__menu-container", {
            "navbar__menu-container--open": isMenuOpen,
          })}
        >
          <ul role="list" className="navbar__list">
            {settings.data.navigation.map(
              ({ link, label, is_product_category }) => (
                <li key={label} className="navbar__item">
                  <PrismicNextLink
                    field={link}
                    onClick={handleLinkClick}
                    className="navbar__link navbar__link--products"
                  >
                    {label}
                  </PrismicNextLink>
                  {is_product_category && (
                    <>
                      <span
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="chevron-wrapper"
                      >
                        <ChevronIcon
                          className={classNames("chevron", {
                            "chevron--rotate": dropdownOpen,
                          })}
                        />
                      </span>
                      <ProductCategoryList
                        displayImage
                        productCategories={productCategories}
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
      ) : (
        <>
          <ul role="list" className="navbar__list">
            {settings.data.navigation.map((item) => (
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
                {item.is_product_category && (
                  <>
                    <span
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="chevron-wrapper"
                    >
                      <ChevronDownIcon
                        className={classNames("chevron-down pointer", {
                          "chevron--rotate": dropdownOpen,
                        })}
                      />
                    </span>
                  </>
                )}
              </li>
            ))}
          </ul>
          <CTA
            label={settings.data.button_text}
            link={settings.data.button_link}
            onClick={handleLinkClick}
            variant="primary"
            className="navbar__cta"
          />
        </>
      )}
    </nav>
  );
};
