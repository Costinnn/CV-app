import React from "react";
import { SvgType } from "@/types/globalTypes";

const TopWave = ({ color }: SvgType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={color ? color : "#5c45fd"}
        fillOpacity="1"
        d="M0,256L120,250.7C240,245,480,235,720,202.7C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </svg>
  );
};

export default TopWave;
