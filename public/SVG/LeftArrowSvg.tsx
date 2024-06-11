import React from "react";
import { SvgType } from "@/types/globalTypes";

const LeftArrowSvg = ({ size, color }: SvgType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="arrow-circle-down"
      viewBox="0 0 24 24"
      width={size ? size : "25"}
      height={size ? size : "25"}
      fill={color ? color : "#000000"}
    >
      <path d="M0,19V5A5.006,5.006,0,0,1,5,0H19a5.006,5.006,0,0,1,5,5V19a5.006,5.006,0,0,1-5,5H5A5.006,5.006,0,0,1,0,19ZM22,5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3ZM8,12a2.993,2.993,0,0,1,.752-1.987c.291-.327.574-.637.777-.84L12.353,6.3a1,1,0,0,1,1.426,1.4L10.95,10.58c-.187.188-.441.468-.7.759a1,1,0,0,0,0,1.323c.258.29.512.57.693.752L13.779,16.3a1,1,0,0,1-1.426,1.4L9.524,14.822c-.2-.2-.48-.507-.769-.833A2.99,2.99,0,0,1,8,12Z" />
    </svg>
  );
};

export default LeftArrowSvg;