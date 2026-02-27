"use client";
import React from "react";
import Image from "next/image";
import classes from "./Hero.module.scss";
import HeroImage from "../../assets/images/2k-logo-black-bez-tla.svg";
import Link from "next/link";

const Hero = () => {
  const description = "Profesjonalny auto detailing w Opolu";

  return (
    <div>
      <div className={classes.heroContainer}>
        <section id="hero" className={classes.hero}>
          <div className={classes.imageWrapper}>
            <Image
              src={HeroImage}
              alt="2K Auto Detailing Opole - Korekta lakieru - Powłoki ceramiczne - Folie PPF"
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="100vw"
            />
          </div>

          <div className={classes.textOverlay}>
            <h1 className={classes.hero__title}>
              <span className={classes.hero__titleGold}>2K Auto Detailing</span>
              <br />
              <span className={classes.hero__titleWhite}>
                Korekta lakieru - Powłoki ceramiczne - Folie PPF
              </span>
            </h1>
            <p className={classes.hero__description}>{description}</p>
            <Link
              href="/galeria"
              className={classes.button}
              aria-label="Zobacz galerię realizacji 2K Auto Detailing"
            >
              <span
                className={classes.button__surface}
                aria-hidden="true"
              ></span>
              <span className={classes.button__icon} aria-hidden="true">
                <span></span>
              </span>
              <span className={classes.button__text}>Nasze realizacje</span>
            </Link>
          </div>
        </section>
        {/* <div className={classes.whiteBlockWrapper}></div> */}
      </div>
    </div>
  );
};

export default Hero;
