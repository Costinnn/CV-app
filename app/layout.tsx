import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-no1",
});

export const metadata = {
  metadataBase: new URL("https://YYY.ro"),
  title: "YYY",
  description: "YYY",
  keywords: ["YYY", "YYY"],
  creator: "Webits",
  openGraph: {
    title: "YYY",
    description: "YYY",
    url: "YYY",

    locale: "ro_RO",
    type: "website",
  },
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`rootlayout ${oswald.variable} `}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
