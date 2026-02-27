import Link from "next/link";
import React from "react";

export const metadata = {
  title: "404 - Nie odnaleziono strony | 2K Auto Detailing Opole",
};

export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#171a21",
        color: "#fcfcfc",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "10rem", margin: 0, color: "#e31e24" }}>404</h1>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Ups! Coś poszło nie tak.
      </h2>
      <p
        style={{
          fontSize: "1.6rem",
          marginBottom: "40px",
          maxWidth: "500px",
          color: "#d1d2d0",
        }}
      >
        Strona, której szukasz, mogła zostać usunięta, zmieniła nazwę lub jest
        tymczasowo niedostępna.
      </p>
      <Link
        href="/"
        style={{
          padding: "15px 30px",
          backgroundColor: "#e31e24",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "1.6rem",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
        }}
      >
        Wróć do strony głównej
      </Link>
    </div>
  );
}
