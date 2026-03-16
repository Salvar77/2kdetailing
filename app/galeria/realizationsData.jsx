import korekta1 from "../../assets/images/wlasciciel-2k-auto-detailing-korekta-lakieru-opole.webp";
import korekta2 from "../../assets/images/wlasciciel-2k-auto-detailing-korekta-lakieru-2-opole.webp";
import korekta3 from "../../assets/images/wlasciciel-2k-auto-detailing-korekta-lakieru-3-opole.webp";
import ppf1 from "../../assets/images/wlasciciel-2k-auto-detailing-folia-ppf-opole.webp";
// import wnetrze1 from "../../assets/images/wlasciciel-2k-auto-detailing-detailing-wnetrza-opole.webp";
import skory1 from "../../assets/images/wlasciciel-2k-auto-detailing-renowacja-skor-opole.webp";
import szyby1 from "../../assets/images/wlasciciel-2k-auto-detailing-przyciemnianie-szyb-opole.webp";
import szyby2 from "../../assets/images/wlasciciel-2k-auto-detailing-przyciemnianie-szyb-2-opole.webp";

const placeholderImage = "/2k-logo-black-biale-tlo.png";

export const realizationsData = [
  {
    id: "korekta-lakieru",
    description: "Korekta lakieru",
    images: [korekta1, korekta2, korekta3],
    image: korekta1,
    largeImage: korekta1,
    largeImageWidth: 1920,
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    customClass: "korektaLakieru",
    mobileClass: "korektaLakieruMobile",
  },
  {
    id: "powloka-ceramiczna",
    description: "Powłoka ceramiczna",
    images: [placeholderImage],
    image: placeholderImage,
    largeImage: placeholderImage,
    largeImageWidth: 1920,
    gradient: "linear-gradient(rgba(38, 32, 32, 0.5), rgba(40, 31, 31, 0.5))",
    customClass: "powlokaCeramiczna",
    mobileClass: "powlokaCeramicznaMobile",
  },
  {
    id: "folia-ppf",
    description: "Folia PPF",
    images: [ppf1],
    image: ppf1,
    largeImage: ppf1,
    largeImageWidth: 1920,
    gradient: "linear-gradient(rgba(38, 32, 32, 0.5), rgba(40, 31, 31, 0.5))",
    customClass: "foliaPPF",
    mobileClass: "foliaPPFMobile",
  },
  {
    id: "pranie-tapicerki",
    description: "Pranie tapicerki",
    images: [placeholderImage],
    image: placeholderImage,
    largeImage: placeholderImage,
    largeImageWidth: 1920,
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    customClass: "pranieTapicerki",
    mobileClass: "pranieTapicerkiMobile",
  },
  {
    id: "renowacja-skor",
    description: "Renowacja skór",
    images: [skory1],
    image: skory1,
    largeImage: skory1,
    largeImageWidth: 1920,
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    customClass: "renowacjaSkor",
    mobileClass: "renowacjaSkorMobile",
  },
  {
    id: "regeneracja-reflektorow",
    description: "Regeneracja reflektorów",
    images: [placeholderImage],
    image: placeholderImage,
    largeImage: placeholderImage,
    largeImageWidth: 1920,
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    customClass: "regeneracjaReflektorow",
    mobileClass: "regeneracjaReflektorowMobile",
  },
  {
    id: "przyciemnianie-szyb",
    description: "Przyciemnianie szyb",
    images: [szyby1, szyby2],
    image: szyby1,
    largeImage: szyby1,
    largeImageWidth: 1920,
    gradient: "linear-gradient(rgba(63, 59, 59, 0.5), rgba(40, 31, 31, 0.5))",
    customClass: "przyciemnianieSzyb",
    mobileClass: "przyciemnianieSzybMobile",
  },
];
