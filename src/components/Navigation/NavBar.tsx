"use client";

import React, { useState } from "react";
import { CTA } from "@/components/CTA";
import Link from "next/link";
import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";
import { HamburguerIcon } from "@/components/Icons/Hamburguer";
import classNames from "classnames";

type NavBarProps = {
  settings: Content.SettingsDocument;
  className?: string;
};

export const NavBar = ({ settings, className }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!settings) return null;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={classNames("navbar", className)}>
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
        className="navbar__toggle mobile-menu-wrapper"
        onClick={toggleMenu}
      >
        <span className="sr-only">Toggle Menu</span>
        <HamburguerIcon />
      </button>
      <ul
        role="list"
        className={classNames("navbar__list", {
          "navbar__list--open": isMenuOpen,
        })}
      >
        {settings.data.navigation.map((item) => (
          <li key={item.label} className="navbar__item">
            <PrismicNextLink field={item.link} className="navbar__link">
              {item.label}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
      <CTA
        label={settings.data.button_text}
        link={settings.data.button_link}
        variant="primary"
        className="navbar__cta"
      />
    </nav>
  );
};
