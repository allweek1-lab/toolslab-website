import Demo from "./demo";
import { companyPageMetadata } from "../../site-metadata";

export const metadata = companyPageMetadata(
  "엑셀·CSV 파일 합치기 무료 데모 | 툴스랩",
  "CSV·XLSX 파일을 브라우저에서 합치고, 오류와 중복 후보를 확인하고, 지점별 보고서를 내려받으세요. 가상 샘플 포함.",
  "/automation/demo",
);

export default function DemoPage() { return <Demo />; }
