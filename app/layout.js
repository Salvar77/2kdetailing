import { Kanit } from "next/font/google";
import "./globals.scss";
import LayoutClient from "../components/More/LayoutClient";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-kanit",
});

export const metadata = {
  metadataBase: new URL("https://www.2kdetailing.opole.pl"),
  title: {
    default: "2K Auto Detailing Opole - Profesjonalny Auto Detailing",
    template: "%s | 2K Auto Detailing Opole",
  },
  description:
    "2K Auto Detailing Opole: korekta lakieru, powłoka ceramiczna i elastomerowa, folia PPF, detailing wnętrza. Profesjonalne studio kosmetyki samochodowej.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "2K Auto Detailing Opole",
    title: "2K Auto Detailing Opole - Profesjonalny Auto Detailing",
    description: "Kompleksowe usługi auto detailingu w Opolu",
    images: [
      {
        url: "/og/logo-2kdetailing-opole.png",
        width: 1200,
        height: 630,
        alt: "2K Auto Detailing Opole - logo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.2kdetailing.opole.pl/#website",
  url: "https://www.2kdetailing.opole.pl",
  name: "2K Auto Detailing Opole",
  description:
    "Profesjonalny auto detailing, korekta lakieru i ochrona PPF w Opolu.",
  publisher: { "@id": "https://www.2kdetailing.opole.pl/#business" },
  inLanguage: "pl-PL",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "@id": "https://www.2kdetailing.opole.pl/#business",
  name: "2K Auto Detailing Opole",
  alternateName: "2K Detailing",
  url: "https://www.2kdetailing.opole.pl",
  logo: "https://www.2kdetailing.opole.pl/og/logo-2kdetailing-opole.png",
  image: "https://www.2kdetailing.opole.pl/og/logo-2kdetailing-opole.png",
  description:
    "Profesjonalny auto detailing w Opolu. W ofercie m.in. korekta lakieru, powłoka ceramiczna i elastomerowa, folia PPF, renowacja skór, pranie tapicerki, przyciemnianie szyb oraz regeneracja reflektorów. Zadbamy o Twoje auto kompleksowo.",
  telephone: "+48797234734",
  email: "2kdetailingopole@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Prószkowska 43",
    addressLocality: "Opole",
    postalCode: "45-758",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.672357,
    longitude: 17.985561,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "zł zł",
  currenciesAccepted: "PLN",
  paymentAccepted: "Gotówka, Przelew bankowy, BLIK",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Opole i okolice",
  },
  hasMap: "https://maps.google.com/?q=Prószkowska+43,+45-758+Opole",
  sameAs: [
    "https://www.facebook.com/people/2K-Auto-Detailing-Opole/61587187552980/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={kanit.variable}>
      <body>
        <script
          type="application/ld+json"
          id="business-schema"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          id="website-schema"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
