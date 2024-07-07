"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import PreviewSvg from "@/public/SVG/PreviewSvg";
import CloseSvg from "@/public/SVG/CloseSvg";
import ViewPdfSvg from "@/public/SVG/ViewPdfSvg";
import DownloadSvg from "@/public/SVG/DownloadSvg";

import { PreviewCvPropType } from "@/types/globalTypes";
import { CV_TEMPLATES } from "@/public/data/cvTemplates";

// TEMPLATES
import Simple from "@/components/cv-templates/simple/Simple";
import Compact from "@/components/cv-templates/compact/Compact";

import SimplePdf from "@/components/cv-templates/simple/SimplePdf";
import CompactPdf from "@/components/cv-templates/compact/CompactPdf";

import "./PreviewCv.css";
import VividVision from "@/components/cv-templates/vivid-vision/VividVision";
import VividVisionPdf from "@/components/cv-templates/vivid-vision/VividVisionPdf";

// use dummyData on DEV mode
const dummyData = {
  generalInfo: {
    name: "Razvan Pop",
    description:
      "Dezvoltator software pasionat cu peste 5 ani de experiență în dezvoltarea de aplicații web. Caut să îmi folosesc abilitățile tehnice și de management de proiect pentru a contribui la succesul unei companii inovative.",
  },
  contact: { phone: "+40 712 345 678", email: "razv@example.com", address: "București, România" },
  education: [
    {
      school: "Universitatea Politehnica din București",
      specialization: "Licență în Informatică",
      start: "2012-09",
      end: "2016-07",
      untilNow: false,
    },
    {
      school: "Liceul de Informatică din București",
      specialization: "Mate-Info",
      start: "2009-09",
      end: "2012-07",
      untilNow: false,
    },
  ],
  experience: [
    {
      position: "Dezvoltator Software",
      company: "SoftTech Solutions",
      description: [
        "Dezvoltarea și întreținerea aplicațiilor web folosind tehnologii precum JavaScript, React și Node.js.",
        "Colaborarea cu echipe de design și marketing pentru a îmbunătăți experiența utilizatorului.",
        "Reducerea timpului de încărcare a aplicațiilor web cu 20% prin optimizarea codului.",
      ],
      start: "2020-07",
      end: "",
      untilNow: true,
    },
    {
      position: "Programator Junior",
      company: "WebDev Inc",
      description: [
        "Participarea la proiecte de dezvoltare web, lucrând cu HTML, CSS și JavaScript.",
        "Asistență în implementarea backend-ului utilizând PHP și MySQL.",
      ],
      start: "2016-05",
      end: "2020-07",
      untilNow: false,
    },
    {
      position: "Programator Junior2",
      company: "WebDev Inc2",
      description: [
        "Participarea la proiecte de dezvoltare web, lucrând cu HTML, CSS și JavaScript.",
        "Asistență în implementarea backend-ului utilizând PHP și MySQL.",
      ],
      start: "2013-05",
      end: "2015-07",
      untilNow: false,
    },
    {
      position: "Programator Junior23",
      company: "WebDev Inc23",
      description: [
        "Participarea la proiecte de dezvoltare web, lucrând cu HTML, CSS și JavaScript.",
        "Asistență în implementarea backend-ului utilizând PHP și MySQL.",
      ],
      start: "2011-05",
      end: "2013-07",
      untilNow: false,
    },
    {
      position: "Programator Junior22",
      company: "WebDev Inc22",
      description: [
        "Participarea la proiecte de dezvoltare web, lucrând cu HTML, CSS și JavaScript.",
        "Asistență în implementarea backend-ului utilizând PHP și MySQL.",
      ],
      start: "2010-05",
      end: "2011-07",
      untilNow: false,
    },
  ],
  competences: ["Networking Specialist", "JavaScript", "Python", "NodeJs", "Express", "Atlas", "AWS"],
  projects: [
    { title: "Website personal", link: "www.cv-gratis.ro" },
    { title: "E-commerce store", link: "www.cv-gratis.ro" },
    { title: "Weather App", link: "www.cv-gratis.ro" },
    { title: "Cloud", link: "www.cv-gratis.ro" },
    { title: "TicToe", link: "" },
    { title: "Game", link: "https://www.google.co.uk/" },
    { title: "TicToe2", link: "" },
    { title: "TicToe3", link: "" },
  ],
  volunteering: [
    {
      role: "Mentor pentru Tineret",
      organisation: "Asociația Tech4Youth",
      start: "2020-05",
      end: "",
      untilNow: true,
    },
    {
      role: 'Voluntar în Programul "Hour of Code"',
      organisation: "Code.org",
      start: "2018-05",
      end: "2019-08",
      untilNow: false,
    },
  ],
  links: [
    { title: "My website", link: "website.com" },
    { title: "LinkedIn Profile", link: "https://www.linkedin.com/" },
    { title: "facebook", link: "https://www.facebook.com/facebook/" },
  ],
  hobbies: ["Fotbal", "Alergare", "Tenis"],
  personalized: [
    {
      sectionTitle: "Certificări",
      content: [
        {
          title: "Certificare: Certified ScrumMaster (CSM)",
          link: "",
          description: ["Instituție: Scrum Alliance, An obținere: 2021"],
          start: "2020-05",
          end: "",
          untilNow: true,
        },
      ],
    },
  ],
};

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PreviewCv = ({ inputData }: PreviewCvPropType) => {
  const searchParams = useSearchParams();

  const [isPreviewOpen, setiIsPreviewOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(searchParams.get("model-ales"));

  const cvTypeParam = searchParams.get("model-ales");

  // PDF template setup
  let pdfTemplate: any;

  switch (selectedTemplate) {
    case "simple":
      pdfTemplate = SimplePdf({ inputData });
      break;
    case "compact":
      pdfTemplate = CompactPdf({ inputData });
      break;
    case "vivid-vision":
      pdfTemplate = VividVisionPdf({ inputData });
      break;
  }

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
    setSelectedTemplate(cvTypeParam);
  }, [cvTypeParam]);

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
          //SELECTED HTML TEMPLATE + VIEW PDF version
          <div className="cv-template-preview">
            <div className="pdf-display">
              {selectedTemplate === "simple" && <Simple inputData={inputData} />}
              {selectedTemplate === "compact" && <Compact inputData={inputData} />}
              {selectedTemplate === "vivid-vision" && <VividVision inputData={inputData} />}
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
