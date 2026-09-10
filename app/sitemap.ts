import type { MetadataRoute } from "next";

const origin = "https://toolslab.co.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-10T09:50:00Z");
  return [
    { url: `${origin}/`, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    { url: `${origin}/agency-partner`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${origin}/insights/listing-source-audit`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${origin}/automation`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${origin}/automation/demo`, lastModified: updated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${origin}/portfolio`, lastModified: updated, changeFrequency: "monthly", priority: 0.6 },
    { url: `${origin}/passwordq/support`, lastModified: updated, changeFrequency: "monthly", priority: 0.6 },
    { url: `${origin}/passwordq/privacy`, lastModified: updated, changeFrequency: "monthly", priority: 0.6 },
  ];
}
