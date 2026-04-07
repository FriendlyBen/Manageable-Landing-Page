import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://manageable.my";

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/zh-CN`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/en/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/zh-CN/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];
}
