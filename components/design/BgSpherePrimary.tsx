import React from "react";

import { BgSphere } from "@/types/globalTypes";

const BgSpherePrimary = ({ size, top, left, right, color }: BgSphere) => {
  return (
    <div
      className="bg-sphere-primary"
      style={{
        position: "absolute",
        top,
        left,
        right,
        width: size,
        height: size,
        zIndex: -1,
        background: `radial-gradient(${color},  rgba(255, 255, 255, 0) 75%)`,
        opacity: "0.4",
      }}
    ></div>
  );
};

export default BgSpherePrimary;
