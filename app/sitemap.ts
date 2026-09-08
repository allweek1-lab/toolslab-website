import type { MetadataRoute } from "next";

const origin = "https://toolslab.co.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${origin}/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${origin}/automation`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${origin}/automation/demo`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${origin}/portfolio`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
