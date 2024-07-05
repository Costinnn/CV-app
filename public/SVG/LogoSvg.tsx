import React from "react";

import { SvgType } from "@/types/globalTypes";

const LogoSvg = ({ size, color }: SvgType) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "20"}
      height={size ? size : "20"}
      viewBox="0 0 283.000000 315.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,315.000000) scale(0.100000,-0.100000)" fill={color ? color : "#5c45fd"} stroke="none">
        <path
          d="M2289 2843 c-195 -197 -1010 -1062 -1093 -1160 -15 -19 -26 -36 -24
-38 2 -2 157 -96 343 -208 355 -212 718 -442 819 -516 32 -24 96 -77 142 -117
l83 -74 29 42 c60 87 122 216 161 333 141 422 79 872 -170 1241 -73 108 -203
246 -300 317 -32 24 -37 32 -29 47 13 25 182 252 232 313 22 26 38 47 36 47
-2 0 -105 -102 -229 -227z"
        />
        <path
          d="M1185 2934 c-548 -98 -986 -506 -1119 -1045 -108 -435 -5 -881 285
-1236 152 -186 388 -346 632 -429 136 -46 278 -68 442 -68 83 1 179 6 215 13
93 19 117 16 395 -34 138 -25 257 -45 265 -44 35 1 -676 177 -1195 295 -308
70 -562 129 -564 130 -3 3 198 322 231 367 13 17 30 12 298 -91 513 -197 833
-324 954 -378 66 -30 124 -54 130 -54 6 0 22 9 36 20 l25 19 -25 10 c-14 5
-266 109 -560 231 -294 122 -646 267 -782 323 -137 56 -248 104 -248 107 0 5
97 113 231 257 l58 63 313 -186 c644 -384 772 -464 1055 -666 l71 -51 31 22
c17 13 29 26 26 31 -17 28 -421 282 -985 620 -360 216 -665 399 -678 407 -24
15 -70 -34 992 1076 115 120 207 220 205 222 -11 10 -193 57 -274 70 -113 19
-353 18 -460 -1z"
        />
      </g>
    </svg>
  );
};

export default LogoSvg;