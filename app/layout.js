import "./globals.scss";

export const metadata = {
  metadataBase: new URL("https://www.2kdetailing.opole.pl"),
  title: {
    default: "2K Auto Detailing Opole - Profesjonalny Auto Detailing",
    template: "%s | 2K Auto Detailing Opole",
  },
  description:
    "2K Auto Detailing Opole: korekta lakieru, folia PPF, powłoki ceramiczne. Doświadczeni specjaliści z Opola.",
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
        url: "/2k-detailing-og-image.png",
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
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
