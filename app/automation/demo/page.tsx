import type { Metadata } from "next";
import Demo from "./demo";

export const metadata: Metadata = {
  title: "엑셀 파일 취합 무료 데모 | 툴스랩",
  description: "CSV·XLSX 파일을 브라우저에서 합치고, 오류와 중복 후보를 확인하고, 지점별 보고서를 내려받으세요. 가상 샘플 포함.",
  alternates: { canonical: "https://toolslab.co.kr/automation/demo" },
};

export default function DemoPage() { return <Demo />; }

