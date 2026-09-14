import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const siteDescription =
  "엑셀·CSV 업무 자동화, 앱·웹페이지 개발, 로고와 AI 광고 영상 제작. 필요한 범위와 결과물을 먼저 확인하는 툴스랩입니다.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "toolslab.co.kr";
  const origin = host.split(":")[0].toLowerCase() === "trendthreads.toolslab.co.kr"
    ? "https://trendthreads.toolslab.co.kr"
    : "https://toolslab.co.kr";

  return {
    metadataBase: new URL(origin),
    title: "툴스랩 | 앱·웹·브랜드·AI 영상 제작 스튜디오",
    description: siteDescription,
    openGraph: {
      title: "툴스랩 | 엑셀 자동화·앱·웹 제작",
      description: siteDescription,
      type: "website",
      locale: "ko_KR",
      siteName: "TOOLS LAB",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "TOOLS LAB 디지털 제작 스튜디오" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "툴스랩 | 엑셀 자동화·앱·웹 제작",
      description: siteDescription,
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
          name="naver-site-verification"
          content="e514b721f29735c57ec1b8df791cd5c6844a9314"
        />
        <meta
          name="facebook-domain-verification"
          content="oune087q7m21fs2zrhijtg8ef8pdrh"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
