import React from "react";

import FillForm from "@/components/pages/completare-cv/FillForm";
import BottomWave2 from "@/public/SVG/BottomWave2";

import "./style.css";
import PreviewCv from "@/components/pages/completare-cv/PreviewCv";

const page = () => {
  return (
    <main className="cv-fill section-wide">
      <h1>Completeaza CV online</h1>
      <BottomWave2 />

      <div className="page-content">
        <FillForm />
        <PreviewCv />
      </div>
    </main>
  );
};

export default page;
