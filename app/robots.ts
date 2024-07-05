import { MetadataRoute } from "next";

const websiteURL = process.env.WEBSITE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "",
    },
    sitemap: `${websiteURL}/sitemap.xml`,
  };
}
