"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { createSamples, limits, parseCsv, processSources, required, toCsv, type Result, type Source } from "./core";

const number = (value: number) => value.toLocaleString("ko-KR");
function download(data: BlobPart, name: string, type: string) {
  const url = URL.createObjectURL(new Blob([data], { type }));
  const anchor = document.createElement("a"); anchor.href = url; anchor.download = name; document.body.appendChild(anchor); anchor.click(); anchor.remove(); window.setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export default function Demo() {
  const [files, setFiles] = useState<File[]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState("");
  const [error, setError] = useState("");
  const [isSample, setIsSample] = useState(false);
  const [exporting, setExporting] = useState(false);
  const resultRef = useRef<HTMLElement>(null);

  function acceptFiles(incoming: FileList | File[] | null) {
    if (!incoming || busy) return;
    const additions = [...incoming]; const next = [...files];
    try {
      for (const file of additions) {
        if (!/\.(csv|xlsx)$/i.test(file.name)) throw new Error("CSV 또는 XLSX 파일만 넣어주세요. XLS·XLSM은 지원하지 않습니다.");
        if (file.size > limits.bytes) throw new Error(`${file.name}: 파일 크기가 5MB를 넘습니다.`);
        if (!next.some(old => old.name === file.name && old.size === file.size && old.lastModified === file.lastModified)) next.push(file);
      }
      if (next.length > limits.files) throw new Error("한 번에 최대 10개 파일까지 넣을 수 있습니다.");
      if (next.reduce((sum, file) => sum + file.size, 0) > limits.totalBytes) throw new Error("전체 파일 크기는 20MB 이하여야 합니다.");
      if (new Set(next.map(file => file.name)).size !== next.length) throw new Error("출처를 구별할 수 있도록 같은 이름의 파일은 이름을 바꾼 뒤 넣어주세요.");
      setFiles(next); setResult(null); setIsSample(false); setError("");
    } catch (e) { setError((e as Error).message); }
  }

  async function run(sample: boolean) {
    if (busy) return;
    setBusy(true); setError(""); setResult(null); setProgress("파일을 준비하고 있습니다.");
    try {
      let sources: Source[];
      if (sample) { sources = createSamples(); setFiles([]); }
      else {
        sources = [];
        for (let i = 0; i < files.length; i++) {
          const file = files[i]; setProgress(`${i + 1}/${files.length} · ${file.name} 읽는 중`);
          await new Promise(resolve => window.setTimeout(resolve, 0));
          try {
            const data = await file.arrayBuffer();
            if (/\.xlsx$/i.test(file.name)) { const { readWorkbook } = await import("./workbook"); sources.push(await readWorkbook(data, file.name)); }
            else {
              let content: string;
              try { content = new TextDecoder("utf-8", { fatal: true }).decode(data); } catch { content = new TextDecoder("euc-kr", { fatal: true }).decode(data); }
              sources.push({ name: file.name, rows: parseCsv(content) });
            }
          } catch (e) { throw new Error(`${file.name}: 파일을 읽지 못했습니다. ${(e as Error).message || "암호화되지 않은 CSV/XLSX인지 확인하세요."}`); }
        }
      }
      setProgress("자료를 합치고 확인 항목을 찾고 있습니다.");
      await new Promise(resolve => window.setTimeout(resolve, 0));
      setResult(processSources(sources)); setIsSample(sample);
    } catch (e) { setError((e as Error).message || "처리하지 못했습니다. 샘플 양식과 파일 내용을 확인하세요."); }
    finally { setBusy(false); setProgress(""); }
  }

  async function exportResult() {
    if (!result || exporting) return;
    setExporting(true); setError("");
    try { const { createWorkbook } = await import("./workbook"); const data = await createWorkbook(result); download(data.buffer as ArrayBuffer, isSample ? "툴스랩_샘플_통합보고서.xlsx" : "툴스랩_통합보고서.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"); }
    catch { setError("보고서를 저장하지 못했습니다. 잠시 후 다시 시도해주세요."); }
    finally { setExporting(false); }
  }

  return <main className="au-wrap au-demo" id="main-content">
    <div className="au-demo-heading"><div><p className="au-kicker">TRY THE WORKFLOW</p><h1>파일 여러 개, 보고서는 하나.</h1><p>샘플 10개로 체험하거나, 같은 양식의 CSV·엑셀 파일을 넣어보세요.</p></div><span className="au-privacy">✓ 파일은 이 브라우저 안에서 처리</span></div>
    <div className="au-workspace">
      <aside className="au-input-panel"><p className="au-panel-label">01 / FILES</p><h2>취합할 파일</h2><p>기록번호 · 지점 · 일자 · 항목 · 금액<br />5개 열이 있는 파일을 지원합니다.</p>
        <label className="au-dropzone" onDragOver={event => event.preventDefault()} onDrop={event => { event.preventDefault(); acceptFiles(event.dataTransfer.files); }}><span className="au-upload-symbol" aria-hidden="true">↥</span><strong>파일 선택 또는 끌어놓기</strong><small>CSV · XLSX / 최대 10개</small><input aria-label="취합할 CSV 또는 XLSX 파일 선택" type="file" accept=".csv,.xlsx" multiple disabled={busy} onChange={event => { acceptFiles(event.target.files); event.target.value = ""; }} /></label>
        {files.length > 0 ? <><ul className="au-input-list">{files.map((file, i) => <li key={file.name}><span title={file.name}>{file.name}</span><button aria-label={`${file.name} 제외`} disabled={busy} onClick={() => { setFiles(files.filter((_, index) => index !== i)); setResult(null); setError(""); }}>×</button></li>)}</ul><button className="au-button au-primary" disabled={busy || exporting} style={{ marginTop: 18 }} onClick={() => run(false)}>{busy ? "처리 중…" : `${files.length}개 파일 취합하기 →`}</button></> : null}
        <button className="au-button au-secondary" disabled={busy || exporting} style={{ marginTop: 12 }} onClick={() => run(true)}>가상 샘플 10개로 체험 →</button>
        <button className="au-text-button" disabled={busy} onClick={() => download(toCsv([required, ["R-001", "강남점", "2026-09-08", "점검", 30000]]), "툴스랩_입력양식.csv", "text/csv;charset=utf-8")}>입력 양식 내려받기</button><br /><a className="au-text-button" href="/automation-samples.zip" download>시연용 CSV 10개 받기</a>
        <p className="au-limit-note">파일당 5MB · 데이터 5,000행<br />전체 파일 20MB · XLSX 첫 시트만 처리<br />필수 5개 열 외의 열은 결과에 포함하지 않습니다.</p>
        {(files.length > 0 || result) ? <button className="au-text-button" disabled={busy || exporting} onClick={() => { setFiles([]); setResult(null); setError(""); setIsSample(false); }}>파일과 결과 초기화</button> : null}
      </aside>
      <section className="au-result-panel" ref={resultRef} aria-label="취합 결과" aria-busy={busy}>
        <div className="au-result-top"><div><p className="au-panel-label">02 / REPORT</p><h2>취합 결과</h2></div>{result ? <span className="au-status-pill">{isSample ? "가상 샘플 결과" : "선택한 파일 결과"}</span> : null}</div>
        {error ? <div className="au-error" role="alert">{error}</div> : null}
        <div aria-live="polite">{busy ? <><p className="au-notice">{progress}</p><progress aria-label="파일 처리 중" /></> : null}</div>
        {!result && !busy ? <div className="au-empty"><span className="au-file-icon" aria-hidden="true">X</span><h3>결과부터 확인해보세요.</h3><p>샘플을 실행하면 통합 데이터와 확인할 항목, 지점별 합계가 표시됩니다.</p><button className="au-button au-primary" onClick={() => run(true)}>샘플 실행하기 ↗</button><div className="au-empty-steps"><span>10개 파일</span><span>→</span><span>누락·중복 확인</span><span>→</span><span>보고서 다운로드</span></div></div> : null}
        {result ? <>
          <dl className="au-metrics"><div><dt>입력 데이터</dt><dd>{number(result.inputRows)}<span>행</span></dd></div><div><dt>정상 형식</dt><dd>{number(result.rows.length)}<span>행</span></dd></div><div className="au-warning"><dt>입력 오류</dt><dd>{number(result.issues.length)}<span>행</span></dd></div></dl>
          <p className="au-result-note">중복 후보 <strong>{result.duplicateRows}행</strong>은 정상 형식 행에 포함되어 있습니다. 자동 삭제하지 않으며, 표시된 합계에도 포함됩니다. 입력 오류 행은 집계에서 제외합니다.</p>
          <div className="au-table-wrap"><table className="au-table"><caption>지점별 요약 · {result.fileCount}개 파일 처리</caption><thead><tr><th scope="col">지점</th><th scope="col">정상 형식 행</th><th scope="col">금액 합계</th></tr></thead><tbody>{result.branches.length ? result.branches.map(branch => <tr key={branch.name}><td>{branch.name}</td><td>{number(branch.count)}행</td><td className="au-money">{number(branch.amount)}원</td></tr>) : <tr><td colSpan={3}>집계할 정상 형식 데이터가 없습니다. 확인 필요 목록을 검토해주세요.</td></tr>}</tbody></table></div>
          <div className="au-report-summary"><div><p>정상 형식 금액 합계 · 중복 후보 포함</p><strong>{number(result.total)}원</strong></div><button className="au-button au-primary" disabled={exporting} onClick={exportResult}>{exporting ? "저장 준비 중…" : "엑셀 보고서 받기 ↓"}</button></div>
          {(result.issues.length > 0 || result.duplicateRows > 0) ? <div className="au-review-list"><h3>확인 필요 · 미리보기</h3><ul>{result.issues.slice(0, 4).map((issue, i) => <li key={i}>{issue.source} · {issue.line}행 — {issue.reason}</li>)}{result.rows.filter(row => row.duplicate).slice(0, 2).map(row => <li key={row.source + row.line}>{row.source} · {row.line}행 — {row.branch} / {row.id} 중복 후보</li>)}</ul><p className="au-caption">전체 검토 목록과 원본 위치는 내려받은 보고서에서 확인할 수 있습니다.</p></div> : null}
          <details className="au-demo-info"><summary>통합 데이터 미리보기 · 최대 20행</summary><div className="au-table-wrap" style={{ marginTop: 14 }}><table className="au-table"><thead><tr>{["기록번호", "지점", "일자", "항목", "금액", "검토"].map(h => <th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{result.rows.slice(0, 20).map(row => <tr key={row.source + row.line} className={row.duplicate ? "au-flagged" : ""}><td>{row.id}</td><td>{row.branch}</td><td>{row.date}</td><td>{row.item}</td><td className="au-money">{number(row.amount)}</td><td className="au-row-alert">{row.duplicate ? "중복 후보" : "—"}</td></tr>)}</tbody></table></div></details>
        </> : null}
      </section>
    </div>
    <details className="au-demo-info"><summary>지원 양식과 처리 기준 보기</summary><p>첫 행에 <code>기록번호, 지점, 일자, 항목, 금액</code>이 필요합니다. 영문 헤더 <code>record_id, branch, date, item, amount</code>도 지원합니다. 날짜는 YYYY-MM-DD, YYYY/MM/DD, YYYY.MM.DD 또는 XLSX 날짜 셀을 사용하세요. 금액은 원 단위 정수이며 쉼표·₩·원 표기와 음수 금액을 지원합니다.</p><p>같은 지점과 기록번호가 겹치면 중복 후보로 표시합니다. 수식은 실행하지 않고, 수식·오류 셀은 확인 필요 목록으로 분리합니다. 빈 행은 제외하고, 원본 파일과 행 번호를 남깁니다. CSV는 UTF-8과 CP949 인코딩을 지원하며, 암호화 파일·XLS·XLSM은 지원하지 않습니다.</p><p>데모에는 외부 전송·자동 저장 기능이 없습니다. 결과는 새로고침 전에 내려받으세요. 우리 회사의 다른 양식이나 규칙은 맞춤 제작으로 진행할 수 있습니다.</p></details>
    <section className="au-demo-cta"><div><h2>우리 회사 양식으로도 만들 수 있습니다.</h2><p>입력 양식 1종 · 결과 보고서 1종 · 맞춤 제작 19만 원부터</p></div><Link className="au-button au-primary" href="/automation#contact">이런 도구 제작 문의 ↗</Link></section>
  </main>;
}

