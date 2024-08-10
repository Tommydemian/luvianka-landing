import React from "react";
import { createClient } from "@/prismicio";
import Navigation from "@/slices/Navigation";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { Facebook } from "@/assets/svgs/Facebook";
import { Instagram } from "@/assets/svgs/Instagram";
import { Twitter } from "@/assets/svgs/Twitter";
import { Linkedin } from "@/assets/svgs/Linkedin";

export const Footer = async () => {
  const currentYear = new Date().getFullYear();

  let navigationSlice: Content.NavigationSlice | undefined;

  let settings;
  let homepage;

  try {
    const client = createClient();
    settings = await client.getSingle("settings");
    navigationSlice = settings.data.slices.find(
      (slice): slice is Content.NavigationSlice =>
        slice.slice_type === "navigation"
    );
    homepage = await client.getSingle("homepage");
  } catch (error) {
    console.error(error);
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        {homepage?.data.corporation_section.map((item, index) => {
          return (
            <div key={item.brief_text} className="footer-corporate-section">
              <div className="corporate-section-images">
                <PrismicNextImage field={item.first_logo} />
                <PrismicNextImage field={item.second_logo} />
              </div>
              <p>{item.brief_text}</p>
            </div>
          );
        })}
        {navigationSlice && <Navigation slice={navigationSlice} />}
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
