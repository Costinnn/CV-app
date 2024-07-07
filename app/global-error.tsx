"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <h2>S-a produs o eroare...</h2>
        <button onClick={() => reset()}>Încearcă din nou!</button>
      </body>
    </html>
  );
}
