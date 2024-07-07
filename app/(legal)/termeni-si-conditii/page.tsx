import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="legal-page">
      <h1>Termeni și condiții</h1>

      <div className="content">
        <h2>1. Introducere</h2>
        <p>
          Acești Termeni și Condiții ("Termeni") reglementează utilizarea website-ului nostru CV-gratis.ro și a serviciilor oferite prin intermediul
          acestuia. Prin accesarea și utilizarea Site-ului, acceptați și sunteți de acord să respectați acești Termeni în totalitate. Dacă nu sunteți
          de acord cu oricare dintre acești Termeni, vă rugăm să nu utilizați Site-ul.
        </p>

        <h2>2. Serviciile Noastre</h2>
        <p>
          Site-ul nostru oferă utilizatorilor acces la o varietate de template-uri de CV-uri . Utilizatorii pot descărca, completa și personaliza
          aceste template-uri pentru uz personal sau profesional.
        </p>

        <h2>3. Eligibilitate</h2>
        <p>
          Pentru a utiliza Site-ul, trebuie să aveți cel puțin 18 ani sau vârsta legală pentru a încheia un contract obligatoriu în jurisdicția
          dumneavoastră. Prin utilizarea Site-ului, declarați și garantați că aveți dreptul, autoritatea și capacitatea de a respecta acești Termeni.
        </p>

        <h2>4. Conturi de Utilizator</h2>
        <p>
          Pentru a accesa anumite funcții ale Site-ului, este posibil să fie necesar să vă creați un cont. Sunteți responsabil pentru păstrarea
          confidențialității informațiilor contului dumneavoastră și pentru toate activitățile care au loc sub contul dumneavoastră.
        </p>

        <h2>5. Proprietate Intelectuală</h2>
        <p>
          Toate drepturile de proprietate intelectuală asupra template-urilor și a altor materiale furnizate pe Site aparțin CV-gratis.ro sau
          licențiatorilor noștri. Nu aveți dreptul să copiați, distribuiți, modificați sau creați lucrări derivate din orice material de pe Site fără
          permisiunea prealabilă scrisă a deținătorilor drepturilor.
        </p>

        <h2>6. Utilizare Acceptabilă</h2>
        <p>
          Sunteți de acord să utilizați Site-ul doar în scopuri legale și în conformitate cu acești Termeni. Sunteți de acord să nu utilizați Site-ul
          pentru:
        </p>
        <ul>
          <li>A descărca, posta, transmite sau altfel distribui conținut care încalcă orice lege sau drepturile altor persoane;</li>
          <li>A folosi orice metodă de colectare automată a datelor (scraping, crawling) fără permisiunea noastră;</li>
          <li>
            A încerca să obțineți acces neautorizat la Site, la serverele pe care este găzduit Site-ul sau la orice server, computer sau bază de date
            conectată la Site.
          </li>
        </ul>

        <h2>7. Limitarea Răspunderii</h2>
        <p>
          CV-gratis.ro nu va fi responsabil pentru niciun fel de daune directe, indirecte, accidentale, speciale sau punitive care rezultă din
          utilizarea sau incapacitatea de a utiliza Site-ul sau Serviciile.
        </p>

        <h2>8. Modificări ale Termenilor</h2>
        <p>
          Ne rezervăm dreptul de a modifica acești Termeni în orice moment. Orice modificare va fi efectivă imediat după postarea pe Site. Utilizarea
          continuă a Site-ului de către dumneavoastră după postarea modificărilor va constitui acceptarea acestor modificări.
        </p>

        <h2>9. Contact</h2>
        <p>
          Pentru orice întrebări sau nelămuriri referitoare la acești Termeni, vă rugăm să ne{" "}
          <Link href="/contact" style={{ color: "#5c45fd", textDecoration: "underline" }}>
            contactați
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default page;
