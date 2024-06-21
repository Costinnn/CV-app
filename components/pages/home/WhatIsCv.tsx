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
          CV-ul este un document de prezentare a competențelor profesionale, abilităților, calificărilor, precum și a experienței acumulate. Un CV
          bine redactat și structurat poate face diferența între a fi chemat la un interviu și a fi ignorat de angajatori. Este important să fie clar,
          concis și relevant pentru jobul la care aplici.
        </p>

        <h2>Ce trebuie să contină un CV?</h2>

        <div className="boxes">
          <div className="box">
            <Image src={personalImg} alt="informatii personale in CV" width={70} height={70} />
            <h3>Informații personale</h3>
            <p>Asigura-te ca incluzi numele complet, datele de contact (numar de telefon, adresă de email) și, optional, adresa domiciliului.</p>
          </div>

          <div className="box">
            <Image src={educationImg} alt="educatie in CV" width={70} height={70} />
            <h3>Studii</h3>
            <p>
              Menționeaza cele mai relevante studii, începe cu cea mai recenta și include datele de început și finalizare, instituția și eventuale
              specializări sau realizări notabile.
            </p>
          </div>

          <div className="box">
            <Image src={experienceImg} alt="educatie in CV" width={70} height={70} />
            <h3>Experiența profesională</h3>
            <p>
              Detaliaza-ți experiența profesională, începand cu cel mai recent loc de munca. Include numele companiei, perioada de angajare, poziția
              ocupată și responsabilitățile tale principale.
            </p>
          </div>

          <div className="box">
            <Image src={competenciesImg} alt="educatie in CV" width={70} height={70} />
            <h3>Competențe</h3>
            <p>Listează abilitățile relevante pentru jobul dorit, cum ar fi competențe tehnice, lingvistice sau de gestionare a proiectelor.</p>
          </div>

          <div className="box">
            <Image src={certificationImg} alt="educatie in CV" width={70} height={70} />
            <h3>Cursuri și certificări</h3>
            <p>Dacă ai urmat cursuri suplimentare sau ai obținut certificări relevante, menționeaza-le.</p>
          </div>

          <div className="box">
            <Image src={projectsImg} alt="educatie in CV" width={70} height={70} />
            <h3>Proiecte personale</h3>
            <p>Dacă ai lucrat la proiecte importante sau ai realizat obiective notabile, detaliaza-le.</p>
          </div>
        </div>
      </div>
      <BottomWave />
    </section>
  );
};

export default WhatIsCv;
