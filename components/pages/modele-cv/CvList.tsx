"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

import templateImg from "@/public/images/templates/template1.jpg";
import ArrowUpRightSvg from "@/public/SVG/ArrowUpRightSvg";

import { CvTemplateType } from "@/types/globalTypes";

import "./CvList.css";

const CV_TYPES = [
  { type: "Simplu", query: "simple" },
  { type: "Modern", query: "modern" },
  { type: "Creativ", query: "creativ" },
  { type: "Profesional", query: "profesional" },
];

const CV_TEMPLATES: CvTemplateType[] = [
  { img: templateImg, templateName: "taylor", type: "simple" },
  { img: templateImg, templateName: "taylor2", type: "simple" },
  { img: templateImg, templateName: "taylor3", type: "modern" },
  { img: templateImg, templateName: "taylor4", type: "profesional" },
];

const CvList = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filteredCVTemplates, setFilteredCVTemplates] = useState<CvTemplateType[]>([]);

  const cvType = searchParams.get("tip-cv-ales");

  useEffect(() => {
    if (cvType) {
      setFilteredCVTemplates(CV_TEMPLATES.filter((item) => item.type === cvType));
    } else {
      setFilteredCVTemplates(CV_TEMPLATES);
    }
  }, [cvType]);

  return (
    <Suspense>
      <section className="cv-list section-wide">
        <ul className="filters">
          <li>
            <Link href={`${pathname}`} className={`${cvType === null ? "selected" : ""}`}>
              Toate
            </Link>
          </li>

          {CV_TYPES.map((item) => (
            <li key={item.type}>
              <Link href={`${pathname}?tip-cv-ales=${item.query}`} className={`${cvType === item.query ? "selected" : ""}`}>
                {item.type}
              </Link>
            </li>
          ))}
        </ul>

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
                    Completeaza <ArrowUpRightSvg size="10" color="#f5f5f5" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Suspense>
  );
};

export default CvList;
