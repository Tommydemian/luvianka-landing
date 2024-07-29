import React from "react";
import Image from "next/image";
import { createClient } from "../prismicio";
// types || && static data
import { PrismicNextLink } from "@prismicio/next";
import { GroupField } from "@prismicio/client";
import {
  SettingsDocumentDataNavigationItem,
  Simplify,
} from "../../prismicio-types";

export const Header = async () => {
  let navLinks: GroupField<Simplify<SettingsDocumentDataNavigationItem>> = [];

  try {
    const client = createClient();
    const res = await client.getSingle("settings");
    navLinks = res.data.navigation || [];
    console.log("Navigation data:", navLinks);
  } catch (error) {
    console.error("Error fetching navigation:", error);
  }
  return (
    <header>
      <Image
        className="header-logo"
        src="https://ik.imagekit.io/2ziqnactl/luviankaLogo.png"
        alt="logo de la marca"
        width={895}
        height={458}
        priority
      />
      <nav className="header-nav">
        <ul className="header-navlist">
          {navLinks.map((item) => (
            <li key={item.label}>
              <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* <CTA text="Contactanos" href="/contactanos" /> */}
    </header>
  );
};
