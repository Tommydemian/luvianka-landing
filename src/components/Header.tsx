import React from "react";
import { NavBar } from "@/components/Navigation/NavBar";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

import { createClient } from "../prismicio";

export const Header = async () => {
  const client = createClient();

  const [settings, product_category] = await Promise.all([
    client.getSingle("settings").catch(() => null),
    client.getAllByType("product_category").catch(() => null),
  ]);

  if (!settings || !product_category) {
    return null;
  }

  return (
    <Section>
      <header className="header">
        <Container>
          <NavBar productCategories={product_category} settings={settings} />
        </Container>
      </header>
    </Section>
  );
};
