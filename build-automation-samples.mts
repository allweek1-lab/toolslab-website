import { mkdir, writeFile } from "node:fs/promises";
import { createSamples, toCsv, processSources } from "./app/automation/demo/core.ts";
import { createWorkbook } from "./app/automation/demo/workbook.ts";

const samples = createSamples();
await mkdir("public/automation-samples", { recursive: true });
for (const sample of samples) await writeFile(`public/automation-samples/${sample.name}`, toCsv(sample.rows), "utf8");
await writeFile("public/automation-samples/샘플_통합보고서.xlsx", await createWorkbook(processSources(samples)));
await writeFile("public/automation-samples/먼저_읽어주세요.txt", "툴스랩 업무 자동화 데모\n\n이 폴더의 지점명과 모든 거래는 가상 샘플입니다.\nhttps://toolslab.co.kr/automation/demo 에서 CSV 10개를 선택해 취합하세요.\n\n예상 결과: 입력 60행 / 정상 형식 58행 / 입력 오류 2행 / 중복 후보 2행\n금액 합계: 3,132,000원 (중복 후보 포함)\n중복 후보는 자동 삭제하지 않습니다.\n원본의 날짜 오류와 금액 오류는 검토 목록으로 분리됩니다.\n\n샘플_통합보고서.xlsx는 비교용 결과물입니다. 입력 파일로 선택하지 마세요.\n", "utf8");
console.log("10 fictional CSV samples and a verified XLSX report generated.");

