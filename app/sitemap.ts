import { MetadataRoute } from "next";

import { BLOG_LIST_DATA } from "@/public/data/blogListData";

const websiteURL = process.env.WEBSITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const blogsSitemap: MetadataRoute.Sitemap = BLOG_LIST_DATA.map((item) => {
    return { url: `${websiteURL}/blog/${item.link}`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 };
  });

  return [
    {
      url: `${websiteURL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${websiteURL}/modele-cv`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${websiteURL}/completare-cv`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${websiteURL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogsSitemap,
  ];
}
