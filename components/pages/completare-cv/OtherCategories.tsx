import React from "react";

import CustomSvg from "@/public/SVG/CustomSvg";
import LinkSvg from "@/public/SVG/LinkSvg";
import HobbiesSvg from "@/public/SVG/HobbiesSvg";
import ProjectsSvg from "@/public/SVG/ProjectsSvg";
import VolunteeringSvg from "@/public/SVG/VolunteeringSvg";

import "./OtherCategories.css";

const OtherCategories = () => {
  return (
    <div className="other-categories">
      <h2>Adauga alte Categorii</h2>

      <div className="content">
        <button type="button" className="btn-primary2">
          <span id="svg">
            <ProjectsSvg color="#f5f5f5" />
          </span>
          <span id="text">Proiecte</span>
        </button>

        <button type="button" className="btn-primary2">
          <span id="svg">
            <VolunteeringSvg color="#f5f5f5" />
          </span>
          <span id="text">Voluntariat</span>
        </button>

        <button type="button" className="btn-primary2">
          <span id="svg">
            <LinkSvg color="#f5f5f5" />
          </span>
          <span id="text"> Link-uri</span>
        </button>

        <button type="button" className="btn-primary2">
          <span id="svg">
            <HobbiesSvg color="#f5f5f5" />
          </span>
          <span id="text">Hobbi-uri</span>
        </button>

        <button type="button" className="btn-primary2">
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
