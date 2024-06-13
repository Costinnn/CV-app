"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import MenuSvg from "@/public/SVG/MenuSvg";
import CloseSvg from "@/public/SVG/CloseSvg";

import "./style.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(true);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    setScrollPosition((prev) => {
      if (prev < window.scrollY && window.scrollY > 100) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      return window.scrollY;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navigation section-wide ${!isScrollingUp && !isMenuOpen ? "" : "show-nav"}`}>
      <Link href="/">CV-online</Link>

      <Link href="/completare-cv" className="btn-primary">
        Completeaza CV
      </Link>
      <button type="button" className="btn-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <CloseSvg color="#f5f5f5" /> : <MenuSvg color="#f5f5f5" />}
      </button>

      <ul className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <li>
          <Link href="/modele-cv" onClick={() => setIsMenuOpen(false)}>
            Modele CV
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
