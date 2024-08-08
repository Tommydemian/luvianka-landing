"use client";

import React, { useState } from "react";
import Navigation from "../slices/Navigation";
import { MobileMenuIcon } from "./MobileMenuIcon";
import { Content } from "@prismicio/client";

export function MobileNavigation({ slice }: MobileNavigationProps) {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive(!isActive);

  return (
    <>
      <MobileMenuIcon isActive={isActive} toggle={toggleMenu} />
      <aside className={`mobile-nav-aside ${isActive ? "active" : ""}`}>
        <Navigation slice={slice} context={} />
      </aside>
    </>
  );
}
