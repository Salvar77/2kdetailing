import ElfsightLazyWrapper from "../../components/More/ElfsightLazyWrapper";
import classes from "./page.module.scss";

export const metadata = {
  title: "Opinie i Recenzje Klientów",
  description:
    "Sprawdź recenzje i oceny klientów 2K Auto Detailing w Opolu. Zobacz, dlaczego warto powierzyć nam swoje auto.",
  alternates: { canonical: "/recenzje" },
  openGraph: {
    url: "/recenzje",
    title: "Opinie i Recenzje Klientów",
    description:
      "Autentyczne opinie kierowców korzystających z usług auto detailingu, korekty lakieru i aplikacji folii PPF w 2K Auto Detailing.",
    images: [
      {
        url: "/og/logo-2kdetailing-opole.png",
        width: 1200,
        height: 630,
        alt: "Opinie klientów 2K Auto Detailing - Pranie tapicerki - Korekta lakieru",
      },
    ],
  },
};

export default function RecenzjePage() {
  return (
    <main className={classes.recenzje}>
      <h1>Recenzje</h1>
      <ElfsightLazyWrapper />
    </main>
  );
}
