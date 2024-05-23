import { SvgType } from "@/types/globalTypes";
import React from "react";

const ArrowUpRightSvg = ({ size, color }: SvgType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size ? size : "20"}
      height={size ? size : "20"}
      fill={color ? color : "#000000"}
    >
      <path d="M21.5,0H9V3h9.879L.026,21.853l2.121,2.121L21,5.121V15h3V2.5c0-1.378-1.121-2.5-2.5-2.5Z" />
    </svg>
  );
};

export default ArrowUpRightSvg;
