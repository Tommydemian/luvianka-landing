"use client";

import React from "react";
import { ContactProvider } from "../context/ContactContext";
import { ContactStateBoxes } from "./ContactStateBoxes";
import { ContactForm } from "./ContactForm";
import { Container } from "@/components/Container";

export const ClientContactWrapper = () => {
  return (
    <ContactProvider>
      <ContactStateBoxes />
      <Container>
        <ContactForm />
      </Container>
    </ContactProvider>
  );
};
