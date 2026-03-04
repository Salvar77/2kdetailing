"use client";
import { motion } from "framer-motion";
import SliderTrue from "./SliderTrue";
import BeforeImage1 from "../../assets/images/2k-logo-black-biale-tlo.svg";
import AfterImage1 from "../../assets/images/2k-logo-black-biale-tlo.svg";
import BeforeImage2 from "../../assets/images/2k-logo-black-biale-tlo.svg";
import AfterImage2 from "../../assets/images/2k-logo-black-biale-tlo.svg";
import BeforeImage3 from "../../assets/images/2k-logo-black-biale-tlo.svg";
import AfterImage3 from "../../assets/images/2k-logo-black-biale-tlo.svg";
import BeforeImage4 from "../../assets/images/2k-logo-black-biale-tlo.svg";
import AfterImage4 from "../../assets/images/2k-logo-black-biale-tlo.svg";
import classes from "./SliderSection.module.scss";
import Link from "next/link";
import { blurUp } from "../../utils/motion";

const SliderSection = ({
  showTitle = true,
  showButton = true,
  customBgColor,
  maxImagesToShow = 3,
  additionalClass = "",
  style,
}) => {
  const images = [
    {
      beforeImage: BeforeImage1,
      afterImage: AfterImage1,
      altBefore:
        "Lakier przed korektą lakieru z widocznymi zarysowaniami i hologramami",
      altAfter:
        "Lakier po wieloetapowej korekcie – pełny blask i lustrzane odbicie",
    },
    {
      beforeImage: BeforeImage4,
      afterImage: AfterImage4,
      altBefore: "Zmętniały i oksydowany lakier przed pracą detailingową",
      altAfter:
        "Zabezpieczenie lakieru powłoką ceramiczną – ekstremalny połysk",
    },
    {
      beforeImage: BeforeImage3,
      afterImage: AfterImage3,
      altBefore: "Zniszczony lakier podatny na warunki atmosferyczne",
      altAfter:
        "Auto zabezpieczone folią ochronną PPF – nieskazitelna głębia koloru",
    },
    {
      beforeImage: BeforeImage2,
      afterImage: AfterImage2,
      altBefore: "Zaniedbana karoseria przed procesem auto detailingu",
      altAfter:
        "Pełen auto detailing z zewnątrz – przywrócenie stanu salonowego",
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
              variants={blurUp(index * 0.1, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
            >
              <SliderTrue
                beforeImage={beforeImage}
                afterImage={afterImage}
                alt={`Zdjęcie po i przed: ${altBefore} | ${altAfter}. Usługa: Auto Detailing Opole, Korekta lakieru, Polerowanie lakieru`}
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
