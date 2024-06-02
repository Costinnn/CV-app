import React from "react";
import Link from "next/link";
import Image from "next/image";

import cvImg from "@/public/images/cv.png";

import "./ChooseModel.css";

const cvModels = [
  { id: 1, img: cvImg, link: "/" },
  { id: 2, img: cvImg, link: "/" },
  { id: 3, img: cvImg, link: "/" },
  { id: 4, img: cvImg, link: "/" },
];

const ChooseModel = () => {
  return (
    <section className="choose section-wide">
      <h2>Alege un model de curriculum vitae gratuit</h2>

      <div className="content">
        {cvModels.map((item) => (
          <div key={item.id}>
            <Image src={item.img} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseModel;
