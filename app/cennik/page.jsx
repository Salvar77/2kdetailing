import Pricelist from "../../components/Main/PriceList";
import Contact from "../../components/Main/Contact";
import classes from "./Cennik.module.scss";

export const metadata = {
  title: "Cennik Usług Auto Detailingu",
  description:
    "Sprawdź aktualne ceny w 2K Auto Detailing Opole. W ofercie m.in. korekta lakieru, powłoka ceramiczna i elastomerowa, folia PPF oraz pranie tapicerki.",
  alternates: { canonical: "/cennik" },
  openGraph: {
    url: "/cennik",
    title: "Cennik Usług Auto Detailingu",
    description:
      "Poznaj szczegółowy cennik naszych usług: korekta lakieru, powłoka ceramiczna i elastomerowa, folia PPF oraz pozostałe pakiety odnowy.",
    images: [
      {
        url: "/og/logo-2kdetailing-opole.png",
        width: 1200,
        height: 630,
        alt: "Cennik usług 2K Auto Detailing Opole",
      },
    ],
  },
};

export default function CennikPage() {
  return (
    <main>
      <h1 className={classes.cennik}>Cennik</h1>
      <Pricelist />
      <Contact />
    </main>
  );
}
