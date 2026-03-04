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
    "2K Auto Detailing Opole – korekta lakieru, powłoka ceramiczna, folia PPF",
  description:
    "2K Auto Detailing specjalizuje się w kompleksowym autodetailingu: korekta lakieru, powłoka ceramiczna i folia PPF w Opolu.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
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
