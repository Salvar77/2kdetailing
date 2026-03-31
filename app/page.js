import Hero from "../components/Main/Hero";
import Services from "../components/Main/Services";
import SliderSection from "../components/SliderSection/SliderSection";
import Pricelist from "../components/Main/PriceList";
import AboutUs from "../components/Main/AboutUs";
import Blog from "../components/Main/Blog";
import Contact from "../components/Main/Contact";
import ElfsightLazyWrapper from "../components/More/ElfsightLazyWrapper";

export const metadata = {
  title:
    "2K Auto Detailing Opole – Korekta lakieru – Powłoka ceramiczna",
  description:
    "2K Auto Detailing specjalizuje się w kompleksowym auto detailingu: Korekta lakieru, Powłoka ceramiczna i Folia PPF w Opolu.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona Główna",
        item: "https://www.2kdetailing.opole.pl/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Hero />
      <AboutUs />
      <Services />
      <SliderSection />
      <Pricelist />
      <Blog showReadMoreLink={true} />
      <ElfsightLazyWrapper />
      <Contact />
    </>
  );
}
