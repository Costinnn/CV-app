import simpleImg from "@/public/images/templates/simple.jpg";
import compactImg from "@/public/images/templates/compact.jpg";
import vividVisionImg from "@/public/images/templates/vivid-vision.jpg";
import { CvTemplateType } from "@/types/globalTypes";

export const CV_TEMPLATES: CvTemplateType[] = [
  { img: simpleImg, templateName: "simple", type: "simplu" },
  { img: compactImg, templateName: "compact", type: "simplu" },
  { img: vividVisionImg, templateName: "vivid-vision", type: "creativ" },
];

// ADDING NEW TEMPLATE

// 1. Add here: { img: xxx, templateName: "xxx", type: "simple" }

// 2. In PreviewCv.tsx add: {selectedTemplate === "xxx" && <XXX inputData={inputData} />}
//    and a switch case :
//         case "xxx":
//              pdfTemplate = XXXPdf({ inputData });
//             break;

// 3. Create HTML version and PDF one

// 3.1 HTML
// import React from "react";

// import { PreviewCvPropType } from "@/types/globalTypes";

// import "./XXX.css";

// const XXX = ({ inputData }: PreviewCvPropType) => {
//   return <div className="model-XXX"></div>;
// };

// export default XXX;

// 3.2 PDF
// import {
//   EducationStateType,
//   ExperienceStateType,
//   LinksStateType,
//   PersonalizedStateType,
//   PreviewCvPropType,
//   ProjectsStateType,
//   VolunteeringStateType,
// } from "@/types/globalTypes";

// const XXXPdf = ({ inputData }: PreviewCvPropType) => {
//   // Destructuring data
//   const { generalInfo, contact, education, experience, competences, projects, volunteering, links, hobbies, personalized } = inputData;

//   const docDefinition: any = { content: [], styles: {} };
//   return docDefinition;
// };

// export default XXXPdf;
