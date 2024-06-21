import React from "react";

import Link from "next/link";

import ArrowUpRightSvg from "@/public/SVG/ArrowUpRightSvg";

export const metadata = {
  title: "YYY",
  description: "YYY",
  keywords: ["YYY", "YYY"],
  openGraph: {
    title: "YYY",
    description: "YYY",
    url: "YYY",
    locale: "ro_RO",
    type: "website",
  },
};

const CeContineCv = () => {
  return (
    <article>
      <h1>Ce trebuie sa contina un CV?</h1>
      <time dateTime="20.06.2024">Publicat pe 20.06.2024</time>
      <p className="introduction">
        Dacă vrei să afli ce trebuie să conțină un CV și care este cel mai bun format CV, pentru un model de CV completat corect, trebuie să incluzi
        informațiile profesionale relevante pentru jobul la care aplici. Iată principalele secțiuni care ar trebui actualizate în procesul de
        completare CV online gratis:
      </p>
      <h2>Elemente esențiale pentru un CV de succes</h2>
      <h3>Sumar:</h3>
      <p>
        O scurtă prezentare a candidatului, incluzând informații despre carieră, obiective și puncte forte. Această secțiune ar trebui să conțină 2-3
        fraze.
      </p>
      <p>
        Exemplu: <br />
        "Profesionist cu o experiență solidă în gestionarea proiectelor IT, concentrat pe rezolvarea eficientă a problemelor și atingerea obiectivelor
        stabilite."
      </p>
      <h3>Educație:</h3>
      <p>
        Detalii despre instituțiile de învățământ și specializările absolvite, diplomele obținute, datele de absolvire și alte calificări adiționale.
      </p>
      <p>
        Exemplu: <br />
        "Universitatea Politehnica București, Facultatea de Automatică și Calculatoare, Inginerie Software, Absolvită în iunie 2021."
      </p>
      <h3>Experiență profesională:</h3>
      <p>
        O listă a experienței profesionale anterioare, începând cu cea mai recentă. Menționează numele companiilor, perioadele de angajare, pozițiile
        ocupate și principalele responsabilități.
      </p>{" "}
      <p>
        Exemplu: <br />
        - "XYZ Company, București, Developer Software, mai 2021 - prezent. Responsabil pentru dezvoltarea și implementarea soluțiilor software conform
        specificațiilor clientului."
        <br />- "ABC Corporation, Cluj-Napoca, Internship IT, iulie 2020 - decembrie 2020. Asistat echipa de dezvoltare în testarea și documentarea
        aplicațiilor."
      </p>
      <h3>Abilități:</h3>
      <p>
        Include o listă de abilități și competențe relevante pentru postul dorit. Acestea pot fi tehnice, de comunicare, organizare sau management.
      </p>{" "}
      <p>
        Exemplu: <br />
        "Abilități tehnice în Python, Java și SQL, precum și abilități excelente de comunicare și organizare demonstrabile prin coordonarea eficientă
        a proiectelor de echipă."
      </p>
      <h3>Realizări și proiecte:</h3>
      <p>Secțiunea cuprinde exemple concrete de realizări și proiecte anterioare care demonstrează abilitățile și experiențele menționate.</p>{" "}
      <p>
        Exemplu: <br />
        "Coordonarea și implementarea cu succes a unui proiect de optimizare a bazelor de date, reducând timpul de răspuns cu 20% într-o companie de
        telecomunicații."
      </p>
      <h3>Limbi străine:</h3>
      <p>Menționează limbile străine cunoscute și nivelul de competență.</p>{" "}
      <p>
        Exemplu: <br /> "Engleză - avansat, certificat Cambridge CAE."
      </p>
      <h3>Interese și activități extracurriculare</h3>
      <p>Informații despre interesele și activitățile extracurriculare, care pot demonstra faptul că ești potrivit pentru jobul dorit.</p>{" "}
      <p>
        Exemplu: <br />
        "Voluntariat în organizarea conferințelor IT locale; pasionat de cercetarea înovării tehnologice în roboți autonomi."
      </p>
      <h3>Informații de contact:</h3>
      <p>
        Include adresa, numărul de telefon, adresa de e-mail și alte detalii relevante pentru a permite angajatorului să ia legătura cu tine pentru un
        interviu.
      </p>{" "}
      <p>
        Exemplu: <br /> "Telefon: +40721234567; Email: nume.prenume@email.com; LinkedIn: linkedin.com/in/numeprenume."
      </p>
      <p>
        Nu uita că este important ca informațiile din CV să fie prezentate într-un mod organizat, clar și concis, pentru ca angajatorul să poată citi
        și înțelege ușor datele furnizate.
      </p>
      <Link href="/blog/ce-este-un-cv" className="simple-link">
        Vezi ce este un CV <ArrowUpRightSvg color="#a89bff" size="15" />
      </Link>
      <Link href="/completare-cv" className="btn-primary">
        Completeaza CV <ArrowUpRightSvg color="#f5f5f5" size="15" />
      </Link>
    </article>
  );
};

export default CeContineCv;
