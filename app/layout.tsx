import { Poppins } from "next/font/google";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-no1",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://cv-gratis.ro"),
  title: { default: "CV-gratis", template: "%s | CV-gratis" },
  description:
    "Descoperă template-uri de CV gratuite și profesionale pe CV-gratis.ro! Creează-ți rapid un CV atractiv și personalizat pentru a impresiona angajatorii. Explorează o colecție vastă de template-uri creative și moderne de CV online gratuite. Începe acum!",
  keywords: [
    "template-uri de CV gratuite",
    "modele de CV online",
    "CV profesional",
    "CV modern",
    "CV online gratuit",
    "CV personalizat",
    "șabloane de CV gratis",
    "exemple de CV",
    "creare CV online",
    "format CV",
    "descărcare gratuită CV",
    "CV simplu și eficient",
    "resurse pentru CV",
    "îmbunătățire CV",
    "CV rapid și ușor",
    "ghid pentru CV",
    "CV pentru angajare",
    "structura CV-ului",
  ],
  creator: "Costin C.",
  openGraph: {
    title: "Creează CV online gratis | CV-gratis",
    description:
      "Explorează o colecție vastă de template-uri de CV gratuite pe CV-gratis.ro! Alege dintre modele profesionale și moderne pentru a-ți crea un CV atractiv și personalizat. ",
    url: "https://cv-gratis.ro",

    locale: "ro_RO",
    type: "website",
  },
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`rootlayout ${poppins.variable} `}>
        <Navigation />
        <h1>test</h1>
        {children}
        <Footer />
      </body>
    </html>
  );
}
