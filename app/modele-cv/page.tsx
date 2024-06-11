import React, { Suspense } from "react";

import CvList from "@/components/pages/modele-cv/CvList";

const page = () => {
  return (
    <main className="cv-models">
      <h1>Modele CV</h1>
      
      <Suspense>
        <CvList />
      </Suspense>
    </main>
  );
};

export default page;
