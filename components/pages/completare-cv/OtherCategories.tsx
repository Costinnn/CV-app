import React from "react";

import CustomSvg from "@/public/SVG/CustomSvg";
import LinkSvg from "@/public/SVG/LinkSvg";
import HobbiesSvg from "@/public/SVG/HobbiesSvg";
import ProjectsSvg from "@/public/SVG/ProjectsSvg";
import VolunteeringSvg from "@/public/SVG/VolunteeringSvg";

import "./OtherCategories.css";
import { OtherCategoriesFormType } from "@/types/globalTypes";

type formPropType = {
  handleOtherCategories: (category: "projects" | "volunteering" | "links" | "hobbies" | "personalized") => void;
  otherCategories: OtherCategoriesFormType;
};

const OtherCategories = ({ handleOtherCategories, otherCategories }: formPropType) => {
  return (
    <div className="other-categories">
      <h2>Adauga alte Categorii</h2>

      <div className="buttons">
        <button
          type="button"
          className={`btn-primary2 ${otherCategories.projects ? "selected" : ""}`}
          onClick={() => handleOtherCategories("projects")}
        >
          <span id="svg">
            <ProjectsSvg color="#f5f5f5" />
          </span>
          <span id="text">Proiecte</span>
        </button>

        <button
          type="button"
          className={`btn-primary2 ${otherCategories.volunteering ? "selected" : ""}`}
          onClick={() => handleOtherCategories("volunteering")}
        >
          <span id="svg">
            <VolunteeringSvg color="#f5f5f5" />
          </span>
          <span id="text">Voluntariat</span>
        </button>

        <button type="button" className={`btn-primary2 ${otherCategories.links ? "selected" : ""}`} onClick={() => handleOtherCategories("links")}>
          <span id="svg">
            <LinkSvg color="#f5f5f5" />
          </span>
          <span id="text"> Link-uri</span>
        </button>

        <button
          type="button"
          className={`btn-primary2 ${otherCategories.hobbies ? "selected" : ""}`}
          onClick={() => handleOtherCategories("hobbies")}
        >
          <span id="svg">
            <HobbiesSvg color="#f5f5f5" />
          </span>
          <span id="text">Hobbi-uri</span>
        </button>

        <button
          type="button"
          className={`btn-primary2 ${otherCategories.personalized ? "selected" : ""}`}
          onClick={() => handleOtherCategories("personalized")}
        >
          <span id="svg">
            <CustomSvg color="#f5f5f5" />
          </span>
          <span id="text">Personalizeaza</span>
        </button>
      </div>
    </div>
  );
};

export default OtherCategories;
