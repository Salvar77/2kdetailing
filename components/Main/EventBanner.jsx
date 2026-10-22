"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedButton from "../More/AnimatedButton";
import { FaFlagCheckered, FaCheckCircle, FaArrowRight, FaBolt } from "react-icons/fa";
import classes from "./EventBanner.module.scss";

export default function EventBanner() {
  return (
    <section className={classes.eventBannerSection}>
      <div className={classes.glow} />
      <div className={classes.container}>
        <motion.div
          className={classes.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className={classes.content}>
            <div className={classes.badge}>
              <span className={classes.badgeText}>
                <FaFlagCheckered className={classes.badgeIcon} /> Nowość w ofercie • Silesia Ring • Cała Polska
              </span>
            </div>

            <h2 className={classes.title}>
              Mobilna Obsługa <span>Eventów Motoryzacyjnych</span> i Targów
            </h2>

            <p className={classes.description}>
              Organizujesz track day, zlot supersamochodów, premierę salonową lub targi?
              2K Detailing zapewnia kompleksową, mobilną opiekę detailingową w padoku i hali
              wystawowej. Jesteśmy w pełni przygotowani na eventy – posiadamy własny profesjonalny sprzęt oraz technologię mycia No Rinse.
            </p>

            <ul className={classes.featureList}>
              <li>
                <FaCheckCircle />
                <span><strong>Pełna Mobilność</strong> – własny profesjonalny sprzęt, namioty i mycie metodą No Rinse</span>
              </li>
              <li>
                <FaCheckCircle />
                <span><strong>Opieka torowa & ekspozycyjna</strong> – usuwanie gumy z opon, pyłu i odcisków palców</span>
              </li>
              <li>
                <FaCheckCircle />
                <span><strong>Doświadczenie</strong> – obsługa imprez takich jak Audi Driving Experience i track days na Silesia Ring</span>
              </li>
            </ul>

            <div className={classes.actions}>
              <AnimatedButton href="/obsluga-eventow" className={classes.bannerBtnAnimated}>
                <span>Sprawdź ofertę obsługi eventów &rarr;</span>
              </AnimatedButton>
            </div>
          </div>

          <div className={classes.imageWrapper}>
            <Image
              src="/images/obsluga-eventow-2k-detailing-silesia-ring.webp"
              alt="Obsługa eventów motoryzacyjnych 2K Detailing na torze wyścigowym Silesia Ring"
              fill
            />
            <div className={classes.imageWrapper__tag}>
              <FaBolt /> Tor Silesia Ring • Track Days • Targi
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
