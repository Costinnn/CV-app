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
