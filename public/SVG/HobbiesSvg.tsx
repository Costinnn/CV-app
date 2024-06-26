import React from "react";

import { SvgType } from "@/types/globalTypes";

const HobbiesSvg = ({ size, color }: SvgType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      width={size ? size : "20"}
      height={size ? size : "20"}
      fill={color ? color : "#a89bff"}
      viewBox="0 0 24 24"
    >
      <path d="m20,10v7c0,1.103-.897,2-2,2h-7c-1.103,0-2-.897-2-2v-8c0-.552.447-1,1-1s1,.448,1,1v8h3v-3c0-.552.447-1,1-1s1,.448,1,1v3h2v-7h-4c-.553,0-1-.448-1-1s.447-1,1-1h4c1.103,0,2,.897,2,2Zm4-1v10c0,2.761-2.239,5-5,5H3.643c-2.012,0-3.643-1.631-3.643-3.643V3.5C0,1.567,1.567,0,3.5,0h.5c1.657,0,3,1.343,3,3v1h12c2.761,0,5,2.239,5,5ZM2,17.338c.464-.22.977-.338,1.5-.338h.5c.552,0,1-.449,1-1V3c0-.551-.448-1-1-1h-.5c-.827,0-1.5.673-1.5,1.5v13.838Zm20-8.338c0-1.657-1.343-3-3-3H7v10c0,1.657-1.343,3-3,3h-.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5h15.5c1.657,0,3-1.343,3-3v-10Z" />
    </svg>
  );
};

export default HobbiesSvg;
