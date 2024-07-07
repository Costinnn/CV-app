import React from "react";

const page = () => {
  return (
    <main className="legal-page">
      <h1>Cookie-uri</h1>

      <div className="content">
        <h2>1. Introducere</h2>
        <p>
          La CV-gratis.ro, utilizăm cookie-uri și session storage pentru a îmbunătăți experiența utilizatorilor și pentru a analiza traficul pe
          site-ul nostru. Această Politică a Cookie-urilor explică ce sunt cookie-urile, cum le folosim și cum puteți gestiona preferințele legate de
          cookie-uri și session storage.
        </p>

        <h2>2. Ce sunt cookie-urile?</h2>
        <p>
          Cookie-urile sunt mici fișiere de text stocate pe dispozitivul dumneavoastră atunci când vizitați un site web. Acestea ajută site-ul să-și
          amintească informații despre vizita dumneavoastră, cum ar fi preferințele de limbă și alte setări. Acest lucru poate face următoarea vizită
          mai ușoară și site-ul mai util pentru dumneavoastră.
        </p>

        <h2>3. Ce este session storage?</h2>
        <p>
          Session storage este o funcționalitate a browser-ului web care permite stocarea datelor în mod temporar pe dispozitivul utilizatorului.
          Aceste date sunt păstrate doar pe durata sesiunii de navigare și sunt șterse automat când utilizatorul închide tab-ul sau fereastra
          browser-ului.
        </p>

        <h2>4. Cum folosim cookie-urile și session storage?</h2>
        <p>
          Utilizăm cookie-uri pentru Google Analytics, un serviciu de analiză web furnizat de Google. Aceste cookie-uri ne ajută să înțelegem cum este
          utilizat site-ul nostru, oferind informații despre paginile vizitate, timpul petrecut pe site și alte date anonime de trafic. Aceste
          informații ne ajută să îmbunătățim site-ul și să oferim o experiență mai bună utilizatorilor noștri.
        </p>

        <p>
          De asemenea, folosim session storage pentru a menține datele în browser atunci când utilizatorul dă refresh la pagină. Aceste date sunt
          stocate doar temporar și sunt șterse automat când utilizatorul închide tab-ul sau fereastra browser-ului.
        </p>

        <h2>5. Tipuri de cookie-uri utilizate</h2>
        <p>Pe site-ul nostru folosim următoarele tipuri de cookie-uri:</p>
        <ul>
          <li>
            <strong>Cookie-uri de performanță:</strong> Aceste cookie-uri colectează informații despre modul în care vizitatorii utilizează un site
            web, de exemplu, care pagini sunt vizitate cel mai des. Aceste cookie-uri nu colectează informații care identifică un vizitator. Toate
            informațiile colectate de aceste cookie-uri sunt agregate și, prin urmare, anonime. Ele sunt folosite doar pentru a îmbunătăți modul în
            care funcționează un site web.
          </li>
        </ul>

        <h2>6. Gestionarea cookie-urilor și session storage</h2>
        <p>
          Puteți controla și/sau șterge cookie-urile și datele din session storage după cum doriți - pentru detalii, consultați{" "}
          <a target="_blank" rel="noreferrer" href="https://www.aboutcookies.org">
            aboutcookies.org
          </a>
          . Puteți șterge toate cookie-urile care sunt deja pe computerul dumneavoastră și puteți seta majoritatea browserelor să împiedice plasarea
          acestora. Dacă faceți acest lucru, este posibil să fie necesar să ajustați manual unele preferințe de fiecare dată când vizitați un site,
          iar unele servicii și funcționalități ar putea să nu funcționeze.
        </p>

        <h2>7. Consimțământul pentru utilizarea cookie-urilor și session storage</h2>
        <p>
          Prin utilizarea site-ului nostru, sunteți de acord cu utilizarea cookie-urilor și session storage în conformitate cu această Politică a
          Cookie-urilor. Dacă nu sunteți de acord cu utilizarea cookie-urilor noastre și a session storage, vă rugăm să ajustați setările browser-ului
          dumneavoastră în mod corespunzător sau să nu utilizați site-ul nostru.
        </p>

        <h2>8. Modificări ale Politicii Cookie-urilor</h2>
        <p>
          CV-gratis.ro își rezervă dreptul de a actualiza această politică a cookie-urilor în orice moment. Orice modificare va fi efectivă imediat
          după postarea pe această pagină. Vă încurajăm să verificați periodic această pagină pentru a fi la curent cu orice modificări.
        </p>
      </div>
    </main>
  );
};

export default page;
