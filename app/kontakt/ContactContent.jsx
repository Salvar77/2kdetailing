"use client";
import React from "react";
import classes from "./ContactContent.module.scss";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaRegClock, FaClock, FaHourglassEnd } from "react-icons/fa";

import {
  textVariant,
  fadeIn,
  fadeScale,
  staggerContainer,
} from "../../utils/motion";

const ContactContent = () => (
  <motion.div
    className={classes.contactContent}
    variants={staggerContainer(0.2, 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.h1 className={classes.contactContent__h1} variants={textVariant(0)}>
      Skontaktuj się z 2K Detailing – Opole
    </motion.h1>
    <div className={classes.contactContent__textWrapper}>
      <motion.p variants={fadeIn("up", "spring", 0.2, 0.7)}>
        Cześć! Jesteśmy <span className={classes.bold}>2K Detailing</span> z
        Opola. Codziennie pomagamy kierowcom przywracać ich samochodom świeżość
        – od <span className={classes.bold}>korekty lakieru</span>, przez{" "}
        <span className={classes.bold}>powłoki ceramiczne</span>, aż po{" "}
        <span className={classes.bold}>folie PPF</span>.
      </motion.p>

      <motion.p variants={fadeIn("up", "spring", 0.4, 0.7)}>
        Masz pytanie? Chcesz zapytać nas o termin, zakres usługi lub cenę?{" "}
        <span className={classes.bold}>
          Zadzwoń lub napisz – odpowiemy w ciągu godziny
        </span>{" "}
        i przedstawimy darmową wycenę. Kontaktujesz się bezpośrednio z nami –
        bez pośredników, bez presji, z pełnym zaangażowaniem.
      </motion.p>

      <motion.h3 variants={textVariant(0.6)}>Dane kontaktowe</motion.h3>

      <motion.p variants={fadeIn("up", "spring", 0.8, 0.7)}>
        <span className={classes.bold}>2K Detailing – Opole</span>
        <br />
        <FaMapMarkerAlt className={classes.icon1} /> ul. Prószkowska 43, 45-758
        Opole
        <br />
        <FaPhone className={classes.icon} />{" "}
        <a href="tel:WpiszTel">797 234 734</a>
        <br />
        <FaEnvelope className={classes.icon} />{" "}
        <a href="mailto:kontakt@2kdetailing.pl">2kdetailingopole@gmail.com</a>
      </motion.p>

      <motion.h3 variants={textVariant(1.0)}>Godziny otwarcia</motion.h3>

      <motion.p variants={fadeIn("up", "spring", 1.2, 0.7)}>
        <FaRegClock className={classes.icon} /> Pon.–Pt. 08:00–18:00
        <br />
        <FaClock className={classes.icon} /> Sobota 09:00–14:00
        <br />
        <FaHourglassEnd className={classes.icon} /> Niedziela: nieczynne
      </motion.p>

      <motion.p variants={fadeIn("up", "spring", 1.4, 0.7)}>
        💬 Wycena jest{" "}
        <span className={classes.bold}>bezpłatna i niezobowiązująca</span> –
        możesz też do nas napisać poprzez formularz kontaktowy. Twoje dane są
        bezpieczne – szanujemy prywatność naszych klientów.
      </motion.p>

      <motion.h3 variants={textVariant(1.6)}>
        Znajdziesz nas również tutaj:
      </motion.h3>

      <motion.ul className={classes.socialList} variants={fadeScale(1.8, 0.7)}>
        <li>
          <a
            href="https://www.facebook.com/people/2K-Auto-Detailing-Opole/61587187552980/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </li>
      </motion.ul>
    </div>
  </motion.div>
);

export default ContactContent;
