import React from "react";
import Image from "next/image";
import { createClient } from "../prismicio";
import Navigation from "@/slices/Navigation";
import { Content } from "@prismicio/client";
import { HeaderClientSideWrapper } from "@/components/HeaderClientsideWrapper";
import { CtaInfo } from "@/../types";

export const Header = async () => {
  let navigationSlice: Content.NavigationSlice | undefined;

  let ctaInfo: CtaInfo = {
    label: "",
    link: {
      link_type: "Web",
      url: "",
    },
  };

  try {
    const client = createClient();
    const settings = await client.getSingle("settings");
    navigationSlice = settings.data.slices.find(
      (slice): slice is Content.NavigationSlice =>
        slice.slice_type === "navigation"
    );
    ctaInfo = {
      label: settings.data.button_text,
      link: settings.data.button_link,
    };
  } catch (error) {
    console.error("Error fetching navigation:", error);
  }

  return (
    <header className="container-x">
      <Image
        className="header-logo"
        src="https://ik.imagekit.io/2ziqnactl/luviankaLogo.png"
        alt="logo de la marca"
        width={895}
        height={458}
        priority
      />
      {navigationSlice && <Navigation slice={navigationSlice} />}
      <HeaderClientSideWrapper label={ctaInfo.label} link={ctaInfo.link} />
    </header>
  );
};
