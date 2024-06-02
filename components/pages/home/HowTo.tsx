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
          <Link href="/">
            <span>1</span> Alege un model
          </Link>
        </li>

        <li>
          <Link href="/">
            <span>2</span> Creeaza un cont (optional)
          </Link>
        </li>

        <li>
          <Link href="/">
            <span>3</span> Completeaza datele tale
          </Link>
        </li>

        <li>
          <Link href="/">
            <span>4</span> Descarca CV-ul si aplica
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
