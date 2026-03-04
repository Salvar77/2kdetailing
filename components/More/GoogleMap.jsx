import React from "react";
import classes from "./GoogleMap.module.scss";

const GoogleMap = () => {
  return (
    <div className={classes.mapWrapper}>
      <iframe
        title="Mapa lokalizacji 2K Auto Detailing Opole - Korekta lakieru - Powłoka ceramiczna - Folia PPF"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.133232823986!2d17.901420176839167!3d50.66178677212437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710538ccef70871%3A0xf1d770ae358f19fe!2s2K%20Auto%20Detailing%20Opole%20-%20Korekta%20lakieru%20-%20Pow%C5%82oka%20ceramiczna!5e0!3m2!1spl!2spl!4v1772466759582!5m2!1spl!2spl"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
