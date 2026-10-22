"use client";
import { motion } from "framer-motion";
import SliderTrue from "./SliderTrue";
import BeforeImage1 from "../../assets/images/przyciemnianie-szyb-samochodowych-opole-przed.webp";
import AfterImage1 from "../../assets/images/przyciemnianie-szyb-samochodowych-opole-po.webp";
import BeforeImage2 from "../../assets/images/regeneracja-reflektorow-renault-laguna-opole-przed.webp";
import AfterImage2 from "../../assets/images/regeneracja-reflektorow-renault-laguna-opole-po.webp";
import BeforeImage3 from "../../assets/images/korekta-lakieru-polerowanie-czerwony-lakier-opole-przed.webp";
import AfterImage3 from "../../assets/images/korekta-lakieru-polerowanie-czerwony-lakier-opole-po.webp";
import BeforeImage4 from "../../assets/images/pranie-tapicerki-czyszczenie-wnetrza-opole-przed.webp";
import AfterImage4 from "../../assets/images/pranie-tapicerki-czyszczenie-wnetrza-opole-po.webp";
import classes from "./SliderSection.module.scss";
import Link from "next/link";
import { blurUp } from "../../utils/motion";

const SliderSection = ({
  showTitle = true,
  showButton = true,
  customBgColor,
  maxImagesToShow = 4,
  additionalClass = "",
  style,
}) => {
  const images = [
    {
      beforeImage: BeforeImage1,
      afterImage: AfterImage1,
      altBefore:
        "Samochód BMW E91 przed usługą profesjonalnego przyciemniania szyb w Opolu",
      altAfter:
        "BMW E91 po przyciemnieniu szyb folią premium – elegancja i ochrona UV",
      objectPosition: "25% 50%",
    },
    {
      beforeImage: BeforeImage4,
      afterImage: AfterImage4,
      altBefore: "Brudna tapicerka samochodowa przed praniem ekstrakcyjnym w Opolu",
      altAfter:
        "Tapicerka wyczyszczona i zaimpregnowana – detailing wnętrza w 2K Auto Detailing Opole",
    },
    {
      beforeImage: BeforeImage3,
      afterImage: AfterImage3,
      altBefore:
        "Mocno zmatowiały, utleniony czerwony lakier maski przed jednoetapową korektą w Opolu",
      altAfter:
        "Lustrzana głębia koloru i usunięcie zmatowień po korekcie lakieru – 2K Auto Detailing Opole",
    },
    {
      beforeImage: BeforeImage2,
      afterImage: AfterImage2,
      altBefore:
        "Zmatowiały, pożółkły reflektor Renault Laguna Coupé przed regeneracją w Opolu",
      altAfter:
        "Krystalicznie przejrzysty reflektor po polerowaniu i zabezpieczeniu UV w 2K Auto Detailing Opole",
    },
  ];

  const gridClass =
    maxImagesToShow === 4 ? classes.fiveColumnsGrid : classes.defaultGrid;

  return (
    <section
      id="galeria"
      className={
        `${classes.sliderSection}` +
        (customBgColor ? ` ${classes.customBgColor}` : "") +
        (additionalClass ? ` ${additionalClass}` : "")
      }
      style={style}
    >
      {showTitle && <h2 className={classes.titleSlide}>Nasze realizacje</h2>}

      <p className={classes.sliderDescription}>
        Przesuń suwak, aby porównać efekt <strong>przed</strong> i&nbsp;
        <strong>po</strong> zaawansowanych pracach autodetailingowych, w tym:
        precyzyjnej korekcie lakieru, aplikacji trwałych powłok ceramicznych
        oraz zabezpieczaniu bezbarwnymi foliami PPF. Zobacz,
        jak&nbsp;przywracamy fabryczną świeżość, niesamowitą głębię koloru i
        szklisty połysk.
      </p>
      <div className={`${classes.sliderGrid} ${gridClass}`}>
        {images
          .slice(0, maxImagesToShow)
          .map(({ beforeImage, afterImage, altBefore, altAfter }, index) => (
            <motion.div
              key={index}
              variants={blurUp((index % 2) * 0.1, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              <SliderTrue
                beforeImage={beforeImage}
                afterImage={afterImage}
                objectPosition={images[index].objectPosition}
                alt={`Zdjęcie przed i po usłudze: ${altBefore} | ${altAfter}.`}
              />
            </motion.div>
          ))}
      </div>
      {showButton && (
        <div className={classes.buttonContainer}>
          <Link
            href="/galeria"
            className={classes.realizationButton}
            aria-label="Zobacz realizacje 2K Auto Detailing w galerii"
            onClick={() => window.scrollTo(0, 0)}
          >
            Galeria
          </Link>
        </div>
      )}
    </section>
  );
};

export default SliderSection;
