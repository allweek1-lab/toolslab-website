import type { Metadata } from "next";
import Link from "next/link";
import Inquiry from "./inquiry";

export const metadata: Metadata = {
  title: "엑셀 반복업무 자동화 · 19만 원부터 | 툴스랩",
  description: "여러 엑셀 파일 취합부터 오류 확인, 보고서 생성까지. 실제 작동하는 무료 데모를 확인하고 우리 업무에 맞는 자동화를 문의하세요.",
  alternates: { canonical: "https://toolslab.co.kr/automation" },
  openGraph: { title: "엑셀 복붙, 이번 주로 끝내세요. | 툴스랩", description: "파일 취합·중복 확인·보고서 생성을 하나의 도구로. 샘플로 직접 체험하세요.", url: "https://toolslab.co.kr/automation" },
};

export default function AutomationPage() {
  return <main id="main-content">
    <section className="au-hero au-wrap">
      <div><p className="au-kicker"><span /> EXCEL WORKFLOW AUTOMATION</p><h1>엑셀 복붙,<br />이번 주로<br /><em>끝내세요.</em></h1><p className="au-lead">매번 파일을 열고, 합치고, 확인하는 일.<br />지금 쓰는 양식에 맞춰 하나의 도구로 만듭니다.</p><div className="au-actions"><Link className="au-button au-primary" href="/automation/demo">샘플로 직접 체험 <span>↗</span></Link><a className="au-button au-secondary" href="#pricing">제작 범위와 가격</a></div><p className="au-caption">회원가입 없이 체험 · 파일은 브라우저 안에서 처리</p></div>
      <div className="au-proof" aria-label="데모에서 제공하는 파일 처리 흐름"><div className="au-windowbar"><span className="au-dots">● ● ●</span><span>ToolsLab / 파일 취합</span><span className="au-live">실행 가능한 데모</span></div><div className="au-proof-body"><div className="au-proof-label"><span>01 / INPUT</span><span>같은 양식, 여러 파일</span></div><div className="au-file-stack">{["강남점_주간실적.csv", "마포점_주간실적.xlsx", "분당점_주간실적.csv"].map(name => <div key={name}><span className="au-file-icon">X</span><span>{name}</span><span className="au-check">✓</span></div>)}</div><div className="au-transform"><span>↓</span><p>열 맞춤 <b>·</b> 누락 확인 <b>·</b> 중복 표시</p></div><div className="au-output"><div><span className="au-file-icon">X</span><strong>통합_보고서.xlsx</strong><span>4개 시트</span></div><ul><li>통합 데이터 <b>✓</b></li><li>확인 필요 목록 <b>✓</b></li><li>지점별 요약 <b>✓</b></li><li>처리 요약 <b>✓</b></li></ul></div><p className="au-caption">가상 지점 자료를 사용하는 기능 시연입니다.</p></div></div>
    </section>
    <section className="au-value-strip"><div className="au-wrap"><p><strong>한 번의 취합</strong><span>파일을 하나씩 열지 않도록</span></p><p><strong>확인할 것만 따로</strong><span>누락과 중복 후보를 놓치지 않도록</span></p><p><strong>출처까지 추적</strong><span>원본 파일과 행 번호를 찾을 수 있도록</span></p></div></section>
    <section className="au-section au-wrap" id="scope"><div className="au-section-heading"><p className="au-kicker">WHAT WE BUILD</p><h2>우리 업무의 반복,<br />필요한 부분부터.</h2><p>큰 시스템을 새로 도입하지 않아도 됩니다.<br />지금 사용하는 파일과 작업 순서에서 시작합니다.</p></div><div className="au-offers">{[
      ["01", "파일 취합", "지점·현장별로 도착한 파일을 같은 열 순서로 합치고, 원본 위치를 남깁니다.", "예: 주간 실적 · 현장 작업 내역"],
      ["02", "검토 목록 생성", "필수값 누락과 잘못된 날짜·금액을 분리하고, 중복 후보를 표시합니다.", "예: 빠진 기록 · 겹치는 번호"],
      ["03", "보고서 자동 생성", "합계와 그룹별 요약을 계산해, 바로 검토할 수 있는 엑셀 파일로 저장합니다.", "예: 지점별 집계 · 월간 보고"],
    ].map(([no, title, desc, example]) => <article key={no}><span className="au-number">{no}</span><h3>{title}</h3><p>{desc}</p><small>{example}</small></article>)}</div></section>
    <section className="au-pricing-section" id="pricing"><div className="au-wrap au-pricing-grid"><div><p className="au-kicker">CLEAR SCOPE, CLEAR PRICE</p><h2>업무 하나부터<br />가볍게 시작하세요.</h2><p className="au-lead">샘플을 확인한 뒤 가능한 범위와<br />총금액, 납기를 먼저 안내합니다.</p><p className="au-caption">결제 기능이 없는 상담용 안내입니다.<br />실제 계약은 작업 범위와 견적을 확인한 뒤 진행합니다.</p></div><article className="au-price-card"><span className="au-tag">맞춤 자동화 · 시작 상품</span><h3>반복 작업 1개</h3><p className="au-price">190,000<span>원부터</span></p><p>기존 파일을 입력하고, 원하는 결과를 받는 도구</p><ul><li>입력 양식 1종 · 출력 보고서 1종</li><li>합의한 취합·검증·집계 규칙</li><li>실행 도구와 사용 안내 제공</li><li>샘플 검수 · 합의 범위 내 수정 1회</li><li>검수 완료 후 14일간 합의 기능 오류 수정</li></ul><a className="au-button au-primary" href="#contact">내 업무로 제작 문의 ↗</a><small>총 결제금액과 세금 처리 기준은 견적서에서 확정합니다. 로그인·외부 시스템 연동, 신규 기능, 양식 추가는 별도 견적입니다.</small></article></div></section>
    <section className="au-section au-wrap"><p className="au-kicker">HOW IT WORKS</p><h2>설명은 짧게,<br />결과는 직접 확인하세요.</h2><ol className="au-steps"><li><span>01</span><h3>작업 설명</h3><p>지금 하는 일과 원하는 결과를 알려주세요. 처음에는 개인정보를 지운 샘플이면 됩니다.</p></li><li><span>02</span><h3>범위·견적 확정</h3><p>입력 양식, 처리 규칙, 결과물, 납기를 합의합니다.</p></li><li><span>03</span><h3>샘플 검수·납품</h3><p>합의한 사례로 결과를 확인하고 실행 도구와 사용법을 전달합니다.</p></li></ol></section>
    <section className="au-wrap au-faq"><h2>자주 묻는 질문</h2>{[
      ["제가 쓰는 엑셀 양식도 가능한가요?", "열 이름과 실제 작업 규칙을 확인한 뒤 안내합니다. 공개 데모는 정해진 양식의 예시이며, 맞춤 제작에서는 합의한 고객 양식에 맞춰 구현합니다."],
      ["데모에 파일을 넣으면 어디로 보내지나요?", "데모는 브라우저 안에서 파일을 읽고 결과를 생성합니다. 파일을 서버에 업로드하거나 저장하지 않습니다. 새로고침하면 선택한 파일과 결과가 초기화됩니다."],
      ["AI 이용료가 계속 발생하나요?", "이 데모의 파일 취합과 검증에는 AI API를 사용하지 않습니다. 맞춤 제작에서 외부 유료 서비스가 필요한 경우, 계약 전에 별도로 안내합니다."],
      ["제작 기간은 얼마나 걸리나요?", "샘플 자료와 요구사항을 확인한 뒤 납기를 확정합니다. 파일 형식과 규칙의 복잡도에 따라 달라지며, 문의만으로 제작 일정이 확정되지는 않습니다."],
    ].map(([q, a]) => <details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</section>
    <section className="au-section au-wrap au-contact" id="contact"><div><p className="au-kicker">LET’S SIMPLIFY YOUR WORK</p><h2>어떤 일을<br />반복하고 계신가요?</h2><p>파일 종류와 작업 순서만 알려주세요.<br />가능한 범위부터 함께 확인하겠습니다.</p><div className="au-actions"><a className="au-button au-primary" href="https://pf.kakao.com/_xosxkJX/chat" target="_blank" rel="noreferrer">카카오톡으로 상담 ↗</a><a className="au-button au-secondary" href="mailto:allweek@naver.com">이메일 문의</a></div></div><Inquiry /></section>
  </main>;
}
