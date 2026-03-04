import Pricelist from "../../components/Main/PriceList";
import Contact from "../../components/Main/Contact";
import classes from "./Cennik.module.scss";

export const metadata = {
  title: "Cennik Usług Auto Detailingu",
  description:
    "Sprawdź aktualne ceny korekty lakieru, powłok ceramicznych, folii PPF, prania tapicerki i pozostałych usług detailingu w 2K Auto Detailing Opole.",
  alternates: { canonical: "/cennik" },
  openGraph: {
    url: "/cennik",
    title: "Cennik Usług Auto Detailingu",
    description:
      "Poznaj szczegółowy cennik naszych usług: korekta lakieru, powłoka ceramiczna, folia PPF i więcej.",
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
