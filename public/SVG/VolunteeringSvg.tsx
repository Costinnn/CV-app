import React from "react";

import { SvgType } from "@/types/globalTypes";

const VolunteeringSvg = ({ size, color }: SvgType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      width={size ? size : "20"}
      height={size ? size : "20"}
      fill={color ? color : "#a89bff"}
      viewBox="0 0 24 24"
    >
      <path d="m1,7.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm13.5-2.5c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm9.355,8.981c.287.472.136,1.087-.336,1.373l-14,8.5c-.157.096-.336.146-.519.146h-1c-.552,0-1-.447-1-1v-3H3v1.5c0,.197-.059.391-.168.555l-1,1.5c-.193.289-.51.445-.833.445-.19,0-.383-.055-.554-.168-.459-.307-.583-.927-.277-1.387l.832-1.248v-7.197c0-1.24.745-2.336,1.898-2.791.057-.022,5.405-1.076,5.405-1.076.19-.037.364-.128.503-.264,0,0,3.008-2.912,3.013-2.916.548-.583,1.32-.953,2.181-.953h5V1.296c0-.716.58-1.296,1.296-1.296.234,0,.464.064.666.184l2.627,1.573c.549.343.549,1.143,0,1.487l-2.588,1.267v2.49c0,.553-.448,1-1,1h-3v5c1.103,0,2,.897,2,2v.759l3.481-2.113c.473-.286,1.087-.137,1.374.336Zm-18.855-1.163l-1.437.282c-.344.167-.563.513-.563.9v4h2v-5.182Zm6-2.29l-.801.777c-.418.406-.941.68-1.512.791l-1.687.331v5.574c1.103,0,2,.897,2,2v1.83l2-1.214v-10.088Zm2,2.472h2v-5h-1c-.551,0-1,.448-1,1v4Zm4,2h-4v4.402l4-2.429v-1.973Z" />
    </svg>
  );
};

export default VolunteeringSvg;
