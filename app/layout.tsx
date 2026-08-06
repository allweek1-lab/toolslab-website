import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const siteDescription =
  "앱 개발, 웹페이지 제작, 로고와 브랜드 개발, AI 광고 영상까지. 아이디어를 제품으로 만드는 디지털 제작 스튜디오 툴스랩입니다.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "toolslab.co.kr";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "툴스랩 | 앱·웹·브랜드·AI 영상 제작 스튜디오",
    description: siteDescription,
    openGraph: {
      title: "툴스랩 | Make Ideas Real",
      description: "아이디어를 제품으로, 브랜드를 경험으로.",
      type: "website",
      locale: "ko_KR",
      siteName: "TOOLS LAB",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "TOOLS LAB 디지털 제작 스튜디오" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "툴스랩 | Make Ideas Real",
      description: "아이디어를 제품으로, 브랜드를 경험으로.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="facebook-domain-verification"
          content="oune087q7m21fs2zrhijtg8ef8pdrh"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
