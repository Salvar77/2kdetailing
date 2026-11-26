"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import classes from "./page.module.scss";

const GaleriaClient = ({ realization }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [colCount, setColCount] = useState(3);

  const images = realization?.images || [];
  const total = images.length;

  useEffect(() => {
    const updateColumns = () => {
      const w = window.innerWidth;
      if (w < 640) setColCount(1);
      else if (w < 992) setColCount(2);
      else setColCount(3);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const effectiveCols = Math.max(1, Math.min(colCount, total || 1));

  const columns = useMemo(() => {
    const cols = Array.from({ length: effectiveCols }, () => ({
      items: [],
      height: 0,
    }));

    images.forEach((image, index) => {
      let targetCol = 0;
      if (index < effectiveCols) {
        targetCol = index;
      } else {
        for (let c = 1; c < effectiveCols; c++) {
          if (cols[c].height < cols[targetCol].height) {
            targetCol = c;
          }
        }
      }

      const ratio =
        typeof image === "object" && image?.width && image?.height
          ? image.height / image.width
          : 0.75;

      cols[targetCol].items.push({ image, index });
      cols[targetCol].height += ratio;
    });

    return cols;
  }, [images, effectiveCols]);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrev = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (total <= 1) return;
      setActiveIndex((prev) => (prev === null ? null : (prev - 1 + total) % total));
    },
    [total],
  );

  const showNext = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (total <= 1) return;
      setActiveIndex((prev) => (prev === null ? null : (prev + 1) % total));
    },
    [total],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  if (!realization) {
    return (
      <div className={classes.realizationDetail}>
        <h1 className={classes.realizationDetail__header}>
          Nie znaleziono realizacji
        </h1>
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Wybrana realizacja nie istnieje lub została usunięta.
        </p>
        <div className={classes.backWrapper}>
          <Link href="/galeria" className={classes.resetButton}>
            Powrót do wyboru kategorii
          </Link>
        </div>
      </div>
    );
  }

  const activeImage = activeIndex !== null ? images[activeIndex] : null;
  const isStaticActive =
    typeof activeImage === "object" && activeImage !== null;

  return (
    <div>
      <section id="oferta" className={classes.realizationDetail}>
        <h1 className={classes.realizationDetail__header}>
          {realization.description}
        </h1>
        <div className={classes.realizationDetail__box}>
          <div
            className={`${classes.realizationDetail__masonry} ${
              total <= 2 ? classes.realizationDetail__masonryCompact : ""
            }`}
          >
            {columns.map((col, colIdx) => (
              <div key={colIdx} className={classes.realizationDetail__column}>
                {col.items.map(({ image, index }) => {
                  const isStatic = typeof image === "object" && image !== null;
                  const src = isStatic ? image.src : image;
                  const imgWidth = isStatic && image.width ? image.width : 1200;
                  const imgHeight = isStatic && image.height ? image.height : 900;

                  return (
                    <button
                      key={index}
                      type="button"
                      className={classes.realizationDetail__imageWrapper}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Powiększ zdjęcie ${index + 1} z ${total}: ${realization.description}`}
                    >
                      <Image
                        src={src}
                        alt={`${realization.description} – realizacja 2K Auto Detailing Opole (${index + 1})`}
                        width={imgWidth}
                        height={imgHeight}
                        sizes={
                          total <= 2
                            ? "(max-width: 639px) 92vw, 520px"
                            : "(max-width: 639px) 92vw, (max-width: 991px) 46vw, 375px"
                        }
                        quality={75}
                        priority={index < 3}
                        placeholder={
                          isStatic && image.blurDataURL ? "blur" : "empty"
                        }
                        blurDataURL={isStatic ? image.blurDataURL : undefined}
                      />
                      <span className={classes.itemOverlay} aria-hidden="true">
                        <span className={classes.zoomIcon}>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="7" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className={classes.backWrapper}>
          <Link href="/galeria" className={classes.resetButton}>
            Powrót do wyboru kategorii
          </Link>
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && activeImage && (
          <motion.div
            className={classes.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Podgląd zdjęcia ${activeIndex + 1} z ${total}`}
          >
            <div
              className={classes.lightboxTopBar}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={classes.lightboxCounter}>
                {activeIndex + 1} / {total} &bull; {realization.description}
              </span>
              <button
                type="button"
                className={classes.lightboxClose}
                onClick={closeLightbox}
                aria-label="Zamknij podgląd"
              >
                &#10005;
              </button>
            </div>

            {total > 1 && (
              <button
                type="button"
                className={`${classes.lightboxNav} ${classes.lightboxPrev}`}
                onClick={showPrev}
                aria-label="Poprzednie zdjęcie"
              >
                &#8249;
              </button>
            )}

            <motion.div
              key={activeIndex}
              className={classes.lightboxStage}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              drag={total > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) showNext();
                else if (info.offset.x > 60) showPrev();
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={isStaticActive ? activeImage.src : activeImage}
                alt={`${realization.description} – powiększenie (${activeIndex + 1}/${total})`}
                width={
                  isStaticActive && activeImage.width ? activeImage.width : 1600
                }
                height={
                  isStaticActive && activeImage.height
                    ? activeImage.height
                    : 1200
                }
                sizes="95vw"
                quality={90}
                priority
                placeholder={
                  isStaticActive && activeImage.blurDataURL ? "blur" : "empty"
                }
                blurDataURL={isStaticActive ? activeImage.blurDataURL : undefined}
                className={classes.lightboxImg}
                draggable={false}
              />
            </motion.div>

            {total > 1 && (
              <button
                type="button"
                className={`${classes.lightboxNav} ${classes.lightboxNext}`}
                onClick={showNext}
                aria-label="Następne zdjęcie"
              >
                &#8250;
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GaleriaClient;
