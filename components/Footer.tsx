import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div>
          <h2>CV-online</h2>
        </div>

        <div>
          <h3>Sfaturi utile</h3>

          <Link href="/">Ce trebuie sa contina un CV?</Link>
          <Link href="/">Cum se completeaza un CV?</Link>
          <Link href="/">Ce este un CV (curriculum vitae)?</Link>
        </div>

        <div>
          <h3>Link-uri</h3>

          <Link href="/">Modele CV gratis</Link>
          <Link href="/">Completeaza CV-ul</Link>
          <Link href="/">Blog</Link>
        </div>
      </div>

      <p>Copyright 2024 | CV-online | All rights reserved</p>
    </footer>
  );
};

export default Footer;
