import React, { Suspense } from "react";

import BottomWave2 from "@/public/SVG/BottomWave2";
import FillForm_Preview from "@/components/pages/completare-cv/FillForm_Preview";

import "./style.css";

const page = () => {
  return (
    <main className="cv-fill section-wide">
      <h1>Completeaza CV online</h1>
      <BottomWave2 />

      <Suspense>
        <FillForm_Preview />
      </Suspense>
    </main>
  );
};

export default page;
