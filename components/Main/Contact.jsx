"use client";
import React, { useState } from "react";
import classes from "./Contact.module.scss";
import { PhoneCall, AtSign, CheckCircle, XCircle } from "lucide-react";
import clsx from "clsx";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const [messageStatus, setMessageStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSuccess(false);

    if (!form.consent) {
      setMessageStatus(
        "Musisz wyrazić zgodę na przetwarzanie danych osobowych.",
      );
      setIsSuccess(false);
      setShowModal(true);
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessageStatus("Wiadomość wysłana pomyślnie!");
        setIsSuccess(true);
        setForm({ name: "", email: "", message: "", consent: false });
      } else {
        setMessageStatus(
          data.error || "Wystąpił błąd przy wysyłaniu wiadomości.",
        );
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Błąd wysyłania: ", error);
      setMessageStatus("Wystąpił błąd przy wysyłaniu wiadomości.");
      setIsSuccess(false);
    } finally {
      setShowModal(true);
      setIsSending(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setMessageStatus(null);
  };

  return (
    <>
      <section className={classes.contact}>
        <div className={classes.contact__container}>
          <div className={classes.contact__info}>
            <h2>Kontakt</h2>
            <p>
              <strong>
                2K Auto Detailing Opole - Korekta lakieru <br />- Powłoka
                ceramiczna
              </strong>
              <br />
              Auto Detailing Opole
            </p>
            <p className={classes.contact__address}>
              Ulica: Prószkowska 43
              <br />
              Miasto: 45-758 Opole
            </p>
            <div
              className={`${classes.contact__info_row} ${classes.contact__info_phone}`}
            >
              <PhoneCall className={classes.icon} />
              <a
                href="tel:+48797234734"
                className={classes.contact__phone_link}
              >
                797 234 734
              </a>
            </div>
            <div className={classes.contact__info_row}>
              <AtSign className={classes.icon} />
              <a
                href="mailto:2kdetailingopole@gmail.com"
                className={classes.contact__email_link}
              >
                2kdetailingopole@gmail.com
              </a>
            </div>

            <hr className={classes.contact__divider} />

            <h3>Godziny otwarcia:</h3>
            <ul className={classes.contact__hours}>
              {[
                ["Poniedziałek", "08:00–17:00"],
                ["Wtorek", "08:00–17:00"],
                ["Środa", "08:00–17:00"],
                ["Czwartek", "08:00–17:00"],
                ["Piątek", "08:00–17:00"],
                ["Sobota", "09:00–14:00"],
                ["Niedziela", "Zamknięte"],
              ].map(([day, hours]) => (
                <li key={day}>
                  <span className={classes.contact__day}>{day}:</span>
                  {hours === "Zamknięte" ? (
                    <span className={classes.contact__time_closed}>
                      {hours}
                    </span>
                  ) : (
                    <span className={classes.contact__time}>{hours}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={classes.contact__separator} />

          <div className={classes.contact__form}>
            <h2>Wyślij mi wiadomość</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Twoje imię"
                value={form.name}
                onChange={handleChange}
                required
                aria-label="Imię i nazwisko"
              />
              <input
                type="email"
                name="email"
                placeholder="Twój email"
                value={form.email}
                onChange={handleChange}
                required
                aria-label="Adres e-mail"
              />
              <textarea
                name="message"
                placeholder="Twoja wiadomość"
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
                aria-label="Treść wiadomości"
              />
              <label className={classes.contact__checkbox}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                />
                Wyrażam zgodę na przetwarzanie moich danych osobowych przez 2K
                Auto Detailing w celu realizacji zapytania. Dane są podawane
                dobrowolnie, jednak są niezbędne do jego przetworzenia. Zostałem
                poinformowany o przysługującym mi prawie dostępu do moich
                danych, ich poprawiania oraz żądania zaprzestania przetwarzania.
              </label>
              <button type="submit" disabled={isSending || !form.consent}>
                {isSending ? "Wysyłanie..." : "Wyślij"}
              </button>
            </form>
          </div>
        </div>
        <div className={classes.whiteBlockWrapper}></div>
      </section>

      {showModal && (
        <div
          className={clsx(classes.modal, !isSuccess && classes.modalError)}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-status"
        >
          <button className={classes.modalCloseButton} onClick={closeModal}>
            &times;
          </button>
          <div
            className={classes.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={classes.modalIconWrapper} aria-hidden="true">
              {isSuccess ? (
                <CheckCircle size={48} color="#228b22" />
              ) : (
                <XCircle size={48} color="#e31e24" />
              )}
            </div>
            {messageStatus && <p id="modal-status">{messageStatus}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
