import React from "react";
import { createClient } from "@/prismicio";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

import { PrismicRichText } from "@prismicio/react";

import { ClientContactWrapper } from "@/components/ClientContentWrapper";

export const ContactPageContent = async () => {
  const client = createClient();
  const page = await client.getSingle("section_paragraph_description");

  return (
    <Section>
      <div className="contact-us__layout">
        <PrismicRichText
          field={page.data.section_paragraph_description}
          components={{
            paragraph: ({ children }) => (
              <p className="contact-us__section-p-description">{children}</p>
            ),
          }}
        />
        <ClientContactWrapper />
      </div>
    </Section>
  );
};
