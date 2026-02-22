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
    "2K Auto Detailing Opole: korekta lakieru, powłoki ceramiczne, folia PPF. Doświadczeni specjaliści z Opola.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={kanit.variable}>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
