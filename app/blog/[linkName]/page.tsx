"use client";

import React from "react";
import { useParams } from "next/navigation";

import CumScriiCv from "../_blogs/CumScriiCv";

import "./style.css";
import CeEsteCv from "../_blogs/CeEsteCv";
import CeContineCv from "../_blogs/CeContineCv";

const page = () => {
  const params = useParams<{ linkName: string }>();

  return (
    <main className="blog-page">
      {params.linkName === "cum-sa-scrii-un-cv" && <CumScriiCv />}
      {params.linkName === "ce-este-un-cv" && <CeEsteCv />}
      {params.linkName === "ce-trebuie-sa-contina-un-cv" && <CeContineCv />}
    </main>
  );
};

export default page;
