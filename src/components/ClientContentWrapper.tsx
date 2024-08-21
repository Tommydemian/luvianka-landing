"use client";

import React from "react";
import { ContactProvider } from "../context/ContactContext";
import { ContactStateBoxes } from "./ContactStateBoxes";
import { ContactForm } from "./ContactForm";

export const ClientContactWrapper = () => {
  return (
    <ContactProvider>
      <ContactStateBoxes />
      <ContactForm />
    </ContactProvider>
  );
};
