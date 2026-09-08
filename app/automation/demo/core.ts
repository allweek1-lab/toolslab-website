export type Source = { name: string; rows: unknown[][] };
export type RecordRow = { id: string; branch: string; date: string; item: string; amount: number; source: string; line: number; duplicate: boolean };
export type Issue = { source: string; line: number; reason: string; values: string[] };
export type Result = { rows: RecordRow[]; issues: Issue[]; inputRows: number; duplicateRows: number; total: number; branches: { name: string; count: number; amount: number }[]; fileCount: number };
export const limits = { files: 10, rows: 5000, bytes: 5 * 1024 * 1024, totalBytes: 20 * 1024 * 1024 };
export const required = ["기록번호", "지점", "일자", "항목", "금액"];
const aliases = [["기록번호", "거래번호", "record_id"], ["지점", "지점명", "branch"], ["일자", "날짜", "date"], ["항목", "내역", "item"], ["금액", "실적금액", "amount"]];
export const text = (value: unknown): string => value == null ? "" : value instanceof Date ? value.toISOString().slice(0, 10) : String(value).trim();

export function parseCsv(input: string): string[][] {
  const content = input.replace(/^\uFEFF/, "");
  const rows: string[][] = []; let row: string[] = [], field = "", quoted = false, closed = false;
  const finishField = () => { row.push(field); field = ""; closed = false; };
  const finishRow = () => { finishField(); rows.push(row); row = []; if (rows.length > limits.rows + 1) throw new Error(`파일당 ${limits.rows.toLocaleString()}행까지 처리할 수 있습니다.`); };
  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    if (quoted) {
      if (char === '"') { if (content[i + 1] === '"') { field += '"'; i++; } else { quoted = false; closed = true; } }
      else field += char;
    } else if (char === '"') { if (field || closed) throw new Error("CSV 따옴표 형식이 올바르지 않습니다."); quoted = true; }
    else if (char === ",") finishField();
    else if (char === "\n" || char === "\r") { if (char === "\r" && content[i + 1] === "\n") i++; finishRow(); }
    else { if (closed) { if (char !== " " && char !== "\t") throw new Error("CSV 따옴표 뒤에 잘못된 문자가 있습니다."); } else field += char; }
  }
  if (quoted) throw new Error("CSV의 닫는 따옴표가 없습니다.");
  if (field || row.length || closed) finishRow();
  return rows;
}

export function normalizeDate(value: unknown): string {
  if (value instanceof Date) { if (Number.isNaN(value.valueOf())) throw new Error("잘못된 날짜"); return value.toISOString().slice(0, 10); }
  const match = text(value).match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);
  if (!match) throw new Error("일자 형식 확인 (YYYY-MM-DD)");
  const year = Number(match[1]), month = Number(match[2]), day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (year < 1900 || year > 2100 || date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) throw new Error("실제 달력에 없는 날짜 또는 지원 연도 밖 (1900~2100)");
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function normalizeAmount(value: unknown): number {
  if (typeof value === "number") { if (!Number.isSafeInteger(value)) throw new Error("금액은 안전한 범위의 원 단위 정수여야 합니다."); return value; }
  const valueText = text(value).replace(/^₩\s*/, "").replace(/\s*원$/, "");
  if (!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)$/.test(valueText)) throw new Error("금액 형식 확인 (원 단위 정수)");
  const amount = Number(valueText.replaceAll(",", ""));
  if (!Number.isSafeInteger(amount)) throw new Error("금액이 안전한 계산 범위를 넘었습니다.");
  return amount;
}

