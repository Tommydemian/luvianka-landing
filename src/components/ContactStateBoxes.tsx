"use client";

import React from "react";
import { ContactUsIcon1 } from "@/components/Icons/ContactUs1";
import { ContactUsIcon2 } from "@/components/Icons/ContactUs2";
import { ContactUsIcon3 } from "@/components/Icons/ContactUs3";

import { useContactContext } from "../context/ContactContext";

import ClassNames from "classnames";

import { ContactType } from "../../types";

const stateBoxes = [
  {
    icon: ContactUsIcon1,
    title: ContactType.COMERCIALIZA,
    description: "Nuestros Productos",
  },
  {
    icon: ContactUsIcon2,
    title: ContactType.ATENCION,
    description: "Al Cliente",
  },
  {
    icon: ContactUsIcon3,
    title: ContactType.TRABAJA,
    description: "Con Nosotros",
  },
];

export const ContactStateBoxes = () => {
  const { contactType, setContactType } = useContactContext();

  return (
    <div className="contact-us__state-boxes">
      {stateBoxes.map((state) => (
        <div
          key={state.title}
          onClick={() => setContactType(state.title as ContactType)}
          className={ClassNames("contact-us__state-box", {
            "contact-us__state-box--active": state.title === contactType,
          })}
        >
          <>{<state.icon />}</>
          <div>
            <h4>{state.title}</h4>
            <p>{state.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
