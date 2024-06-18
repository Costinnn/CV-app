"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import SimplePdf from "@/components/cv-templates/simple/SimplePdf";

import PreviewSvg from "@/public/SVG/PreviewSvg";
import CloseSvg from "@/public/SVG/CloseSvg";
import ViewPdfSvg from "@/public/SVG/ViewPdfSvg";
import DownloadSvg from "@/public/SVG/DownloadSvg";

import { PreviewCvPropType } from "@/types/globalTypes";
import { CV_TEMPLATES } from "@/public/data/cvTemplates";

import Simple from "@/components/cv-templates/simple/Simple";

import "./PreviewCv.css";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PreviewCv = ({ inputData }: PreviewCvPropType) => {
  const searchParams = useSearchParams();

  const [isPreviewOpen, setiIsPreviewOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(searchParams.get("model-ales"));

  const cvType = searchParams.get("model-ales");

  // PDF setup
  const pdfTemplate = SimplePdf({ inputData });

  const openPdf = () => {
    const generatedPdf = pdfMake.createPdf(pdfTemplate);
    generatedPdf.open();
  };

  const downloadPdf = () => {
    const generatedPdf = pdfMake.createPdf(pdfTemplate);
    generatedPdf.download();
  };
  // END pdf setup

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
        <PreviewSvg />
        <span>Previzualizeaza / Descarca</span>
      </button>

      {/* PREVIEW DISPLAY */}
      <section className={`preview section-wide ${isPreviewOpen ? "isOpen" : ""} `}>
        {selectedTemplate ? (
          //SELECTED TEMPLATE
          <div className="cv-template-preview">
            <div className="pdf-display">
              <Simple inputData={inputData} />
            </div>

            <div className="pdf-actions">
              <button type="button" className="btn-primary" onClick={openPdf}>
                <ViewPdfSvg />
              </button>
              <button type="button" className="btn-primary" onClick={downloadPdf}>
                <DownloadSvg />
              </button>
            </div>
          </div>
        ) : (
          //  NO SELECTED TEMPLATE
          <div className={`ctl-box ${!selectedTemplate && "overflow-scroll"}`}>
            <ul className="cv-templates-list">
              {CV_TEMPLATES.map((item) => (
                <li key={item.templateName}>
                  <div className="img-box">
                    <Image src={item.img} fill sizes="85vw" alt={item.templateName} />
                  </div>

                  <Link href={`/completare-cv?model-ales=${item.templateName}`} className="text">
                    <h2>{item.templateName}</h2>
                    <span className="btn-primary2">Alege acest model</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ACTIVE ON MOBILE */}
        <button type="button" className="close" onClick={() => setiIsPreviewOpen(false)}>
          <CloseSvg color="#a89bff" size="25" />
        </button>
      </section>
    </>
  );
};

export default PreviewCv;
