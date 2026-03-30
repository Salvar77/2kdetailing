"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import classes from "./Hero.module.scss";
import HeroImage from "../../assets/images/2k-logo-black-bez-tla.svg";
import KorektaImg from "../../assets/images/wlasciciel-2k-auto-detailing-korekta-lakieru-opole.webp";
import CeramikaImg from "../../assets/images/wlasciciel-2k-auto-detailing-korekta-lakieru-2-opole.webp";
import PPFImg from "../../assets/images/wlasciciel-2k-auto-detailing-folia-ppf-opole.webp";

const slides = [
  {
    id: 1,
    title1: "2K Auto Detailing Opole",
    title2: "Korekta lakieru - Powłoka ceramiczna",
    description: "Profesjonalny auto detailing w Opolu",
    image: HeroImage,
    link: "/galeria",
    buttonText: "Realizacje",
    isSEO: true,
  },
  {
    id: 2,
    title1: (
      <>
        MISTRZOWSKA{" "}
        <span className={classes.hero__titleRed}>KOREKTA LAKIERU</span>
      </>
    ),
    title2: "",
    description: "Przywracamy fabryczną głębię koloru i usuwamy 95% zarysowań.",
    image: KorektaImg,
    link: "/oferta/korekta-lakieru",
    buttonText: "Sprawdź ofertę",
  },
  {
    id: 3,
    title1: (
      <>
        <span className={classes.hero__titleRed}>CERAMICZNA</span> OCHRONA I
        BLASK
      </>
    ),
    title2: "",
    description: "Najnowocześniejsze powłoki 9H chroniące przed chemią i UV.",
    image: CeramikaImg,
    link: "/oferta/powloka-ceramiczna",
    buttonText: "Sprawdź ofertę",
  },
  {
    id: 4,
    title1: (
      <>
        <span className={classes.hero__titleRed}>FOLIA PPF</span> – PANCERNA
        OCHRONA
      </>
    ),
    title2: "",
    description:
      "Samoregenerująca folia chroniąca przed odpryskami i zarysowaniami.",
    image: PPFImg,
    link: "/oferta/folia-ppf",
    buttonText: "Sprawdź ofertę",
    objectPosition: "center 70%",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className={classes.heroSliderContainer}>
      <h1 className={classes.srOnly}>
        2K Auto Detailing Opole – Korekta lakieru, Powłoka ceramiczna, Folia PPF
      </h1>
      <AnimatePresence mode="wait" initial={false}>
        <motion.section
          key={slides[current].id}
          id="hero"
          className={classes.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className={classes.imageWrapper}>
            <Image
              src={slides[current].image}
              alt={slides[current].title1}
              fill
              style={{
                objectFit: "cover",
                objectPosition: slides[current].objectPosition || "center",
              }}
              priority={current === 0}
              sizes="100vw"
            />
          </div>

          <motion.div
            className={clsx(
              classes.textOverlay,
              slides[current].isSEO && classes.textOverlaySEO,
            )}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {slides[current].isSEO ? (
              <h2 className={`${classes.hero__title} ${classes.hero__titleSEO}`}>
                <span className={classes.hero__titleGold}>
                  {slides[current].title1}
                </span>
                <br />
                <span className={classes.hero__titleWhite}>
                  {slides[current].title2}
                </span>
              </h2>
            ) : (
              <h2 className={classes.hero__title}>
                <span className={classes.hero__titleWhite}>
                  {slides[current].title1}
                </span>
              </h2>
            )}
            <p className={classes.hero__description}>
              {slides[current].description}
            </p>
            <Link
              href={slides[current].link}
              className={classes.button}
              aria-label={slides[current].buttonText}
              onClick={() => window.scrollTo(0, 0)}
            >
              <span
                className={classes.button__surface}
                aria-hidden="true"
              ></span>
              <span className={classes.button__icon} aria-hidden="true">
                <span></span>
              </span>
              <span className={classes.button__text}>
                {slides[current].buttonText}
              </span>
            </Link>
          </motion.div>
        </motion.section>
      </AnimatePresence>

      <div className={classes.bullets}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={clsx(
              classes.bullet,
              index === current && classes.active,
            )}
            onClick={() => setCurrent(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
