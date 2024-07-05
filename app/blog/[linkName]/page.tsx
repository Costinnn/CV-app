import React from "react";

import { BLOG_LIST_DATA } from "@/public/data/blogListData";

import CumScriiCv from "../_blogs/CumScriiCv";
import CeEsteCv from "../_blogs/CeEsteCv";
import CeContineCv from "../_blogs/CeContineCv";

import { BlogPostPropsType } from "@/types/globalTypes";

import "./style.css";

export async function generateMetadata({ params: { linkName } }: BlogPostPropsType) {
  const blogPost = BLOG_LIST_DATA.filter((item) => item.link === linkName)[0];

  return {
    title: blogPost.title,
    description: blogPost.text,
    // openGraph: { images: [{ url: ceContineImg.src }] },
  };
}

const page = ({ params: { linkName } }: BlogPostPropsType) => {
  return (
    <main className="blog-page">
      {linkName === "cum-sa-scrii-un-cv" && <CumScriiCv />}
      {linkName === "ce-este-un-cv" && <CeEsteCv />}
      {linkName === "ce-trebuie-sa-contina-un-cv" && <CeContineCv />}
    </main>
  );
};

export default page;
