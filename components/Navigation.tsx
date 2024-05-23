"use client";
import Link from "next/link";
import { useState } from "react";

import MenuSvg from "@/public/SVG/MenuSvg";

import "./style.css";
import ArrowUpRightSvg from "@/public/SVG/ArrowUpRightSvg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <Link href="/">CV-online</Link>

      <Link href="/" className="btn-primary">
        Creeaza CV <ArrowUpRightSvg size="13" color="#f5f5f5" />
      </Link>
      <button type="button" className="btn-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MenuSvg color="#f5f5f5" />
      </button>

      <ul className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <li>
          <Link href="/">Modele CV</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
