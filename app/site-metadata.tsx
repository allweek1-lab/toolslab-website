import type { Metadata } from "next";

export const companyOrigin = "https://toolslab.co.kr";

// Define the full nested objects: Next.js replaces, rather than merges, them.
export function companyPageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, companyOrigin).href;
  const image = { url: `${companyOrigin}/og.png`, width: 1200, height: 630, alt: "툴스랩 디지털 제작 스튜디오" };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", locale: "ko_KR", siteName: "ToolsLab", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
