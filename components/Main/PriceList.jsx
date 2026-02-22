"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { exteriorServices, interiorServices } from "../../constants";
import {
  FaShieldAlt,
  FaCar,
  FaSprayCan,
  FaCheckCircle,
  FaCrown,
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

const Pricelist = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className={`${classes.pricing} ${isHome ? "" : classes.noTopPadding}`}>
      <div className={classes.pricingSection}>
        <h2 className={classes.pricingSection__mainTitle}>
          <span>Usługi Detailingowe</span>
        </h2>

        <div className={classes.categoryGroup}>
          <h2 className={classes.categoryLabel}>
            <FaCar /> Usługi Zewnętrzne
          </h2>
          <div className={classes.pricingFlex}>
            {exteriorServices.map((svc) => (
              <PriceCard key={svc.id} svc={svc} />
            ))}
          </div>
        </div>

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
