import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

import ArrowUpRightSvg from "@/public/SVG/ArrowUpRightSvg";

import { BLOG_LIST_DATA } from "@/public/data/blogListData";

import "./style.css";
import Loading from "./loading";

export const metadata = {
  title: "Bloguri despre CV online",
  description:
    "Explorează articole informative despre cum să scrii un CV perfect pe blogul CV-gratis.ro! Află ce trebuie să conțină un CV, cum să-l structurezi și multe alte sfaturi utile pentru a crea un curriculum vitae de succes. Citește acum pentru a-ți îmbunătăți CV-ul!",
  keywords: [
    "cum să scrii un CV",
    "ce trebuie să conțină un CV",
    "ce este un CV",
    "sfaturi CV",
    "articole despre CV",
    "ghiduri CV",
    "blog despre CV",
    "cum să faci un CV",
    "structura CV",
    "informații CV",
    "sfaturi pentru CV profesional",
    "sfaturi pentru CV modern",
    "sfaturi pentru CV atractiv",
    "cum să creezi un CV",
    "cum să îmbunătățești un CV",
    "resurse pentru CV",
    "exemple de CV",
    "modele de CV",
    "articole CV",
    "blog CV-uri",
  ],
};

const page = () => {
  return (
    <main className="blogs">
      <h1>Blog</h1>

      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </main>
  );
};

export default page;
