"use client";

import React, { createContext, useState, useContext } from "react";
import { ContactType } from "../../types";

type ContactContextType = {
  contactType: ContactType;
  setContactType: (type: ContactType) => void;
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const useContactContext = () => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("useContactContext must be used within a ContactProvider");
  }
  return context;
};

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [contactType, setContactType] = useState<ContactType>(
    ContactType.COMERCIALIZA
  );

  return (
    <ContactContext.Provider value={{ contactType, setContactType }}>
      {children}
    </ContactContext.Provider>
  );
};
