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

const CeEsteCv = () => {
  return (
    <article>
      <h1>
        Ce este un CV <br /> (Curriculum vitae)?
      </h1>

      <time dateTime="25.06.2024">Publicat pe 25.06.2024</time>

      <p className="introduction">
        Un CV (lat. Curriculum Vitae, engl. resume) reprezintă documentul cu care aplici prima oară la un loc de muncă. Acest document reprezintă un
        rezumat al experienței și al pregătirii tale profesionale cu ajutorul căruia angajatorul ia decizia dacă ești o alegere bună pentru locul de
        muncă disponibil. Astfel, recomandarea noastră este ca pentru fiecare loc de muncă la care aplicați să ajustați CV-ul și informațiile regăsite
        în acesta folosind cuvinte cheie din anunțul postat de angajator.
      </p>

      <p className="introduction">
        Făcând acest lucru, șansele de obținere a unui interviu vor fi cu mult mai mari decât dacă folosiți același CV pentru toate locurile de muncă
        la care aplicați, deoarece angajatorii selectează candidații în primul rând pe baza CV-urilor primite pentru job. Astfel, aceasta este prima
        voastră șansă de a atrage atenția angajatorului și de a-l face să vă angajeze tocmai pe dvs. Ca să fiți recunoscut ca un candidat serios, nu
        este suficient să aveți numai calificările căutate, ci să le prezentați în cea mai bună lumină posibilă cuiva care nu vă cunoaște deloc.
      </p>

      <h2>Elemente esențiale pentru un CV de succes.</h2>

      <h3>1. Formatare corecta</h3>
      <p>
        Când întocmiți un CV, asigurați-vă că este bine formatat. Cercetările arată că angajatorii petrec doar 20-30 de secunde citind CV-uri, așa că
        o formatare bună face CV-ul mai transparent și ușor de parcurs.
      </p>

      <h3>3. Evidențiați-vă punctele forte</h3>
      <p>Folosiți cuvinte active precum „am creat”, „am condus”, „am analizat” pentru a vă prezenta ca un angajat proactiv.</p>

      <h3>4. Evitați frazele generale:</h3>
      <p>
        Termeni vagi precum „jucător de echipă” sau „angajat harnic” sunt mai puțin impresionați decât exemple concrete ale abilităților și
        realizărilor voastre.
      </p>

      <h3>5. Fiți sinceri și exacți:</h3>
      <p>Nu introduceți date eronate. Informațiile personale trebuie să fie corecte și să vă prezinte într-o lumină cât mai bună.</p>

      <h3>6. Experiența de muncă în ordine cronologică inversă:</h3>
      <p>Începeți cu ultima poziție ocupată pentru ca angajatorii să vadă imediat cea mai recentă experiență și realizările asociate.</p>

      <h3>7. Fotografie profesională (opțional):</h3>
      <p>Poza atașată trebuie să fie adecvată mediului de afaceri. Folosiți o adresă de email serioasă care să reflecte profesionalismul vostru.</p>

      <h3>8. Concis și clar:</h3>
      <p>
        Nu aglomerați CV-ul. Propozițiile trebuie să fie scurte și clare. Fiecare propoziție ar trebui să răspundă unei întrebări potențiale a
        angajatorului. Folosiți enumerări pentru claritate.
      </p>

      <h3>9. Relevanță pentru jobul dorit:</h3>
      <p>
        Asigurați-vă că toate caracteristicile și abilitățile menționate sunt relevante pentru poziția la care aplicați. Nu pierdeți timpul cu
        informații inutile.
      </p>

      <h3>10. Lungimea CV-ului:</h3>
      <p>CV-ul standard ar trebui să fie de o pagină sau două. Pentru poziții specializate (medici, profesori etc.), CV-ul poate fi mai lung.</p>

      <h3>11. Aspect fizic al CV-ului:</h3>
      <p>Dacă trimiteți CV-ul în formă tipărită, asigurați-vă că arată impecabil: nu îl îndoiți sau șifonați.</p>

      <Link href="/blog/cum-sa-scrii-un-cv" className="simple-link">
        Vezi cum să scrii un CV <ArrowUpRightSvg color="#a89bff" size="15" />
      </Link>

      <Link href="/completare-cv" className="btn-primary">
        Completeaza CV <ArrowUpRightSvg color="#f5f5f5" size="15" />
      </Link>
    </article>
  );
};

export default CeEsteCv;
