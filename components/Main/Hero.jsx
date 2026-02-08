"use client";
import React from "react";
import Image from "next/image";
import classes from "./Hero.module.scss";
import HeroImage from "../../assets/images/2k-logo-white-czarne-tlo.svg";

const Hero = () => {
  const description = "STRONA W BUDOWIE";

  return (
    <div>
      <div className={classes.heroContainer}>
        <section id="hero" className={classes.hero}>
          <div className={classes.imageWrapper}>
            <Image
              src={HeroImage}
              alt="2K Auto Detailing Opole - Auto detailing - Korekta lakieru - Polerowanie lakieru"
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
                Auto detailing - Korekta lakieru - Polerowanie lakieru
              </span>
            </h1>
            <p className={classes.hero__description}>{description}</p>
          </div>
        </section>
        {/* <div className={classes.whiteBlockWrapper}></div> */}
      </div>
    </div>
  );
};

export default Hero;
