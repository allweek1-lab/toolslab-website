import ExcelJS from "exceljs";
import type { Result, Source } from "./core";

export async function readWorkbook(buffer: ArrayBuffer, name: string): Promise<Source> {
  const book = new ExcelJS.Workbook();
  await book.xlsx.load(buffer);
  const sheet = book.worksheets[0];
  if (!sheet) throw new Error(`${name}: 시트를 찾을 수 없습니다.`);
  if (sheet.rowCount > 5001 || sheet.columnCount > 100) throw new Error(`${name}: 첫 시트는 최대 5,000개 데이터 행, 100개 열까지 지원합니다.`);
  const rows: unknown[][] = [];
  for (let row = 1; row <= sheet.rowCount; row++) {
    rows.push(Array.from({ length: sheet.columnCount }, (_, column) => {
      const cell = sheet.getCell(row, column + 1);
      const value = cell.value;
      if (value && typeof value === "object" && "richText" in value) return value.richText.map(part => part.text).join("");
      if (value && typeof value === "object" && "hyperlink" in value) return value.text;
      return value;
    }));
  }
  return { name, rows };
}

export async function createWorkbook(result: Result): Promise<Uint8Array> {
  const book = new ExcelJS.Workbook();
  book.creator = "ToolsLab"; book.created = new Date();
  const sheets: { name: string; columns: string[]; rows: (string | number)[][] }[] = [
    { name: "통합 데이터", columns: ["기록번호", "지점", "일자", "항목", "금액", "원본 파일", "원본 행", "중복 후보"], rows: result.rows.map(r => [r.id, r.branch, r.date, r.item, r.amount, r.source, r.line, r.duplicate ? "검토 필요" : ""]) },
    { name: "확인 필요", columns: ["구분", "원본 파일", "원본 행", "확인 내용", "기록번호", "지점", "일자", "항목", "금액"], rows: [...result.issues.map(i => ["입력 오류", i.source, i.line, i.reason, ...i.values]), ...result.rows.filter(r => r.duplicate).map(r => ["중복 후보", r.source, r.line, "같은 지점과 기록번호 · 자동 삭제하지 않음", r.id, r.branch, r.date, r.item, r.amount])] },
    { name: "지점별 요약", columns: ["지점", "정상 형식 행 수 (중복 후보 포함)", "금액 합계 (중복 후보 포함)"], rows: result.branches.map(b => [b.name, b.count, b.amount]) },
    { name: "처리 요약", columns: ["항목", "값"], rows: [["처리 파일 수", result.fileCount], ["입력 데이터 행 수 (빈 행 제외)", result.inputRows], ["정상 형식 행 수 (중복 후보 포함)", result.rows.length], ["입력 오류 행 수 (집계 제외)", result.issues.length], ["중복 후보 행 수 (정상 형식 행의 일부)", result.duplicateRows], ["금액 합계 (중복 후보 포함, 원)", result.total], ["검토 안내", "중복 후보는 삭제하지 않았습니다. 원본과 대조 후 합계를 확정하세요."], ["처리 범위", "각 파일의 첫 시트 · 필수 5개 열만 추출 · 수식 셀은 검토 대상으로 분리"], ["개인정보", "입력 파일과 결과는 브라우저에서 처리하며 서버에 전송하지 않습니다."]] },
  ];
  for (const data of sheets) {
    const sheet = book.addWorksheet(data.name, { views: [{ state: "frozen", ySplit: 1 }] });
    sheet.addRow(data.columns); sheet.addRows(data.rows);
    sheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" }, size: 11 };
    sheet.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF102B3F" } };
    sheet.getRow(1).height = 32;
    sheet.columns.forEach((col, i) => { col.width = data.name === "처리 요약" ? i === 0 ? 42 : 85 : Math.min(45, Math.max(16, data.columns[i].length * 2 + 3)); });
    sheet.eachRow((row, rowNo) => { row.alignment = { vertical: "middle", wrapText: true }; if (rowNo > 1) { row.height = 26; if (rowNo % 2 === 0) row.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF2F6F9" } }; } });
    if (data.name !== "처리 요약") sheet.autoFilter = { from: { row: 1, column: 1 }, to: { row: Math.max(1, sheet.rowCount), column: data.columns.length } };
    if (data.name === "통합 데이터") sheet.getColumn(5).numFmt = '#,##0;[Red]-#,##0';
    if (data.name === "지점별 요약") sheet.getColumn(3).numFmt = '#,##0;[Red]-#,##0';
  }
  return new Uint8Array(await book.xlsx.writeBuffer());
}

