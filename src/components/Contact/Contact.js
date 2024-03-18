import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { mdiCloseThick, mdiCheckBold } from "@mdi/js";
import Icon from "@mdi/react";
import "./contact.scss";

function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const formData = new FormData(form.current);
    const errors = {};

    for (let [key, value] of formData.entries()) {
      if (!value) {
        errors[key] = "Ce champ est requis.";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm("service_dlp2fdl", "template_r0rlvzh", form.current, {
        publicKey: "9yMDAmgKWNcDR4lQl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccessMessage("Votre message a été envoyé avec succès.");
          setErrorMessage("");
          setErrors({});
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErrorMessage(
            "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer."
          );
          setSuccessMessage("");
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedErrors = { ...errors };

    if (value.trim() === "") {
      updatedErrors[name] = "Ce champ est requis.";
    } else {
      delete updatedErrors[name];
    }

    setErrors(updatedErrors);
  };

  return (
    <div className="contact">
      <h3>Contactez-moi</h3>
      <form ref={form} onSubmit={sendEmail}>
        <label className={errors.user_name ? "invalid" : ""}>
          Votre nom et prénom
          <input type="text" name="user_name" onChange={handleInputChange} />
          {errors.user_name && (
            <span className="error-message">
              <Icon path={mdiCloseThick} size={0.8} /> {errors.user_name}
            </span>
          )}
        </label>
        <label className={errors.user_email ? "invalid" : ""}>
          Votre adresse mail
          <input type="email" name="user_email" onChange={handleInputChange} />
          {errors.user_email && (
            <span className="error-message">
              <Icon path={mdiCloseThick} size={0.8} /> {errors.user_email}
            </span>
          )}
        </label>

        <label className={errors.message ? "invalid" : ""}>
          Votre message
          <textarea name="message" onChange={handleInputChange} />
          {errors.message && (
            <span className="error-message">
              <Icon path={mdiCloseThick} size={0.8} /> {errors.message}
            </span>
          )}
        </label>
        {successMessage && (
          <div className="success-message">
            <Icon path={mdiCheckBold} size={0.8} /> {successMessage}
          </div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default Contact;
