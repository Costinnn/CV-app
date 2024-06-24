import Image from "next/image";
import Link from "next/link";
import React from "react";

import ArrowUpRightSvg from "@/public/SVG/ArrowUpRightSvg";

import { BLOG_LIST_DATA } from "@/public/data/blogListData";

import "./style.css";

const page = () => {
  return (
    <main className="blogs">
      <h1>Blog</h1>

      <section className="blog-list section-wide">
        {BLOG_LIST_DATA.length > 0 &&
          BLOG_LIST_DATA.map((item) => (
            <Link href={`/blog/${item.link}`} className="blog-link" key={item.title + item.link}>
              <div className="img-box">
                <Image src={item.img} alt={item.title} fill sizes="400px" />
              </div>

              <div className="text">
                <span className="date">{item.date}</span>

                <h2>{item.title}</h2>

                <p>{item.text} ...</p>

                <span className="cta">
                  Citește mai mult <ArrowUpRightSvg color="#969799" size="10" />
                </span>
              </div>
            </Link>
          ))}
      </section>
    </main>
  );
};

export default page;
