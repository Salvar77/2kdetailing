import Hero from "../components/Main/Hero";
import Services from "../components/Main/Services";
import SliderSection from "@/components/SliderSection/SliderSection";
import Pricelist from "@/components/Main/PriceList";
import AboutMe from "@/components/Main/AboutMe";
import Blog from "@/components/Main/Blog";
import Contact from "@/components/Main/Contact";

export const metadata = {
  title:
    "2K Auto Detailing Opole – korekta lakieru, folia PPF, powłoka ceramiczna",
  description:
    "2K Auto Detailing specjalizuje się w kompleksowym autodetailingu:  korekta lakieru, folia PPF i powłoki ceramiczne  w Opolu.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <SliderSection />
      <Pricelist />
      <AboutMe />
      <Blog showReadMoreLink={true} />
      <Contact />
    </main>
  );
}
