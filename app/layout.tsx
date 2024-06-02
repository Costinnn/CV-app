import { Poppins } from "next/font/google";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-no1",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`rootlayout ${poppins.variable} `}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
