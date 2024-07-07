import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="legal-page">
      <h1>Politica de confidențialitate</h1>

      <div className="content">
        {" "}
        <h2>1. Introducere</h2>
        <p>
          La CV-gratis.ro, respectăm confidențialitatea vizitatorilor noștri. Această Politică de Confidențialitate descrie modul în care colectăm,
          folosim și protejăm informațiile atunci când utilizați site-ul nostru.
        </p>
        <h2>2. Informații Colectate</h2>
        <p>
          Nu colectăm informații personale identificabile de la utilizatori. Singura tehnologie de urmărire pe care o folosim este Google Analytics,
          care ne ajută să înțelegem cum este utilizat site-ul nostru.
        </p>
        <h2>3. Google Analytics</h2>
        <p>
          Google Analytics este un serviciu de analiză web furnizat de Google care urmărește și raportează traficul pe site. Google utilizează datele
          colectate pentru a urmări și monitoriza utilizarea site-ului nostru. Aceste date sunt partajate cu alte servicii Google. Google poate folosi
          datele colectate pentru a contextualiza și personaliza anunțurile din propria rețea de publicitate.
        </p>
        <p>
          Puteți renunța la urmărirea de către Google Analytics activând opțiunea de renunțare în browser-ul dvs. Pentru mai multe informații despre
          practicile de confidențialitate ale Google, vizitați pagina web Google Privacy & Terms:{" "}
          <a target="_blank" rel="noreferrer" href="https://policies.google.com/privacy">
            https://policies.google.com/privacy
          </a>
          .
        </p>
        <h2>4. Utilizarea Cookie-urilor</h2>
        <p>
          Site-ul nostru folosește cookie-uri pentru a analiza traficul și pentru a îmbunătăți experiența utilizatorilor. Cookie-urile sunt mici
          fișiere stocate pe dispozitivul dvs. care ajută la furnizarea unei experiențe mai bune. Puteți alege să dezactivați cookie-urile prin
          setările browser-ului dvs., însă acest lucru poate afecta funcționarea site-ului.
        </p>
        <h2>5. Protecția Informațiilor</h2>
        <p>
          Deși nu colectăm informații personale identificabile, luăm măsuri de securitate adecvate pentru a proteja datele colectate prin Google
          Analytics împotriva accesului neautorizat sau a modificării, divulgării sau distrugerii acestora.
        </p>
        <h2>6. Modificări ale Politicii de Confidențialitate</h2>
        <p>
          CV-gratis.ro își rezervă dreptul de a actualiza această politică de confidențialitate în orice moment. Orice modificare va fi efectivă
          imediat după postarea pe această pagină. Vă încurajăm să verificați periodic această pagină pentru a fi la curent cu orice modificări.
        </p>
        <h2>7. Contact</h2>
        <p>
          Dacă aveți întrebări referitoare la această politică de confidențialitate, ne puteți{" "}
          <Link href="/contact" style={{ color: "#5c45fd", textDecoration: "underline" }}>
            contacta
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default page;
