import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
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

  return (
    <footer className="footer">
      <div className="footer-content">
        {homepage?.data.corporation_section.map((item) => {
          return (
            <div key={item.brief_text} className="footer-corporate-section">
              <div className="corporate-section-images">
                <Link href="/">
                  <PrismicNextImage field={item.first_logo} />
                </Link>
                <PrismicNextImage field={item.second_logo} />
              </div>
              <p>{item.brief_text}</p>
            </div>
          );
        })}
        <nav aria-label="Footer">
          <ul role="list">
            {settings?.data.navigation.map((item) => (
              <li key={item.label}>
                <PrismicNextLink field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
            <li></li>
          </ul>
        </nav>
        {homepage?.data.contact_data.map((item) => (
          <div className="footer-contact-data" key={item.fields_header}>
            <h3>{item.fields_header}</h3>
            <div>
              <p>{item.field1}</p>
            </div>
            <p>{item.field2}</p>
            <p>{item.field3}</p>
            <p>{item.field4}</p>
            <div>
              <a
                className="footer-email-link"
                href="mailto:info@fiambresluvianka.com.ar"
              >
                {item.field5}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="subfooter-layout">
        <div className="subfooter-content">
          {/* TODO: add functionality to this icons */}
          <div>
            <Facebook />
            <Instagram />
            <Twitter />
            <Linkedin />
          </div>
          <p>© Luvianka {currentYear} Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
