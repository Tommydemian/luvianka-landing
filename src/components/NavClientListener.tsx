"use client";

import React, { ReactNode } from "react";
import { useMobileMenu } from "@/context/MobileMenuContext";

export const NavClientListener = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useMobileMenu();
  return (
    <div className={`mobile-menu-wall ${isOpen ? "active" : ""}`}>
      {children}
    </div>
  );
};

export default NavClientListener;
