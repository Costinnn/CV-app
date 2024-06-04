import React from "react";

import FillForm from "@/components/pages/completare-cv/FillForm";
import BottomWave2 from "@/public/SVG/BottomWave2";

const page = () => {
  return (
    <main className="cv-fill">
      <h1>Completeaza CV online</h1>
      <BottomWave2 />
      <FillForm />
    </main>
  );
};

export default page;
