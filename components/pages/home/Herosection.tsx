import React from "react";
import Link from "next/link";
import Image from "next/image";

import ArrowUpRightSvg from "@/public/SVG/ArrowUpRightSvg";
import portretsImg from "@/public/images/portrets.png";

import "./Herosection.css";
import BgSpherePrimary from "@/components/design/BgSpherePrimary";
import Carousel from "@/components/subcomponents/Carousel";

const Herosection = () => {
  return (
    <section className="herosection section-wide">
      <BgSpherePrimary newClsName="sphere1" />

      <BgSpherePrimary newClsName="sphere2" />
      <h1>
        Creare CV online <span className="text-gradient-primary">gratis</span>
      </h1>
      <p>
        Descoperă cele mai bune modele de curriculum vitae gratuite, perfecte pentru a-ți evidenția abilitățile și experiența profesională. Fie că
        ești la început de carieră sau un profesionist cu experiență, oferim șabloane de CV-uri care te vor ajuta să impresionezi angajatorii și să
        obții jobul dorit.
      </p>

      <div className="call-to-action">
        <Link href="/modele-cv" className="btn-primary2">
          Vezi modele <ArrowUpRightSvg size="13" color="#f5f5f5" />
        </Link>
        <div>
          <Image src={portretsImg} alt="cv gratis" width={200} height={100} />
          <p>
            500+ <br />
            <span>CV-uri create</span>
          </p>
        </div>
      </div>

      <Carousel />
    </section>
  );
};

export default Herosection;
