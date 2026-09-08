import assert from "node:assert/strict";
import test from "node:test";
import ExcelJS from "exceljs";
import { createSamples, normalizeAmount, normalizeDate, parseCsv, processSources, required, toCsv } from "../app/automation/demo/core.ts";
import { createWorkbook, readWorkbook } from "../app/automation/demo/workbook.ts";

test("10-file example reconciles all rows without deleting duplicate candidates", () => {
  const result = processSources(createSamples());
  assert.equal(result.inputRows, 60); assert.equal(result.rows.length, 58);
  assert.equal(result.issues.length, 2); assert.equal(result.duplicateRows, 2);
  assert.equal(result.inputRows, result.rows.length + result.issues.length);
  assert.equal(result.total, 3132000);
  assert.equal(result.branches.reduce((sum, b) => sum + b.amount, 0), result.total);
  assert.equal(result.rows.filter(r => r.id === "R-1-1").length, 2);
  assert.equal(result.issues[0].line, 3);
});

test("CSV parses Korean, BOM, quotes, commas, embedded newlines and final empty columns", () => {
  assert.deepEqual(parseCsv('\uFEFFid,내역,금액\r\n001,"확인, \"\"완료\"\"\n다음 줄",1000\r\n002,점검,'), [["id", "내역", "금액"], ["001", '확인, "완료"\n다음 줄', "1000"], ["002", "점검", ""]]);
  assert.throws(() => parseCsv('id\n"unclosed'), /닫는 따옴표/);
  assert.throws(() => parseCsv('id\n"closed"bad'), /잘못된 문자/);
});

test("amounts reject ambiguous values instead of stripping arbitrary characters", () => {
  assert.equal(normalizeAmount("₩ 1,234원"), 1234); assert.equal(normalizeAmount("-2,000"), -2000);
  for (const input of ["abc100", "12,34", "1.5", "1e3", "", "9007199254740992", Infinity, NaN]) assert.throws(() => normalizeAmount(input));
});

test("dates are calendar-valid and preserve leap days", () => {
  assert.equal(normalizeDate("2024/2/29"), "2024-02-29");
  for (const input of ["2026-02-29", "2026-09-31", "2026-13-01", "09/08/2026"]) assert.throws(() => normalizeDate(input));
});

test("missing, ambiguous headers and out-of-scope data sizes are rejected", () => {
  assert.throws(() => processSources([{ name: "bad.csv", rows: [["기록번호"], ["1"]] }]), /지점/);
  assert.throws(() => processSources([{ name: "bad.csv", rows: [[...required, "amount"], ["1", "A", "2026-09-08", "점검", 1, 2]] }]), /여러 개/);
  assert.throws(() => processSources([...createSamples(), createSamples()[0]]), /10개/);
  assert.throws(() => parseCsv("a\n" + "x\n".repeat(5001)), /5,000/);
  assert.throws(() => processSources([{ name: "big.csv", rows: [required, ...Array.from({ length: 5001 }, () => ["x"])] }]), /5,000/);
});

test("duplicate key includes branch; blank rows and malformed rows remain accounted for", () => {
  const result = processSources([{ name: "data.csv", rows: [required, ["001", "A", "2026-09-08", "작업", "10"], ["001", "B", "2026-09-08", "작업", "20"], ["", "A", "2026-09-08", "작업", "30"], ["", "", "", "", ""], ["x", "B", "2026-09-08", "작업", 1, "unmapped extra"]] }]);
  assert.equal(result.inputRows, 4); assert.equal(result.rows.length, 2); assert.equal(result.issues.length, 2); assert.equal(result.duplicateRows, 0); assert.equal(result.total, 30);
});

test("XLSX import preserves leading-zero IDs and dates; formulas are reviewed without execution", async () => {
  const book = new ExcelJS.Workbook(); const sheet = book.addWorksheet("자료");
  sheet.addRow(required); sheet.addRow(["001", "A", new Date("2026-09-08T00:00:00Z"), "점검", 12000]);
  sheet.addRow(["002", "A", "2026-09-08", "점검", { formula: "1+2", result: 3 }]);
  const buffer = await book.xlsx.writeBuffer();
  const input = await readWorkbook(buffer as unknown as ArrayBuffer, "sample.xlsx");
  const result = processSources([input]);
  assert.equal(result.rows[0].id, "001"); assert.equal(result.rows[0].date, "2026-09-08"); assert.equal(result.total, 12000);
  assert.equal(result.issues.length, 1); assert.match(result.issues[0].reason, /수식/);
});

test("generated XLSX is readable and reconciles all four report sheets", async () => {
  const result = processSources(createSamples()); const bytes = await createWorkbook(result);
  const book = new ExcelJS.Workbook(); await book.xlsx.load(bytes as unknown as ArrayBuffer);
  assert.deepEqual(book.worksheets.map(s => s.name), ["통합 데이터", "확인 필요", "지점별 요약", "처리 요약"]);
  assert.equal(book.worksheets[0].rowCount, 59); assert.equal(book.worksheets[1].rowCount, 5);
  assert.equal(book.worksheets[2].getCell("C2").value, 515000);
  assert.equal(book.worksheets[3].getCell("B7").value, 3132000);
});

test("untrusted text exports as text, never an executable spreadsheet formula", async () => {
  const source = { name: "test.csv", rows: [required, ["=1+1", "A", "2026-09-08", "@SUM(1)", 10]] };
  const book = new ExcelJS.Workbook(); await book.xlsx.load(await createWorkbook(processSources([source])) as unknown as ArrayBuffer);
  assert.equal(book.worksheets[0].getCell("A2").type, ExcelJS.ValueType.String);
  assert.equal(book.worksheets[0].getCell("A2").value, "=1+1");
  assert.match(toCsv([["=1+1", "+SUM(1)", "@X", "-cmd"]]), /"'=1\+1"/);
});

test("unsafe aggregate amounts fail rather than silently losing precision", () => {
  assert.throws(() => processSources([{ name: "big.csv", rows: [required, ["1", "A", "2026-09-08", "작업", Number.MAX_SAFE_INTEGER], ["2", "A", "2026-09-08", "작업", 1]] }]), /합계/);
});

