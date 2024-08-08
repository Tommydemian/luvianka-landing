"use client";

import React from "react";
import { createClient } from "../prismicio";
// types || && static data
import { CtaInfo } from "@/../types";
// slices usage
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export const MobileNavigation = async () => {
  let slices;

  try {
    const client = createClient();
    const settings = await client.getSingle("settings");

    slices = settings.data.slices;
  } catch (error) {
    console.error("Error fetching navigation:", error);
  }
  return slices && <SliceZone slices={slices} components={components} />;
};
