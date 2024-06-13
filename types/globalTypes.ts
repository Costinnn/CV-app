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

export type GeneralInfoType = { name: string; description: string };

export type ContactType = { phone: string; email: string; address: string };

export type EducationStateType = {
  school: string;
  specialization: string;
  start: string;
  end: string;
  untilNow: boolean;
};

export type ExperienceStateType = { position: string; company: string; start: string; end: string; untilNow: boolean };

export type ProjectsStateType = { title: string; link: string };

export type VolunteeringStateType = { role: string; organisation: string; description: string; start: string; end: string; untilNow: boolean };

export type LinksStateType = { title: string; link: string };

export type HobbiesStateType = { title: string; description: string };

export type PersonalizedStateType = {
  sectionTitle: string;
  title: string;
  link: string;
  description: string;
  start: string;
  end: string;
  untilNow: boolean;
};

export type PreviewCvPropType = {
  inputData: {
    generalInfo: GeneralInfoType;
    contact: ContactType;
    education: EducationStateType[];
    experience: ExperienceStateType[];
    competences: string[];
    projects: ProjectsStateType[];
    volunteering: VolunteeringStateType[];
    links: LinksStateType[];
    hobbies: HobbiesStateType[];
    personalized: PersonalizedStateType[];
  };
};
