import React, { useState } from "react";
import Logo from "../../assets/images/2k-logo-white-bez-tla.svg";
import classes from "./ContactMain.module.scss";
import Link from "next/link";
import Image from "next/image";

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const ContactMain = () => {
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices((prev) => !prev);
  };

  return (
    <section id="kontakt-główny" className={classes.contactMain}>
      <div className={classes.column}>
        <h2 className={classes.heading}>Dane kontaktowe:</h2>
        <p>
          2K Auto Detailing Opole
          <br />- Korekta lakieru <br />- Powłoka ceramiczna
        </p>
        <p className={classes.address}>ul. Prószkowska 43</p>
        <p className={classes.addressTwo}>45-758 Opole</p>
        <p className={classes.phone}>Tel: 797 234 734</p>
        <p className={classes.email}>2kdetailingopole@gmail.com</p>
        <p className={classes.hours}>Godziny otwarcia:</p>
        <p className={classes.hoursDetails}>
          pon. - pt.{" "}
          <span className={classes.hoursDetailsSpan}>08:00 - 17:00</span>
        </p>
        <p className={classes.hoursDetails}>
          sob. <span className={classes.hoursDetailsSpan}>09:00 - 14:00</span>
        </p>
      </div>

      <div className={classes.column}>
        <div className={classes.logoBlock}>
          <Image
            src={Logo}
            alt="Logo firmy 2K Auto Detailing Opole - korekta lakieru, powłoka ceramiczna"
            className={classes.logo}
            width={350}
            height={350}
          />
        </div>
      </div>

      <div className={classes.column}>
        <h2 className={classes.heading}>Menu:</h2>
        <nav className={classes.nav} role="navigation" aria-label="Główne menu">
          <ul>
            <li>
              <Link href="/cennik" aria-label="Przejdź do sekcji O nas">
                Cennik
              </Link>
            </li>

            <li>
              <span onClick={toggleServices} aria-label="Pokaż usługi">
                Oferta
              </span>
            </li>

            <li>
              <Link href="/recenzje" aria-label="Przejdź do sekcji Recenzje">
                Recenzje
              </Link>
            </li>
            <li>
              <Link href="/galeria" aria-label="Przejdź do sekcji Galeria">
                Galeria
              </Link>
            </li>
            <li>
              <Link href="/kontakt" aria-label="Przejdź do sekcji Kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.column}>
        <h2 className={classes.heading}>Linki:</h2>
        <ul className={classes.socialList}>
          <li>
            <Link
              href="/polityka-prywatnosci"
              aria-label="Przejdź do Polityki Prywatności"
            >
              Polityka Prywatności
            </Link>
          </li>
          <li>
            <Link href="/blog" aria-label="Przejdź do bloga">
              Blog
            </Link>
          </li>
          <li>
            <a
              href="https://www.facebook.com/people/2K-Auto-Detailing-Opole/61587187552980/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odwiedź mnie na Facebooku"
            >
              <FaFacebookF className={classes.facebookIcon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/2kdetailingopole/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className={classes.facebookIcon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@2kdetailingopole"
              target="_blank"
              rel="noreferrer"
              aria-label="Tiktok"
            >
              <FaTiktok className={classes.facebookIcon} />
            </a>
          </li>
        </ul>
      </div>

      {showServices && (
        <div className={classes.fullScreenModal}>
          <button
            className={classes.closeButton}
            onClick={toggleServices}
            aria-label="Zamknij usługi"
          >
            ×
          </button>
          <h3 className={classes.modalTitle}>Usługi:</h3>
          <ul className={classes.servicesList}>
            <li>
              <Link href="/oferta/korekta-lakieru" onClick={toggleServices}>
                Korekta lakieru
              </Link>
            </li>
            <li>
              <Link href="/oferta/powloka-ceramiczna" onClick={toggleServices}>
                Powłoka ceramiczna i elastomerowa
              </Link>
            </li>
            <li>
              <Link href="/oferta/folia-ppf" onClick={toggleServices}>
                Zabezpieczenie folią PPF
              </Link>
            </li>
            <li>
              <Link href="/oferta/pranie-tapicerki" onClick={toggleServices}>
                Pranie tapicerki
              </Link>
            </li>
            <li>
              <Link href="/oferta/renowacja-skor" onClick={toggleServices}>
                Renowacja skór
              </Link>
            </li>
            <li>
              <Link href="/oferta/detailing-wnetrza" onClick={toggleServices}>
                Detailing wnętrza
              </Link>
            </li>
            <li>
              <Link
                href="/oferta/regeneracja-reflektorow"
                onClick={toggleServices}
              >
                Regeneracja reflektorów
              </Link>
            </li>
            <li>
              <Link href="/oferta/przyciemnianie-szyb" onClick={toggleServices}>
                Przyciemnianie szyb
              </Link>
            </li>
            <li>
              <Link href="/oferta/auto-detailing" onClick={toggleServices}>
                Auto Detailing – pakiet kompleksowy
              </Link>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default ContactMain;
