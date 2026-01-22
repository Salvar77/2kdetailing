import Hero from "../components/Main/Hero";

export const metadata = {
  title: "2K Detailing Opole – korekta lakieru, folia PPF, powłoka ceramiczna",
  description:
    "2K Detailing specjalizuje się w kompleksowym autodetailingu: korekta lakieru, folia PPF, powłoki ceramiczne i pranie tapicerki w Opolu.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
