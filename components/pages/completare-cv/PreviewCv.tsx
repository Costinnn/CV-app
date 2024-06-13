"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import LeftArrowSvg from "@/public/SVG/LeftArrowSvg";
import CloseSvg from "@/public/SVG/CloseSvg";

import { PreviewCvPropType } from "@/types/globalTypes";
import { CV_TEMPLATES } from "@/public/data/cvTemplates";

import "./PreviewCv.css";

const PreviewCv = ({ inputData }: PreviewCvPropType) => {
  const searchParams = useSearchParams();

  const [isPreviewOpen, setiIsPreviewOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(searchParams.get("model-ales"));

  const cvType = searchParams.get("model-ales");

  useEffect(() => {
    setSelectedTemplate(cvType);
  }, [cvType]);

  return (
    <>
      {/* ACTIVE ON MOBILE */}
      <button
        type="button"
        className="preview-btn"
        onClick={() => {
          setiIsPreviewOpen(true);
        }}
      >
        <LeftArrowSvg />
        <span>Previzualizeaza & Descarca</span>
      </button>

      {/* PREVIEW DISPLAY */}
      <section className={`preview section-wide ${isPreviewOpen ? "isOpen" : ""} ${!selectedTemplate && "overflow-scroll"}`}>
        {selectedTemplate ? (
          <div className="cv-template-preview"></div>
        ) : (
          <ul className="cv-templates-list">
            {CV_TEMPLATES.map((item) => (
              <li key={item.templateName}>
                <div className="img-box">
                  <Image src={item.img} fill sizes="85vw" alt={item.templateName} />
                </div>

                <Link href={`/completare-cv?model-ales=${item.templateName}`} className="text">
                  <h2>{item.templateName}</h2>
                  <span className="btn-primary2">Alege</span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* ACTIVE ON MOBILE */}
        <button type="button" className="close" onClick={() => setiIsPreviewOpen(false)}>
          <CloseSvg color="#969799" size="30" />
        </button>
      </section>
    </>
  );
};

export default PreviewCv;
