"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { CV_TEMPLATES } from "@/public/data/cvTemplates";
import ArrowUpRightSvg from "@/public/SVG/ArrowUpRightSvg";
import notFoundImg from "@/public/images/not-found.png";

import { CvTemplateType } from "@/types/globalTypes";

import "./CvList.css";

const CV_TYPES = [
  { type: "Simplu", query: "simple" },
  { type: "Modern", query: "modern" },
  { type: "Creativ", query: "creativ" },
  { type: "Profesional", query: "profesional" },
];

const CvList = () => {
  const searchParams = useSearchParams();

  const [filteredCVTemplates, setFilteredCVTemplates] = useState<CvTemplateType[]>([]);

  const cvType = searchParams.get("categorie-cv-ales");

  useEffect(() => {
    if (cvType) {
      setFilteredCVTemplates(CV_TEMPLATES.filter((item) => item.type === cvType));
    } else {
      setFilteredCVTemplates(CV_TEMPLATES);
    }
  }, [cvType]);

  return (
    <section className="cv-list section-wide">
      {/* CV TEMPLATES NAVIGATION */}
      <ul className="filters">
        <li>
          <Link href={`/modele-cv`} className={`${cvType === null ? "selected" : ""}`}>
            Toate
          </Link>
        </li>

        {CV_TYPES.map((item) => (
          <li key={item.type}>
            <Link href={`/modele-cv?categorie-cv-ales=${item.query}`} className={`${cvType === item.query ? "selected" : ""}`}>
              {item.type}
            </Link>
          </li>
        ))}
      </ul>

      {/* TEMPLATES PREVIEW */}
      {filteredCVTemplates.length > 0 ? (
        <ul className="templates">
          {filteredCVTemplates.map((item) => (
            <li key={item.templateName}>
              <Link href={`/completare-cv?model-ales=${item.templateName}`}>
                <div className="img-box">
                  <Image src={item.img} fill sizes="85vw" alt={item.templateName} />
                </div>

                <div className="text">
                  <h2>{item.templateName}</h2>
                  <span className="btn-primary2">
                    Completează <ArrowUpRightSvg size="10" color="#f5f5f5" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="img-box">
          <Image src={notFoundImg} fill sizes="(min-width:700px) 200px, 100px" alt="" />
          <p>Momentan nu există nici un model pentru aceasta categorie.</p>
        </div>
      )}
    </section>
  );
};

export default CvList;
