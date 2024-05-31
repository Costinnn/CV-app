import React from "react";
import Link from "next/link";
import Image from "next/image";

import ArrowUpRightSvg from "@/public/SVG/ArrowUpRightSvg";
import portretsImg from "@/public/images/portrets.png";

import "./Herosection.css";

const Herosection = () => {
  return (
    <section className="herosection section-wide">
      <h1>
        Creare CV online <span className="text-gradient-primary">gratis</span>
      </h1>
      <p>
        Descopera cele mai bune modele de curriculum vitae gratuite, perfecte pentru a-ti evidentia abilitatile si experienta profesionala. Fie ca
        esti la inceput de cariera sau un profesionist cu experienta, oferim sabloane de CV-uri care te vor ajuta sa impresionezi angajatorii si sa
        obtii jobul dorit.
      </p>

      <div>
        <Link href={"/"} className="btn-primary2">
          Vezi modele <ArrowUpRightSvg size="13" color="#f5f5f5" />
        </Link>
        <div>
          <Image src={portretsImg} alt="cv gratis" width={80} height={50} />
          <p>
            500+ <br />
            <span>CV-uri create</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
