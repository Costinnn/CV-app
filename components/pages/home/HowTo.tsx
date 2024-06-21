import React from "react";
import Link from "next/link";
import Image from "next/image";

import cvImg from "@/public/images/cv.png";

import "./HowTo.css";

const HowTo = () => {
  return (
    <section className="section-wide how-to">
      <ul>
        <h2>Cum creezi un CV?</h2>
        <li>
          <Link href="/modele-cv">
            <span>1</span> Alege un model
          </Link>
        </li>

        <li>
          <Link href="/">
            <span>2</span> Creeaza un cont (opțional)
          </Link>
        </li>

        <li>
          <Link href="/completare-cv">
            <span>3</span> Completează datele tale
          </Link>
        </li>

        <li>
          <Link href="/completare-cv">
            <span>4</span> Descarcă CV-ul și aplică
          </Link>
        </li>
      </ul>

      <div className="img-box">
        <Image src={cvImg} fill sizes="(min-width: 700px) 30vw, 90vw" alt="model cv" />
      </div>
    </section>
  );
};

export default HowTo;
