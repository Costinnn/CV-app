"use client";

import React, { useState } from "react";

import LeftArrowSvg from "@/public/SVG/LeftArrowSvg";
import CloseSvg from "@/public/SVG/CloseSvg";

import { PreviewCvPropType } from "@/types/globalTypes";

import "./PreviewCv.css";

const PreviewCv = ({ inputData }: PreviewCvPropType) => {
  const [isPreviewOpen, setiIsPreviewOpen] = useState(false);

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
      <section className={`preview ${isPreviewOpen ? "isOpen" : ""} section-wide`}>
        <h1>Hello</h1>
        <button type="button" className="close" onClick={() => setiIsPreviewOpen(false)}>
          <CloseSvg color="#5c45fd" size="30" />
        </button>
      </section>
    </>
  );
};

export default PreviewCv;
