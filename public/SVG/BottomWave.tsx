import React from "react";
import { SvgType } from "@/types/globalTypes";

const BottomWave = ({ color }: SvgType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={color ? color : "#5c45fd"}
        fillOpacity="1"
        d="M0,320L120,266.7C240,213,480,107,720,90.7C960,75,1200,149,1320,186.7L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
  );
};

export default BottomWave;
