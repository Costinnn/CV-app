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

          <Link href="/blog/ce-trebuie-sa-contina-un-cv">Ce trebuie să conțină un CV?</Link>
          <Link href="/blog/cum-sa-scrii-un-cv">Cum se completează un CV?</Link>
          <Link href="/blog/ce-este-un-cv">Ce este un CV (curriculum vitae)?</Link>
        </div>

        <div>
          <h3>Link-uri</h3>
          <Link href="/contact">Contact</Link>
          <Link href="/termeni-si-conditii">Termeni și condiții</Link>
          <Link href="/politica-de-confidentialitate">Politica de confidențialitate</Link>
          <Link href="/cookie">Cookie-uri</Link>
        </div>
      </div>

      <p>Copyright 2024 | CV-online | All rights reserved</p>
    </footer>
  );
};

export default Footer;
