import React from "react";

import TopWave from "@/public/SVG/TopWave";
import BottomWave from "@/public/SVG/BottomWave";

import certificationImg from "@/public/images/certification.png";
import competenciesImg from "@/public/images/competencies.png";
import educationImg from "@/public/images/education.png";
import personalImg from "@/public/images/personal.png";
import experienceImg from "@/public/images/experience.png";
import projectsImg from "@/public/images/projects.png";

import "./WhatIsCv.css";
import Image from "next/image";

const WhatIsCv = () => {
  return (
    <section className="what-is-cv section-wide">
      <TopWave />
      <div className="content">
        <h2>Ce este un CV?</h2>
        <p>
          CV-ul este un document de prezentare a competentelor profesionale, abilitatilor, calificarilor, precum si a experientei acumulate. Un CV
          bine redactat si structurat poate face diferenta intre a fi chemat la un interviu si a fi ignorat de angajatori. Este important sa fie clar,
          concis si relevant pentru jobul la care aplici.
        </p>

        <h2>Ce trebuie sa contina un CV?</h2>

        <div className="boxes">
          <div className="box">
            <Image src={personalImg} alt="informatii personale in CV" width={70} height={70} />
            <h3>Informatii personale</h3>
            <p>Asigura-te ca incluzi numele complet, datele de contact (numar de telefon, adresa de email) si, optional, adresa domiciliului.</p>
          </div>

          <div className="box">
            <Image src={educationImg} alt="educatie in CV" width={70} height={70} />
            <h3>Studii</h3>
            <p>
              Mentioneaza cele mai relevante studii, incepe cu cea mai recenta si include datele de inceput si finalizare, institutia si eventuale
              specializari sau realizari notabile.
            </p>
          </div>

          <div className="box">
            <Image src={experienceImg} alt="educatie in CV" width={70} height={70} />
            <h3>Experienta profesionala</h3>
            <p>
              Detaliaza-ti experienta profesionala, incepand cu cel mai recent loc de munca. Include numele companiei, perioada de angajare, pozitia
              ocupata si responsabilitatile tale principale.
            </p>
          </div>

          <div className="box">
            <Image src={competenciesImg} alt="educatie in CV" width={70} height={70} />
            <h3>Competente</h3>
            <p>Listeaza abilitatile relevante pentru jobul dorit, cum ar fi competente tehnice, lingvistice sau de gestionare a proiectelor.</p>
          </div>

          <div className="box">
            <Image src={certificationImg} alt="educatie in CV" width={70} height={70} />
            <h3>Cursuri si certificari</h3>
            <p>Daca ai urmat cursuri suplimentare sau ai obtinut certificari relevante, mentioneaza-le.</p>
          </div>

          <div className="box">
            <Image src={projectsImg} alt="educatie in CV" width={70} height={70} />
            <h3>Proiecte personale</h3>
            <p>Daca ai lucrat la proiecte importante sau ai realizat obiective notabile, detaliaza-le.</p>
          </div>
        </div>
      </div>
      <BottomWave />
    </section>
  );
};

export default WhatIsCv;
