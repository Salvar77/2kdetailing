"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  exteriorServices,
  interiorServices,
  ppfPackages,
} from "../../constants";
import {
  FaCar,
  FaSprayCan,
  FaCheckCircle,
  FaCrown,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import classes from "./PriceList.module.scss";

const PriceCard = ({ svc }) => {
  // Wybór ikony w zależności od ceny lub typu
  const isPremium = svc.id?.includes("premium") || svc.id?.includes("3-lata");

  return (
    <div className={`${classes.priceCard} ${isPremium ? classes.premium : ""}`}>
      {isPremium && (
        <div className={classes.cardBadge}>
          <FaCrown /> PREMIUM
        </div>
      )}

      <div className={classes.priceCard__header}>
        <h3 className={classes.priceCard__title}>{svc.title}</h3>
        {svc.subtitle && (
          <span className={classes.priceCard__subtitle}>{svc.subtitle}</span>
        )}
      </div>

      <div className={classes.contentWrapper}>
        {svc.prices ? (
          <div className={classes.priceTable}>
            <div className={classes.priceTable__row}>
              <span className={classes.sizeLabel}>MAŁE</span>
              <span className={classes.dots}></span>
              <strong className={classes.amount}>
                {svc.prices.small} <small>zł</small>
              </strong>
            </div>
            <div className={classes.priceTable__row}>
              <span className={classes.sizeLabel}>ŚREDNIE</span>
              <span className={classes.dots}></span>
              <strong className={classes.amount}>
                {svc.prices.medium} <small>zł</small>
              </strong>
            </div>
            <div className={classes.priceTable__row}>
              <span className={classes.sizeLabel}>DUŻE</span>
              <span className={classes.dots}></span>
              <strong className={classes.amount}>
                {svc.prices.large} <small>zł</small>
              </strong>
            </div>
          </div>
        ) : (
          <div className={classes.mainPrice}>
            <span className={classes.amountLarge}>{svc.price}</span>
          </div>
        )}

        {svc.extraPrice && (
          <div className={classes.extraPriceBadge}>
            {svc.extraPrice.label}: {svc.extraPrice.value} zł
          </div>
        )}

        <ul className={classes.checkList}>
          {svc.items?.map((item, idx) => (
            <li key={idx}>
              <FaCheckCircle /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PPFCard = ({ pkg }) => {
  const stars = Array(5).fill(0);

  return (
    <div className={classes.ppfPackage}>
      <div className={classes.ppfLeft}>
        <span className={classes.ppfLabel}>PAKIET</span>
        <h3 className={classes.ppfTitle}>{pkg.title}</h3>
        <div className={classes.ppfImageWrapper}>
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      </div>

      <div className={classes.ppfStats}>
        <div className={classes.statItem}>
          <span className={classes.statItem__label}>Poziom ochrony:</span>
          <div className={classes.starRating}>
            {stars.map((_, i) => (
              <FaStar
                key={i}
                className={i < pkg.protectionLevel ? "" : classes.emptyStar}
              />
            ))}
          </div>
        </div>
        <div className={classes.statItem}>
          <span className={classes.statItem__label}>Trwałość ochrony:</span>
          <span className={classes.statItem__value}>{pkg.durability}</span>
        </div>
        <div className={classes.statItem}>
          <span className={classes.statItem__label}>Czas realizacji:</span>
          <span className={classes.statItem__value}>{pkg.time}</span>
        </div>
      </div>

      <div className={classes.ppfRight}>
        <div className={classes.ppfDesc}>
          <strong>Opis usługi:</strong>
          {pkg.description}
        </div>
        <div className={classes.ppfBottom}>
          <div className={classes.ppfPrice}>
            Cena od: <strong>{pkg.price} zł</strong>
          </div>
          <button
            className={classes.ppfButton}
            onClick={() => (window.location.href = "tel:797234734")}
          >
            Umów usługę
          </button>
        </div>
      </div>
    </div>
  );
};

const Pricelist = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Usuwamy puste wpisy o PPF z regularnych usług zewnętrznych, żeby nie było dubli
  const filteredExterior = exteriorServices.filter(
    (svc) => svc.id !== "ppf-ochrona",
  );

  return (
    <div className={`${classes.pricing} ${isHome ? "" : classes.noTopPadding}`}>
      <div className={classes.pricingSection}>
        <h2 className={classes.pricingSection__mainTitle}>
          <span>Usługi Detailingowe</span>
        </h2>

        {/* SEKCJA PPF */}
        <div className={classes.categoryGroup}>
          <h2 className={classes.categoryLabel}>
            <FaShieldAlt /> Folie Ochronne PPF
          </h2>
          <div className={classes.ppfGrid}>
            {ppfPackages.map((pkg) => (
              <PPFCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        {/* USŁUGI ZEWNĘTRZNE */}
        <div className={classes.categoryGroup}>
          <h2 className={classes.categoryLabel}>
            <FaCar /> Usługi Zewnętrzne
          </h2>
          <div className={classes.pricingFlex}>
            {filteredExterior.map((svc) => (
              <PriceCard key={svc.id} svc={svc} />
            ))}
          </div>
        </div>

        {/* PIELĘGNACJA WNĘTRZA */}
        <div className={classes.categoryGroup}>
          <h2 className={classes.categoryLabel}>
            <FaSprayCan /> Pielęgnacja Wnętrza
          </h2>
          <div className={classes.pricingFlex}>
            {interiorServices.map((svc) => (
              <PriceCard key={svc.id} svc={svc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricelist;
