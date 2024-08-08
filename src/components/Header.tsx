import React from "react";
import Image from "next/image";
import { createClient } from "../prismicio";
// types || && static data
import { PrismicNextLink } from "@prismicio/next";
import { GroupField, KeyTextField, LinkField } from "@prismicio/client";
import {
  SettingsDocumentDataNavigationItem,
  Simplify,
} from "../../prismicio-types";
import { CTA } from "./CTA";

type CtaInfo = {
  label: KeyTextField;
  link: LinkField;
};

export const Header = async () => {
  let navLinks: GroupField<Simplify<SettingsDocumentDataNavigationItem>> = [];
  let ctaInfo: CtaInfo = {
    label: "",
    link: {
      link_type: "Web",
      url: "",
    },
  };

  try {
    const client = createClient();
    const res = await client.getSingle("settings");
    ctaInfo = {
      label: res.data.button_text,
      link: res.data.button_link,
    };
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
      <CTA className="main-cta" field={ctaInfo.link}>
        {ctaInfo.label}
      </CTA>
    </header>
  );
};
