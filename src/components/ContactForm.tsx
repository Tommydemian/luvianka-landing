"use client";

import React, { useState } from "react";
import { useContactContext } from "../context/ContactContext";
import { ContactType } from "../../types";
import { UploadIcon } from "@/components/Icons/Upload";

export const ContactForm = () => {
  const { contactType } = useContactContext();
  const [result, setResult] = useState("");

  const formTitles = {
    [ContactType.COMERCIALIZA]:
      "A la brevedad un vendedor se contactará con usted",
    [ContactType.ATENCION]:
      "Déjenos sus datos y nos comunicaremos a la brevedad",
    [ContactType.TRABAJA]: "Sé parte de nuestro equipo",
  };

  const mediaLabels: Record<ContactType, string> = {
    [ContactType.COMERCIALIZA]: "",
    [ContactType.ATENCION]: "Adjuntar Imagen",
    [ContactType.TRABAJA]: "Adjuntar CV",
  };

  const messagePlaceholders: Record<ContactType, string> = {
    [ContactType.COMERCIALIZA]: "",
    [ContactType.ATENCION]:
      "Buenas tardes, mi nombre es Juan Carlos y me comunico con ustedes porque estoy interesado en ...",
    [ContactType.TRABAJA]:
      "Buenas tardes, mi nombre es Juan Carlos y estoy interesado en formar parte de su equipo ...",
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Enviando....");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("contactType", contactType);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("¡Formulario enviado exitosamente!");
        // event.target.reset();
        // Reset file input if you have one
        const fileInput = document.querySelector(
          'input[type="file"]'
        ) as HTMLInputElement;
        if (fileInput) {
          fileInput.value = "";
        }
      } else {
        setResult(data.message || "Ocurrió un error");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setResult("Error al enviar el formulario. Por favor intente nuevamente.");
    } finally {
      // Esto asegura que el estado de "Enviando..." se limpie
      const button = document.querySelector(
        'button[type="submit"]'
      ) as HTMLButtonElement;
      if (button) {
        button.disabled = false;
        button.innerHTML = "<p>Enviar</p>";
      }
    }
  };

  return (
    <>
      <h2 className="form__heading capitalize">{formTitles[contactType]}</h2>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group left-col">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Roberto Barrientos"
            required
          />
        </div>
        <div className="form-group right-col">
          <label htmlFor="direction" className="sr-only">
            Direction
          </label>
          <input
            id="direction"
            type="text"
            name="direction"
            placeholder="España 234"
            required
          />
        </div>
        <div className="form-group left-col">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="roberto@gmail.com"
            required
          />
        </div>
        <div className="form-group right-col">
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="1178786564"
            required
            pattern="^(0?)(11|15)\d{8}$"
          />
        </div>
        <div className="form-group full-col">
          <label htmlFor="city" className="sr-only">
            City
          </label>
          <input
            id="city"
            type="text"
            name="city"
            placeholder="Avellaneda"
            required
          />
        </div>
        <div className="form-group full-col">
          <label htmlFor="provincia" className="sr-only">
            Provincia
          </label>
          <input
            id="provincia"
            type="text"
            name="provincia"
            placeholder="Buenos Aires"
            required
          />
        </div>
        <div className="form-group full-col">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={messagePlaceholders[contactType]}
            maxLength={200}
            rows={5}
            required
          />
        </div>
        {contactType !== ContactType.COMERCIALIZA && (
          <div className="form-group full-col">
            <input
              id="attachment"
              type="file"
              name="attachment"
              accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx"
            />
            <label htmlFor="attachment" className="file-label pointer">
              <UploadIcon /> {mediaLabels[contactType]}
            </label>
          </div>
        )}
        <button
          type="submit"
          className="form__submit-button full-col"
          disabled={result === "Enviando...."}
        >
          <p>{result === "Enviando...." ? "Enviando..." : "Enviar"}</p>
        </button>
      </form>
      {result && <p className="form__result">{result}</p>}
    </>
  );
};
