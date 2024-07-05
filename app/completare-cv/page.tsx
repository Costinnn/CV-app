import React, { Suspense } from "react";

import BottomWave2 from "@/public/SVG/BottomWave2";
import FillForm_Preview from "@/components/pages/completare-cv/FillForm_Preview";

import "./style.css";

export const metadata = {
  title: "Completeaza CV online gratis",
  description:
    "Învață cum să completezi un CV profesional pe CV-gratis.ro! Urmează ghidul nostru detaliat pentru a completa toate secțiunile unui CV modern și atractiv. Descoperă sfaturi și exemple utile pentru a-ți îmbunătăți șansele de angajare. Începe acum!",
  keywords: [
    "completare CV",
    "cum să completezi un CV",
    "sfaturi completare CV",
    "exemplu completare CV",
    "completare CV online",
    "ghid completare CV",
    "informații CV",
    "detalii CV",
    "completare secțiuni CV",
    "cum să scrii un CV",
    "sfaturi pentru CV",
    "exemple de completare CV",
    "completare CV profesional",
    "completare CV modern",
    "creare CV complet",
    "instrucțiuni CV",
    "completare CV simplu",
    "completare CV eficient",
    "ajutor completare CV",
    "resurse completare CV",
  ],
  openGraph: {
    title: "Completeaza CV online gratis | CV-gratis",
    description:
      "Explorează o colecție vastă de template-uri de CV gratuite pe CV-gratis.ro! Alege dintre modele profesionale și moderne pentru a-ți crea un CV atractiv și personalizat. ",
    url: "https://cv-gratis.ro",

    locale: "ro_RO",
    type: "website",
  },
};

const page = () => {
  return (
    <main className="cv-fill section-wide">
      <h1>Completeaza CV online</h1>
      <BottomWave2 />

      <Suspense>
        <FillForm_Preview />
      </Suspense>
    </main>
  );
};

export default page;
