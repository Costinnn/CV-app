import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ marginTop: "200px", marginBottom: "100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Pagina nu a fost găsită!</h2>
      <Link href="/" className="btn-primary2" style={{ marginTop: "50px" }}>
        Înapoi
      </Link>{" "}
    </div>
  );
}
