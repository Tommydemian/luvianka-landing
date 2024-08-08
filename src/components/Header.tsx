import React from "react";
import Image from "next/image";
import { createClient } from "../prismicio";
import { HeaderClientSideWrapper } from "@/components/HeaderClientsideWrapper";
// types || && static data
import { CtaInfo } from "@/../types";
// slices usage
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export const Header = async () => {
  let ctaInfo: CtaInfo = {
    label: "",
    link: {
      link_type: "Web",
      url: "",
    },
  };

  let slices;

  try {
    const client = createClient();
    const settings = await client.getSingle("settings");
    ctaInfo = {
      label: settings.data.button_text,
      link: settings.data.button_link,
    };
    slices = settings.data.slices;
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
      {slices && <SliceZone slices={slices} components={components} />}
      <HeaderClientSideWrapper label={ctaInfo.label} link={ctaInfo.link} />
    </header>
  );
};
