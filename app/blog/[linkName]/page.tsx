import React from "react";

import { BLOG_LIST_DATA } from "@/public/data/blogListData";

import CumScriiCv from "../_blogs/CumScriiCv";
import CeEsteCv from "../_blogs/CeEsteCv";
import CeContineCv from "../_blogs/CeContineCv";

import { BlogPostPropsType } from "@/types/globalTypes";

import "./style.css";
import Link from "next/link";

export async function generateMetadata({ params: { linkName } }: BlogPostPropsType) {
  const blogPost = BLOG_LIST_DATA.filter((item) => item.link === linkName)[0];

  return {
    title: blogPost?.title,
    description: blogPost?.text,
    // openGraph: { images: [{ url: ceContineImg.src }] },
  };
}

const page = ({ params: { linkName } }: BlogPostPropsType) => {
  let blogIsFound = false;

  BLOG_LIST_DATA.map((item) => {
    if (item.link === linkName) blogIsFound = true;
  });

  if (blogIsFound) {
    return (
      <main className="blog-page">
        {linkName === "cum-sa-scrii-un-cv" && <CumScriiCv />}
        {linkName === "ce-este-un-cv" && <CeEsteCv />}
        {linkName === "ce-trebuie-sa-contina-un-cv" && <CeContineCv />}
      </main>
    );
  } else {
    return (
      <div style={{ marginTop: "200px", marginBottom: "100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2>Pagina nu a fost găsită!</h2>
        <Link href="/blog" className="btn-primary2" style={{ marginTop: "50px" }}>
          Înapoi
        </Link>{" "}
      </div>
    );
  }
};

export default page;
