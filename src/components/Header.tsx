import React from "react";
import { NavBar } from "@/components/Navigation/NavBar";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

import { createClient } from "../prismicio";

async function getSettings() {
  const client = createClient();
  return client.getSingle("settings");
}

export const Header = async () => {
  const settings = await getSettings();

  return (
    <Section>
      <Container>
        <header className="header">
          <NavBar settings={settings} />
        </header>
      </Container>
    </Section>
  );
};
