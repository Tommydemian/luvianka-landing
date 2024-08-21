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
  file: FileList;
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
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const formData = new FormData();

      // Append text fields
      Object.keys(data).forEach((key) => {
        if (key !== "file") {
          formData.append(key, data[key as keyof FormInputs] as string);
        }
      });

      // Append contactType
      formData.append("contactType", contactType);

      // Append file if it exists
      if (data.file && data.file.length > 0) {
        formData.append("file", data.file[0]);
      }

      const response = await fetch("https://formspree.io/f/meojrqkz", {
        method: "POST",
        body: formData, // Send formData instead of JSON
      });

      if (response.ok) {
        alert("Mensaje enviado con éxito");
        reset();
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el mensaje. Por favor, inténtelo de nuevo.");
    }
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
            placeholder="España 234"
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
                value: /^(0?)(11|15)\d{8}$/,
                message:
                  "Ingrese un número de celular válido (ej: 1133332222 o 01133332222).",
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
            <input
              {...register("file", {
                validate: {
                  fileType: (value) => {
                    if (!value[0]) return true;
                    const acceptedFileTypes = [
                      "image/jpeg",
                      "image/png",
                      "image/gif",
                      "application/pdf",
                      "application/msword",
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    ];
                    return (
                      acceptedFileTypes.includes(value[0].type) ||
                      "Tipo de archivo no permitido"
                    );
                  },
                  fileSize: (value) => {
                    if (!value[0]) return true;
                    const maxSize = 5 * 1024 * 1024; // 5MB
                    return (
                      value[0].size <= maxSize ||
                      "El archivo es demasiado grande (máx. 5MB)"
                    );
                  },
                },
              })}
              id="file"
              type="file"
              accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx"
            />
            {errors.file && (
              <p className="error-message">{errors.file.message}</p>
            )}
            <label htmlFor="file" className="file-label pointer">
              <UploadIcon /> {mediaLabels[contactType]}
              {errors.file && (
                <p className="error-message">{errors.file.message as string}</p>
              )}
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
