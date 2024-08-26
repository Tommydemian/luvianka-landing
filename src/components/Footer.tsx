import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { Section } from "@/components/Section";

import { Facebook } from "@/assets/svgs/Facebook";
import { Instagram } from "@/assets/svgs/Instagram";
import { Twitter } from "@/assets/svgs/Twitter";
import { Linkedin } from "@/assets/svgs/Linkedin";

export const Footer = async () => {
  const currentYear = new Date().getFullYear();

  const client = createClient();

  const [settings, homepage] = await Promise.all([
    client.getSingle("settings").catch(() => null),
    client.getSingle("homepage").catch(() => null),
  ]);

  if (!settings || !homepage) {
    return null;
  }

  const brandingPieces = homepage.data.corporation_section;
  const contactPoints = homepage.data.contact_data;

  return (
    <Section>
      <footer className="footer">
        <section className="footer__content">
          {brandingPieces.map(({ brief_text, first_logo, second_logo }) => (
            <div
              aria-label="Logos de Luvianka y Red Deer"
              key={brief_text}
              className="branding-space"
            >
              <div className="branding-space__images">
                <Link href="/">
                  <PrismicNextImage field={first_logo} />
                </Link>
                <PrismicNextImage field={second_logo} />
              </div>
              <p>{brief_text}</p>
            </div>
          ))}
          <nav
            className="footer__nav"
            aria-label="Navegación del pie de página"
          >
            <ul className="flow-content uppercase" role="list">
              {settings?.data.navigation.map(({ link, label }) => (
                <li key={label} role="listitem" className="footer__nav-item">
                  <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
          {contactPoints.map(
            ({ field1, field2, field3, field4, field5, fields_header }) => (
              <div
                className="footer__contact-points flow-content"
                key={fields_header}
              >
                <h3 className="text-accent uppercase fw-400">
                  {fields_header}
                </h3>
                <div>
                  <p>{field1}</p>
                </div>
                <p>{field2}</p>
                <p>{field3}</p>
                <p>{field4}</p>
                <div>
                  <a
                    className="footer__email-link"
                    href="mailto:info@fiambresluvianka.com.ar"
                  >
                    {field5}
                  </a>
                </div>
              </div>
            )
          )}
        </section>
        <section
          aria-label="Redes sociales y derechos de autor"
          className="subfooter"
        >
          <div className="subfooter__content">
            <div className="subfooter__social-media">
              <Link
                href="https://www.facebook.com/fiambresluvianka/"
                aria-label="Visita nuestra página de Facebook"
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/fiambresluvianka/"
                aria-label="Visita nuestro perfil de Instagram"
              >
                <Instagram />
              </Link>
              <Link
                href="https://x.com/fluviankaok?s=11"
                aria-label="Visita nuestro perfil de Twitter/X"
              >
                <Twitter />
              </Link>
              <Link
                href="https://www.linkedin.com/company/fiambres-luvianka/"
                aria-label="Visita nuestro perfil de Linkedin"
              >
                <Linkedin />
              </Link>
            </div>
            <p>© Luvianka {currentYear} Todos los derechos reservados.</p>
          </div>
        </section>
      </footer>
    </Section>
  );
};
