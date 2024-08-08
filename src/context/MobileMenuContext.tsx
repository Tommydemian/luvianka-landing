"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type MobileMenuContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
  undefined
);

export const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <MobileMenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error("useMobileMenu must be used within a MobileMenuProvider");
  }
  return context;
};
