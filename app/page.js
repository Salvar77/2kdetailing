import Hero from "../components/Main/Hero";

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
    </main>
  );
}
