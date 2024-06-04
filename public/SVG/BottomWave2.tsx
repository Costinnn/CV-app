import React from "react";
import { SvgType } from "@/types/globalTypes";

const BottomWave = ({ color }: SvgType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill={color ? color : "#5c45fd"} fillOpacity="1" d="M0,64L720,224L1440,96L1440,0L720,0L0,0Z"></path>
    </svg>
  );
};

export default BottomWave;
