import { ImageResponse } from "next/og";

import { BLOG_LIST_DATA } from "@/public/data/blogListData";

import { BlogPostPropsType } from "@/types/globalTypes";

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

// Image generation
export default async function Image({ params: { linkName } }: BlogPostPropsType) {
  const blogPost = BLOG_LIST_DATA.filter((item) => item.link === linkName)[0];

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 50,
          color: "red",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "1200px auto",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${websiteURL}/images/blog/cecontine.jpg)`,
        }}
      >
        <h1>{blogPost.title}</h1>
      </div>
    )
  );
}
