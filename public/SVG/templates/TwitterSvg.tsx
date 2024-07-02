import React from "react";
import { SvgType } from "@/types/globalTypes";

const TwitterSvg = ({ size, color }: SvgType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_1"
      viewBox="0 0 24 24"
      width={size ? size : "15"}
      height={size ? size : "15"}
      fill={color ? color : "#161616"}
    >
      <polygon points="6.861 6.159 15.737 17.764 17.097 17.764 8.322 6.159 6.861 6.159" />
      <path d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm3.063,19.232l-3.87-5.055-4.422,5.055h-2.458l5.733-6.554-6.046-7.91h5.062l3.494,4.621,4.043-4.621h2.455l-5.361,6.126,6.307,8.337h-4.937Z" />
    </svg>
  );
};

export default TwitterSvg;
