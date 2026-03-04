"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../../utils/motion";
import { FaPhone, FaCar, FaClock, FaThumbsUp } from "react-icons/fa";
import AnimatedButton from "../More/AnimatedButton";
import classes from "./AboutUs.module.scss";
import AboutImage from "../../assets/images/2k-logo-black-biale-tlo.svg";

const aboutContent = {
  title: "Profesjonalny auto detailing w Opolu",
  subtitle:
    "2K Auto Detailing – korekta lakieru, powłoka ceramiczna i ochrona PPF",
  paragraphs: [
    "Jesteśmy zespołem z wieloletnim doświadczeniem. Tworzymy markę 2K Auto Detailing Opole – a tymi specjalistami jesteśmy my: Kamil i Krzysztof. To właśnie od pierwszych liter naszych imion powstała nazwa 2K. Łączymy wiedzę, precyzję i pasję do motoryzacji, dbając o każdy detal powierzonych nam samochodów.",
    "Specjalizujemy się w korekcie lakieru, aplikacji powłok ceramicznych, zabezpieczaniu folią PPF, a także w kompleksowym czyszczeniu wnętrz – detailingu wnętrza. Każde auto traktujemy jak własne, bo wierzymy, że diabeł tkwi w szczegółach.",
    "Nasza oferta to kompleksowa pielęgnacja samochodów: od jedno- i wieloetapowej korekty lakieru, przez aplikację powłok ceramicznych (w tym Cleantle Admire i Aqua, Ultracoat), aż po detailing wnętrza, pranie tapicerki i renowację skór czy przyciemnianiu szyb samochodowych. Pracujemy wyłącznie na sprawdzonych, renomowanych produktach.",
    "Nie działamy szablonowo. Każdy pojazd dokładnie diagnozujemy, doradzamy najlepsze rozwiązania i dobieramy technologię do konkretnych potrzeb – niezależnie od tego, czy chodzi o zabezpieczenie lakieru przed sprzedażą, czy przygotowanie auta do sezonu. Dzięki transparentności i stałej komunikacji nasi klienci wracają do nas i polecają nas dalej.",
    "Motoryzacja to nasza pasja, a auto detailing w Opolu to dla nas nie tylko praca – to styl życia. Jeśli zależy Ci na idealnym połysku, głębi koloru i długotrwałej ochronie, jesteś we właściwym miejscu.",
  ],
};

const whyFeatures = [
  {
    Icon: FaCar,
    text: "Auto jak nowe – przywracamy fabryczny połysk i głębię koloru",
  },
  {
    Icon: FaClock,
    text: "Oszczędność czasu i pieniędzy – długotrwała ochrona lakieru",
  },
  {
    Icon: FaThumbsUp,
    text: "Wyższa wartość rynkowa auta – idealne przed sprzedażą",
  },
];

export default function AboutUs() {
  const handlePhoneClick = () => {
    window.location.href = "tel:797234734";
  };

  return (
    <section className={classes.about}>
      <div className={classes.about__background}>
        <Image
          src={AboutImage}
          alt="2K Auto Detailing Opole – zespół: Kamil i Krzysztof. Specjaliści od korekty lakieru, powłok ceramicznych i folii PPF w Opolu."
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className={classes.about__overlay} />
      </div>

      <div className={classes.about__content}>
        <motion.h2
          className={classes.about__title}
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {aboutContent.title}
        </motion.h2>

        <motion.h3
          className={classes.about__subtitle}
          variants={fadeIn("up", "tween", 0.3, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {aboutContent.subtitle}
        </motion.h3>

        <motion.div
          className={classes.about__text}
          variants={fadeIn("up", "tween", 0.4, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {aboutContent.paragraphs.map((paragraph, idx) => (
            <p key={idx} className={classes.about__paragraph}>
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* ✅ NOWA SEKCJA: DLACZEGO WARTO – 3 IKONY */}
        <motion.div
          className={classes.about__why}
          variants={fadeIn("up", "tween", 0.7, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className={classes.about__whyTitle}>Dlaczego warto?</h4>
          <ul className={classes.about__list}>
            {whyFeatures.map(({ Icon, text }, i) => (
              <motion.li
                key={i}
                className={classes.about__item}
                variants={fadeIn("up", "tween", 0.8 + i * 0.1, 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Icon className={classes.about__icon} />
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 1.1, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={classes.about__buttonWrapper}
        >
          <AnimatedButton
            className={classes.about__phoneButton}
            onClick={handlePhoneClick}
            aria-label="Zadzwoń do 2K Auto Detailing Opole – korekta lakieru i powłoka ceramiczna"
          >
            Zadzwoń – 797 234 734
            <FaPhone className={classes.about__phoneIcon} />
          </AnimatedButton>

          <span className={classes.about__hours}>
            pon.-pt. 8:00–17:00 | sob. 9:00–14:00
          </span>
        </motion.div>
      </div>
    </section>
  );
}
