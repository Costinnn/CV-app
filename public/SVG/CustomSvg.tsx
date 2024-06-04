import React from "react";

import { SvgType } from "@/types/globalTypes";

const CustomSvg = ({ size, color }: SvgType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      width={size ? size : "20"}
      height={size ? size : "20"}
      fill={color ? color : "#a89bff"}
      viewBox="0 0 24 24"
    >
      <path d="m19,11.994l2-2v11.006c0,1.654-1.346,3-3,3H3c-1.654,0-3-1.346-3-3V6c0-1.654,1.346-3,3-3h11.43l-1.756,2H3c-.551,0-1,.448-1,1v15c0,.552.449,1,1,1h15c.551,0,1-.448,1-1v-9.006Zm-13,5.006h5c1.657,0,3-1.343,3-3s-1.343-3-3-3c-4,0-5,6-5,6ZM23.139.863c-1.149-1.15-3.012-1.151-4.162-.002-.039.039-.077.079-.114.12l-7.218,8.084c.74.097,1.431.342,2.033.727l6.68-7.481c.348-.389.946-.422,1.334-.074.013.012.025.023.038.036.369.368.369.965.001,1.334,0,0,0,0-.001.001l-7.042,7.043c.465.511.817,1.118,1.039,1.788l7.413-7.413c1.148-1.15,1.148-3.013,0-4.163Z" />
    </svg>
  );
};

export default CustomSvg;
