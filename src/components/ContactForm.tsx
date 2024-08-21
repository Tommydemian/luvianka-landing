"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useContactContext } from "../context/ContactContext";
import { ContactType } from "../../types";
import { UploadIcon } from "@/components/Icons/Upload";

type FormInputs = {
  name: string;
  direction: string;
  email: string;
  phone: string;
  city: string;
  provincia: string;
  message: string;
  file: any;
};

export const ContactForm = () => {
  const { contactType } = useContactContext();

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // Here you would typically send the data to your server or API
  };

  return (
    <>
      <h2 className="form__heading capitalize">{formTitles[contactType]}</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group left-col">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            {...register("name", { required: "El campo es obligatorio." })}
            type="text"
            id="name"
            placeholder="Roberto Barrientos"
          />
          {errors.name && (
            <span className="form__error">{errors.name.message}</span>
          )}
        </div>
        <div className="form-group right-col">
          <label htmlFor="direction" className="sr-only">
            Direction
          </label>
          <input
            {...register("direction", { required: "El campo es obligatorio." })}
            type="text"
            id="direction"
            placeholder="Calle España 234"
          />
          {errors.direction && (
            <span className="form__error">{errors.direction.message}</span>
          )}
        </div>
        <div className="form-group left-col">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            {...register("email", {
              required: "El campo es obligatorio.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "El formato ingresado es invalido.",
              },
            })}
            type="email"
            id="email"
            placeholder="roberto@gmail.com"
          />
          {errors.email && (
            <span className="form__error">{errors.email.message}</span>
          )}
        </div>
        <div className="form-group right-col">
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            {...register("phone", {
              required: "El número de teléfono es requerido",
              pattern: {
                value: /^(0?11|11)?[2-9]\d{8}$/,
                message:
                  "Ingrese un número de celular válido (ej: 11-3333-2222).",
              },
            })}
            type="tel"
            id="phone"
            placeholder="1178786564"
          />
          {errors.phone && (
            <span className="form__error">{errors.phone.message}</span>
          )}
        </div>
        <div className="form-group full-col">
          <label htmlFor="city" className="sr-only">
            City
          </label>
          <input
            {...register("city", { required: "El campo es obligatorio." })}
            type="text"
            id="city"
            placeholder="Avellaneda"
          />
          {errors.city && (
            <span className="form__error">{errors.city.message}</span>
          )}
        </div>
        <div className="form-group full-col">
          <label htmlFor="provincia" className="sr-only">
            Provincia
          </label>
          <input
            {...register("provincia", { required: "El campo es obligatorio." })}
            type="text"
            id="provincia"
            placeholder="Buenos Aires"
          />
          {errors.provincia && (
            <span className="form__error">{errors.provincia.message}</span>
          )}
        </div>
        <div className="form-group full-col">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            {...register("message", { required: "El campo es obligatorio." })}
            id="message"
            placeholder="Buenas tardes, mi nombre es Juan Carlos y me comunico con ustedes por que estoy interersado en ... "
            maxLength={200}
            rows={5}
          />
          {errors.message && (
            <span className="form__error">{errors.message.message}</span>
          )}
        </div>
        {contactType !== ContactType.COMERCIALIZA && (
          <div className="form-group full-col">
            <input {...register("file")} id="file" type="file" />
            <label htmlFor="file" className="file-label">
              <UploadIcon /> {mediaLabels[contactType]}
            </label>
          </div>
        )}
        <button type="submit" className="form__submit-button full-col">
          <p>Enviar</p>
        </button>
      </form>
    </>
  );
};
