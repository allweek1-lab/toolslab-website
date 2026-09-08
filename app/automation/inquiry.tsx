"use client";

import { useState } from "react";

export default function Inquiry() {
  const [task, setTask] = useState("");
  const [files, setFiles] = useState("");
  const [deadline, setDeadline] = useState("");
  const [notice, setNotice] = useState("");
  const body = `안녕하세요. 업무 자동화 제작을 문의합니다.\n\n반복하는 업무: ${task}\n파일 종류와 개수: ${files}\n원하는 일정: ${deadline || "협의 가능"}\n\n원하는 결과물:\n\n샘플 자료는 개인정보를 제거한 뒤 별도로 전달하겠습니다.`;
  return <form className="au-inquiry" onSubmit={event => { event.preventDefault(); window.location.href = `mailto:allweek@naver.com?subject=${encodeURIComponent("[툴스랩] 업무 자동화 제작 문의")}&body=${encodeURIComponent(body)}`; setNotice("메일 앱에서 내용을 확인한 뒤 직접 보내주세요. 메일 앱이 없다면 문의 내용을 복사해 allweek@naver.com으로 보내주세요."); }}>
    <label htmlFor="au-task">반복하는 업무<textarea id="au-task" required maxLength={1200} placeholder="예: 매주 지점 10곳의 실적 파일을 합쳐서 합계를 계산합니다." value={task} onChange={e => setTask(e.target.value)} /></label>
    <div className="au-form-row"><label htmlFor="au-files">파일 종류와 개수<input id="au-files" required maxLength={100} placeholder="예: 엑셀 10개" value={files} onChange={e => setFiles(e.target.value)} /></label><label htmlFor="au-deadline">원하는 일정 · 선택<input id="au-deadline" maxLength={100} placeholder="예: 9월 말까지" value={deadline} onChange={e => setDeadline(e.target.value)} /></label></div>
    <div className="au-actions"><button className="au-button au-primary" type="submit">메일 앱에서 문의 작성 ↗</button><button type="button" className="au-text-button" onClick={async () => { try { await navigator.clipboard.writeText(body); setNotice("문의 내용을 복사했습니다. allweek@naver.com으로 보내주세요."); } catch { setNotice("복사하지 못했습니다. 내용을 직접 선택해 복사하거나 이메일로 문의해주세요."); } }}>문의 내용 복사</button></div><p className="au-caption">입력 내용은 이 페이지에 저장·전송되지 않습니다. 메일 발송은 사용하는 메일 앱에서 직접 진행합니다.</p><p className="au-notice" role="status">{notice}</p>
  </form>;
}

