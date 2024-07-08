import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

const websiteURL = process.env.WEBSITE_URL;

// Image metadata
export const alt = "";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "1200px 630px",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${websiteURL}/images/ogimage.jpg)`,
        }}
      ></div>
    )
  );
}
