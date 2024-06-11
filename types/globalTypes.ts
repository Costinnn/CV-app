import { StaticImageData } from "next/image";

export type SvgType = {
  size?: string;
  color?: string;
};

export type CvTemplateType = {
  img: StaticImageData;
  templateName: string;
  type: string;
};

export type OtherCategoriesFormType = { projects: boolean; volunteering: boolean; links: boolean; hobbies: boolean; personalized: boolean };
