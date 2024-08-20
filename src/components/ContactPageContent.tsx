import React, { useState } from "react";
import { createClient } from "@/prismicio";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

import { ContactUsIcon1 } from "@/components/Icons/ContactUs1";
import { ContactUsIcon2 } from "@/components/Icons/ContactUs2";
import { ContactUsIcon3 } from "@/components/Icons/ContactUs3";
import { PrismicRichText } from "@prismicio/react";

const stateBoxes = [
  {
    icon: ContactUsIcon1,
    title: "Comercializá",
    description: "Nuestros Productos",
  },
  {
    icon: ContactUsIcon2,
    title: "Atención",
    description: "Al Cliente",
  },
  {
    icon: ContactUsIcon3,
    title: "Trabaja",
    description: "Con Nosotros",
  },
];

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
        <div className="contact-us__state-boxes">
          {stateBoxes.map((state) => (
            <div key={state.title} className="contact-us__state-box">
              <>{<state.icon />}</>
              <div>
                <h4>{state.title}</h4>
                <p>{state.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Container>
          <h2 className="form__heading">
            A La Brevedad Un Vendedor Se Contactará Con Usted
          </h2>
          <form className="form" action="#">
            <div className="form-group left-col">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Roberto Barrientos"
              />
            </div>
            <div className="form-group right-col">
              <label htmlFor="direction" className="sr-only">
                Direction
              </label>
              <input
                type="text"
                name="direction"
                id="direction"
                required
                placeholder="Calle España 234"
              />
            </div>
            <div className="form-group left-col">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="roberto@gmail.com"
              />
            </div>
            <div className="form-group right-col">
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="1178786564"
              />
            </div>
            <label htmlFor="city" className="sr-only">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              required
              placeholder="Avellaneda"
              className="full-col"
            />
            <label htmlFor="provincia" className="sr-only">
              Provincia
            </label>
            <input
              type="text"
              name="provincia"
              id="provincia"
              required
              placeholder="Buenos Aires"
              className="full-col"
            />
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="..."
              className="full-col"
            />
          </form>
        </Container>
      </div>
    </Section>
  );
};