export function processSources(sources: Source[]): Result {
  if (!sources.length) throw new Error("파일을 선택하거나 샘플을 불러오세요.");
  if (sources.length > limits.files) throw new Error("한 번에 최대 10개 파일까지 처리할 수 있습니다.");
  const rows: RecordRow[] = [], issues: Issue[] = []; let inputRows = 0;
  for (const source of sources) {
    if (source.rows.length < 2) throw new Error(`${source.name}: 헤더와 데이터 행이 필요합니다.`);
    if (source.rows.length - 1 > limits.rows) throw new Error(`${source.name}: 파일당 최대 5,000행까지 처리할 수 있습니다.`);
    const headers = source.rows[0].map(text);
    const indices = aliases.map((names, index) => {
      const matches = headers.map((h, i) => names.includes(h.toLowerCase()) ? i : -1).filter(i => i >= 0);
      if (matches.length !== 1) throw new Error(`${source.name}: '${required[index]}' 열이 ${matches.length ? "여러 개입니다" : "없습니다"}. 샘플 양식을 확인하세요.`);
      return matches[0];
    });
    for (let i = 1; i < source.rows.length; i++) {
      const raw = source.rows[i];
      if (raw.every(value => text(value) === "")) continue;
      inputRows++;
      const values = indices.map(index => raw[index]);
      const reasons: string[] = [];
      if (raw.length > headers.length && raw.slice(headers.length).some(v => text(v))) reasons.push("헤더보다 데이터 열이 많음");
      values.forEach((value, index) => {
        if (!text(value)) reasons.push(`${required[index]} 누락`);
        if (value && typeof value === "object" && !(value instanceof Date)) reasons.push(`${required[index]}: 수식·오류 셀은 값으로 변환 후 다시 넣어주세요`);
        if (text(value).length > 1000) reasons.push(`${required[index]}: 셀 내용이 1,000자를 넘음`);
      });
      let date = "", amount = 0;
      try { date = normalizeDate(values[2]); } catch (e) { reasons.push((e as Error).message); }
      try { amount = normalizeAmount(values[4]); } catch (e) { reasons.push((e as Error).message); }
      if (reasons.length) { issues.push({ source: source.name, line: i + 1, reason: [...new Set(reasons)].join(" · "), values: values.map(v => text(v).slice(0, 1000)) }); continue; }
      rows.push({ id: text(values[0]), branch: text(values[1]), date, item: text(values[3]), amount, source: source.name, line: i + 1, duplicate: false });
    }
  }
  const keys = new Map<string, number>();
  for (const row of rows) { const key = JSON.stringify([row.branch, row.id]); keys.set(key, (keys.get(key) || 0) + 1); }
  const groups = new Map<string, { name: string; count: number; amount: number }>();
  let total = 0;
  for (const row of rows) {
    row.duplicate = (keys.get(JSON.stringify([row.branch, row.id])) || 0) > 1;
    total += row.amount;
    const group = groups.get(row.branch) || { name: row.branch, count: 0, amount: 0 };
    group.count++; group.amount += row.amount; groups.set(row.branch, group);
    if (!Number.isSafeInteger(total) || !Number.isSafeInteger(group.amount)) throw new Error("합계가 안전한 계산 범위를 넘었습니다. 파일 범위를 나눠주세요.");
  }
  return { rows, issues, inputRows, duplicateRows: rows.filter(row => row.duplicate).length, total, branches: [...groups.values()].sort((a, b) => a.name.localeCompare(b.name, "ko")), fileCount: sources.length };
}

export function createSamples(): Source[] {
  const branches = ["강남점", "마포점", "분당점", "일산점", "광교점"];
  return Array.from({ length: 10 }, (_, i) => {
    const branch = branches[i % 5];
    const rows: unknown[][] = [required, ...Array.from({ length: 6 }, (_, j) => [`R-${i + 1}-${j + 1}`, branch, `2026-09-${String(j + 1).padStart(2, "0")}`, ["설치", "점검", "유지관리"][j % 3], 30000 + i * 5000 + j * 1000])];
    if (i === 5) rows[1] = ["R-1-1", "강남점", "2026/09/01", "설치", "30,000"];
    if (i === 7) rows[2][2] = "2026-09-31";
    if (i === 9) rows[3][4] = "금액 확인";
    return { name: `${branch}_${i < 5 ? "오전" : "오후"}.csv`, rows };
  });
}

export function toCsv(rows: unknown[][]): string {
  const cell = (value: unknown) => { let val = text(value); if (/^[=+@\t\r]/.test(val) || /^-(?!\d)/.test(val)) val = "'" + val; return '"' + val.replaceAll('"', '""') + '"'; };
  return "\uFEFF" + rows.map(row => row.map(cell).join(",")).join("\r\n");
}

