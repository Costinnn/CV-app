import React, { Suspense } from "react";

import CvList from "@/components/pages/modele-cv/CvList";

export const metadata = {
  title: "Modele gratis de CV",
  description:
    "Vezi cele mai bune modele de template-uri de CV pe CV-Gratis.ro! Alege dintre o varietate de șabloane gratuite, profesionale și moderne pentru a crea un CV care să te evidențieze. Găsește template-ul perfect și începe să impresionezi angajatorii acum!",
  keywords: [
    "modele de template-uri de CV",
    "template-uri CV gratuite",
    "șabloane CV",
    "template-uri CV profesionale",
    "template-uri CV moderne",
    "modele CV",
    "template-uri CV atractive",
    "template-uri CV personalizate",
    "descărcare template-uri CV",
    "exemple template-uri CV",
    "cele mai bune template-uri CV",
    "șabloane CV online",
    "modele de CV gratuit",
    "șabloane de CV moderne",
    "creare CV cu template",
  ],
};

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
