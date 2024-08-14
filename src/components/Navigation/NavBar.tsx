"use client";

import React, { useEffect, useState } from "react";
import { CTA } from "@/components/CTA";
import Link from "next/link";
import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";
import { HamburguerIcon } from "@/components/Icons/Hamburguer";
import { CloseIcon } from "@/components/Icons/Close";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useToggle } from "@/hooks/useToggle";

import classNames from "classnames";

type NavBarProps = {
  settings: Content.SettingsDocument;
  className?: string;
};

export const NavBar = ({ settings, className }: NavBarProps) => {
  const { isMobile } = useIsMobile();
  const { state: isMenuOpen, toggle: toggleMenu } = useToggle(false);
  const [isMounted, setIsMounted] = useState(false);

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
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      toggleMenu();
    }
  }, [isMobile, isMenuOpen, toggleMenu]);

  if (!settings || !isMounted) return null;

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
            {settings.data.navigation.map((item) => (
              <li key={item.label} className="navbar__item">
                <PrismicNextLink field={item.link} className="navbar__link">
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
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
        </>
      )}
    </nav>
  );
};
