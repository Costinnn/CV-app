import React from "react";

import Link from "next/link";

import ArrowUpRightSvg from "@/public/SVG/ArrowUpRightSvg";


const CumScriiCv = () => {
  return (
    <article>
      <h1>Cum scrii un CV?</h1>

      <time dateTime="15.06.2024">Publicat pe 15.06.2024</time>

      <p className="introduction">
        Pentru a răspunde la întrebările “Cum să scrii un CV sau Curriculum Vitae?”, sau “Ce trebuie să scrii în CV?” trebuie mai întâi să înțelegem
        că CV-ul reprezintă un rezumat al experienței, educației și abilităților unei persoane folosit la aplicarea unui loc de muncă. <br />
        <br /> Astfel, ca să răspundem la întrebarea: Cum trebuie să scrii un CV?, acesta trebuie să conțină următoarele elemente:
      </p>

      <ol className="links">
        <li>
          <Link href="#contact">
            1. Informații de contact <ArrowUpRightSvg size="15" color="#5c45fd" />
          </Link>
        </li>
        <li>
          <Link href="#descriere-profesionala">
            2. O descriere profesională <ArrowUpRightSvg size="15" color="#5c45fd" />
          </Link>
        </li>
        <li>
          <Link href="#educatie">
            3. Educație <ArrowUpRightSvg size="15" color="#5c45fd" />
          </Link>
        </li>
        <li>
          <Link href="#experienta-profesionala">
            4. Experiență profesională <ArrowUpRightSvg size="15" color="#5c45fd" />
          </Link>
        </li>
        <li>
          <Link href="#abilitati-competente">
            5. Abilități și competențe <ArrowUpRightSvg size="15" color="#5c45fd" />
          </Link>
        </li>
        <li>
          <Link href="#realizari-profesionale">
            6. Realizări profesionale <ArrowUpRightSvg size="15" color="#5c45fd" />
          </Link>
        </li>
        <li>
          <Link href="#sectiuni-aditionale">
            7. Secțiuni adiționale <ArrowUpRightSvg size="15" color="#5c45fd" />
          </Link>
        </li>
      </ol>

      <p>
        Un CV ideal în 2024 trebuie să fie o prezentare scurtă și concisă despre tine, din punct de vedere profesional. Un CV perfect trebuie să fie
        optimizat pentru fiecare loc de muncă în parte, să includă cuvinte cheie regăsite în anunțul locului de muncă și să conțină următoarele
        elemente:
      </p>

      <h2 id="contact">1. Informații de contact:</h2>
      <p>
        Adaugă numele complet, numărul de telefon și adresa de email pentru ca angajatorul să poată lua ușor legătura cu tine, iar opțional și locația
        (orașul și țara)
      </p>

      <h2 id="descriere-profesionala">2. O scurtă descriere profesională:</h2>
      <p>Un paragraf sau două care să prezinte pe scurt cine ești și care să evidențieze obiectivele tale profesionale.</p>

      <h2 id="educatie">3. Educație:</h2>
      <p>Evidențiază sumar instituțiile de învățământ pe care le-ai absolvit, precum și specializarea sau calificarea obținută</p>

      <h2 id="experienta-profesionala">4. Experiență profesională:</h2>
      <p>
        Prezintă experiența profesională anterioară, postul pe care l-ai ocupat, care a fost rolul tău în companie și ce responsabilități ai avut.
      </p>

      <h2 id="abilitati-competente">5. Abilități/Competențe:</h2>
      <p>
        Enumeră abilitățile cheie și relevante pentru postul la care aplici. Aceste abilități le poți găsi chiar în descrierea anunțului de angajare.
      </p>
      <h2 id="realizari-profesionale">6. Realizări profesionale:</h2>
      <p>
        Scoate în evidență realizările din cariera ta care te-ar diferenția de ceilalți candidați. Poți opta pentru proiecte de succes, premii sau
        obiective pe care le-ai atins.
      </p>

      <h2 id="sectiuni-aditionale">7. Secțiuni adiționale: </h2>
      <p>
        Pe lângă experiența profesională sau stadiile educaționale, alte secțiuni suplimentare precum certificări, premii sau voluntariat pot
        contribui la îmbunătățirea unui CV.
      </p>

      <Link href="/blog/ce-trebuie-sa-contina-un-cv" className="simple-link">
        Vezi exemple pentru fiecare secțiune <ArrowUpRightSvg color="#a89bff" size="15" />
      </Link>

      <Link href="/completare-cv" className="btn-primary">
        Completează CV <ArrowUpRightSvg color="#f5f5f5" size="15" />
      </Link>
    </article>
  );
};

export default CumScriiCv;
