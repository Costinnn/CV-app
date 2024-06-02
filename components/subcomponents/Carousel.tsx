"use client";

import React, { useState } from "react";
import Image from "next/image";

import linkedinImg1 from "@/public/images/linkedin1.png";
import linkedinImg2 from "@/public/images/linkedin2.png";
import upworkImg1 from "@/public/images/upwork1.png";
import upworkImg2 from "@/public/images/upwork2.png";
import googleImg1 from "@/public/images/google1.png";
import googleImg2 from "@/public/images/google2.png";
import shopifyImg1 from "@/public/images/shopify1.png";
import shopifyImg2 from "@/public/images/shopify2.png";
import jcbImg1 from "@/public/images/jcb1.png";
import jcbImg2 from "@/public/images/jcb2.png";
import githubImg1 from "@/public/images/github1.png";
import githubImg2 from "@/public/images/github2.png";

import "./Carousel.css";

const carouselContent = [
  { id: 1, img1: linkedinImg1, img2: linkedinImg2 },
  { id: 2, img1: upworkImg1, img2: upworkImg2 },
  { id: 3, img1: googleImg1, img2: googleImg2 },
  { id: 4, img1: shopifyImg1, img2: shopifyImg2 },
  { id: 5, img1: jcbImg1, img2: jcbImg2 },
  { id: 6, img1: githubImg1, img2: githubImg2 },
  { id: 7, img1: linkedinImg1, img2: linkedinImg2 },
  { id: 8, img1: upworkImg1, img2: upworkImg2 },
  { id: 9, img1: googleImg1, img2: googleImg2 },
  { id: 10, img1: shopifyImg1, img2: shopifyImg2 },
  { id: 11, img1: jcbImg1, img2: jcbImg2 },
  { id: 12, img1: githubImg1, img2: githubImg2 },
];

const Carousel = () => {
  const [hoveredItem, setHoveredItem] = useState<null | number>(null);

  return (
    <div className="carousel">
      <p>CV-uri folosite la peste 15+ companii de renume</p>

      <div className="frame">
        <div className="content">
          {carouselContent.map((item) => (
            <div key={item.id} className="item" onMouseOver={() => setHoveredItem(item.id)} onMouseOut={() => setHoveredItem(null)}>
              <div className={`content ${hoveredItem === item.id ? "gray-bg" : ""}`}>
                <div className="img-box">
                  {hoveredItem === item.id ? (
                    <Image src={item.img2} fill sizes="(min-width: 1000px) 25vw, 33vw " alt="" />
                  ) : (
                    <Image src={item.img1} fill sizes="(min-width: 1000px) 25vw, 33vw " alt="" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
