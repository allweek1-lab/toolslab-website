import Link from "next/link";
import Inquiry from "./inquiry";
import { companyPageMetadata, JsonLd } from "../site-metadata";

export const metadata = companyPageMetadata(
  "엑셀 자동화 진단 4.9만 원 · 맞춤 제작 19만 원부터 | 툴스랩",
  "매주 반복하는 엑셀·CSV 취합과 검토 업무를 자동화합니다. 4.9만원 진단·작동 샘플로 먼저 확인하고, 맞춤 제작 진행 시 진단비를 전액 차감합니다.",
  "/automation",
);

export default function AutomationPage() {
  return <main id="main-content">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", "@id": "https://toolslab.co.kr/automation#service", name: "엑셀·CSV 업무 자동화", serviceType: "엑셀 파일 취합·검증·보고서 자동화", url: "https://toolslab.co.kr/automation", description: "고객 샘플 파일로 가능 여부와 결과 예시를 먼저 확인하는 4만9천원 유료 진단과 19만원부터 시작하는 맞춤 자동화 제작 서비스입니다.", provider: { "@type": "Organization", "@id": "https://toolslab.co.kr/#organization", name: "툴스랩", url: "https://toolslab.co.kr/" }, hasOfferCatalog: { "@type": "OfferCatalog", name: "엑셀 자동화 서비스", itemListElement: [{ "@type": "Offer", priceCurrency: "KRW", price: "49000", itemOffered: { "@type": "Service", name: "업무 진단·작동 샘플" } }, { "@type": "Offer", priceCurrency: "KRW", price: "190000", itemOffered: { "@type": "Service", name: "맞춤 자동화 제작" } }] } }} />
    <section className="au-hero au-wrap">
      <div><p className="au-kicker"><span /> EXCEL WORKFLOW AUTOMATION</p><h1>매주 여러 파일,<br /><em>아직 손으로 합치나요?</em></h1><p className="au-lead">파일을 한 번에 모으고, 누락·중복 후보와 합계를 바로 확인하도록 만듭니다.<br />내 파일로 작동 샘플부터 확인하세요.</p><div className="au-actions"><a className="au-button au-primary" href="#diagnosis">4.9만원 진단·샘플 보기 <span>↓</span></a><Link className="au-button au-secondary" href="/automation/demo">무료 데모 체험</Link></div><p className="au-caption">맞춤 제작 진행 시 진단비 49,000원 전액 차감</p></div>
      <div className="au-proof" aria-label="데모에서 제공하는 파일 처리 흐름"><div className="au-windowbar"><span className="au-dots">● ● ●</span><span>ToolsLab / 파일 취합</span><span className="au-live">실행 가능한 데모</span></div><div className="au-proof-body"><div className="au-proof-label"><span>01 / INPUT</span><span>같은 양식, 여러 파일</span></div><div className="au-file-stack">{["강남점_주간실적.csv", "마포점_주간실적.xlsx", "분당점_주간실적.csv"].map(name => <div key={name}><span className="au-file-icon">X</span><span>{name}</span><span className="au-check">✓</span></div>)}</div><div className="au-transform"><span>↓</span><p>열 맞춤 <b>·</b> 누락 확인 <b>·</b> 중복 표시</p></div><div className="au-output"><div><span className="au-file-icon">X</span><strong>통합_보고서.xlsx</strong><span>4개 시트</span></div><ul><li>통합 데이터 <b>✓</b></li><li>확인 필요 목록 <b>✓</b></li><li>지점별 요약 <b>✓</b></li><li>처리 요약 <b>✓</b></li></ul></div><p className="au-caption">가상 지점 자료를 사용하는 기능 시연입니다.</p></div></div>
    </section>
    <section className="au-value-strip"><div className="au-wrap"><p><strong>복사·붙여넣기 감소</strong><span>여러 파일을 한 번에 취합</span></p><p><strong>검토 시간 단축</strong><span>확인할 항목만 별도 표시</span></p><p><strong>작은 샘플로 먼저 검증</strong><span>전체 제작 전 결과 확인</span></p></div></section>
    <section className="au-section au-wrap" id="scope"><div className="au-section-heading"><p className="au-kicker">WHAT WE BUILD</p><h2>우리 업무의 반복,<br />필요한 부분부터.</h2><p>큰 시스템을 새로 도입하지 않아도 됩니다.<br />지금 사용하는 파일과 작업 순서에서 시작합니다.</p></div><div className="au-offers">{[
      ["01", "파일 취합", "지점·현장별로 도착한 파일을 같은 열 순서로 합치고, 원본 위치를 남깁니다.", "예: 주간 실적 · 현장 작업 내역"],
      ["02", "검토 목록 생성", "필수값 누락과 잘못된 날짜·금액을 분리하고, 중복 후보를 표시합니다.", "예: 빠진 기록 · 겹치는 번호"],
      ["03", "보고서 자동 생성", "합계와 그룹별 요약을 계산해, 바로 검토할 수 있는 엑셀 파일로 저장합니다.", "예: 지점별 집계 · 월간 보고"],
    ].map(([no, title, desc, example]) => <article key={no}><span className="au-number">{no}</span><h3>{title}</h3><p>{desc}</p><small>{example}</small></article>)}</div></section>
    <section className="au-pricing-section" id="pricing"><div className="au-wrap"><div className="au-pricing-heading"><p className="au-kicker">START SMALL, BUILD WITH PROOF</p><h2>내 파일로 먼저 확인하고,<br />필요할 때 전체 제작하세요.</h2><p>처음부터 큰 비용을 결정하지 않아도 됩니다. 실제 업무 샘플로 가능 여부와 결과 형태를 먼저 보여드립니다.</p></div><div className="au-price-options"><article className="au-price-card au-price-featured" id="diagnosis"><span className="au-tag">첫 단계 · 부담 낮춘 검증</span><h3>업무 진단·작동 샘플</h3><p className="au-price">49,000<span>원</span></p><p>개인정보를 지운 고객 파일로 작은 결과물을 먼저 확인</p><ul><li>반복 작업 1개와 샘플 파일 검토</li><li>입력 예시 1종 · 결과 미리보기 1종</li><li>자동화 가능 여부와 주의점 정리</li><li>전체 제작 범위·금액·일정 안내</li></ul><a className="au-button au-primary" href="#contact">49,000원 진단 문의 ↗</a><strong className="au-credit">맞춤 제작 진행 시 49,000원 전액 차감</strong><small>진단 결과물은 확인용 소규모 샘플입니다. 실제 결제금액과 제공 일정은 자료 확인 후 견적서에서 확정합니다.</small></article><article className="au-price-card"><span className="au-tag au-tag-neutral">다음 단계 · 실제 업무 적용</span><h3>맞춤 자동화 제작</h3><p className="au-price">190,000<span>원부터</span></p><p>기존 파일을 입력하고, 원하는 결과를 받는 실행 도구</p><ul><li>입력 양식 1종 · 출력 보고서 1종</li><li>합의한 취합·검증·집계 규칙</li><li>실행 도구와 사용 안내 제공</li><li>샘플 검수 · 합의 범위 내 수정 1회</li><li>검수 완료 후 14일간 합의 기능 오류 수정</li></ul><a className="au-button au-secondary" href="#contact">맞춤 제작 문의 ↗</a><small>로그인·외부 시스템 연동, 신규 기능, 양식 추가는 별도 견적입니다.</small></article></div><p className="au-pricing-note">이 페이지는 상담용 안내입니다. 계약은 작업 범위, 세금 처리, 일정과 총금액을 적은 견적서를 확인한 뒤 진행합니다.</p></div></section>
    <section className="au-section au-wrap"><p className="au-kicker">HOW IT WORKS</p><h2>설명보다 결과를<br />먼저 확인하세요.</h2><ol className="au-steps au-steps-four"><li><span>01</span><h3>샘플 전달</h3><p>개인정보를 지운 입력 파일과 원하는 결과 예시를 보내주세요.</p></li><li><span>02</span><h3>진단·작동 샘플</h3><p>작은 범위로 결과 형태와 자동화 가능 여부를 확인합니다.</p></li><li><span>03</span><h3>전체 견적 결정</h3><p>샘플이 맞으면 전체 범위와 일정을 정합니다. 진단비는 전액 차감합니다.</p></li><li><span>04</span><h3>제작·검수·납품</h3><p>합의한 사례로 검수한 뒤 실행 도구와 사용법을 전달합니다.</p></li></ol></section>
    <section className="au-wrap au-faq"><h2>자주 묻는 질문</h2>{[
      ["제가 쓰는 엑셀 양식도 가능한가요?", "열 이름과 실제 작업 규칙을 확인한 뒤 안내합니다. 공개 데모는 정해진 양식의 예시이며, 맞춤 제작에서는 합의한 고객 양식에 맞춰 구현합니다."],
      ["중복된 행은 자동으로 삭제하나요?", "공개 데모는 중복 후보를 표시하고 원본 행을 남깁니다. 같은 주문의 여러 품목이나 분할 결제는 정상 기록일 수 있으므로, 맞춤 제작에서도 삭제 기준은 먼저 합의합니다."],
      ["49,000원 진단에서는 무엇을 받나요?", "개인정보를 지운 고객 샘플 파일을 기준으로 입력 예시 1종과 결과 미리보기 1종을 만들고, 자동화 가능 여부와 전체 제작 범위·금액·일정을 안내합니다. 완성된 전체 업무 도구가 아니라 구매 결정을 위한 소규모 작동 샘플입니다."],
      ["진단 후 맞춤 제작을 진행하면 49,000원을 또 내나요?", "아니요. 진단 결과를 받은 뒤 14일 안에 같은 업무의 맞춤 제작을 계약하면 진단비 49,000원을 전체 제작비에서 전액 차감합니다."],
      ["19만원부터 시작하는 제작에는 무엇이 포함되나요?", "입력 양식 1종, 출력 보고서 1종과 합의한 처리 규칙이 시작 상품의 기준입니다. 사용 안내, 합의 범위 내 수정 1회, 검수 완료 후 14일간 합의 기능 오류 수정을 포함합니다. 자료 확인 후 총금액과 세금 처리 기준을 견적서에서 확정합니다."],
      ["데모에 파일을 넣으면 어디로 보내지나요?", "데모는 브라우저 안에서 파일을 읽고 결과를 생성합니다. 파일을 서버에 업로드하거나 저장하지 않습니다. 새로고침하면 선택한 파일과 결과가 초기화됩니다."],
      ["AI 이용료가 계속 발생하나요?", "이 데모의 파일 취합과 검증에는 AI API를 사용하지 않습니다. 맞춤 제작에서 외부 유료 서비스가 필요한 경우, 계약 전에 별도로 안내합니다."],
      ["제작 기간은 얼마나 걸리나요?", "샘플 자료와 요구사항을 확인한 뒤 납기를 확정합니다. 파일 형식과 규칙의 복잡도에 따라 달라지며, 문의만으로 제작 일정이 확정되지는 않습니다."],
    ].map(([q, a]) => <details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</section>
    <section className="au-wrap au-demo-cta"><div><h2>합치기 전에 무엇을 확인해야 할까요?</h2><p>열 이름, 누락, 중복 후보를 작은 예시로 설명합니다.</p></div><Link className="au-button au-secondary" href="/automation/excel-csv-merge-guide">엑셀·CSV 취합 안내 읽기</Link></section>
    <section className="au-section au-wrap au-contact" id="contact"><div><p className="au-kicker">LET’S SIMPLIFY YOUR WORK</p><h2>지금 반복하는 일을<br />한 문장으로 알려주세요.</h2><p>파일 종류, 대략적인 개수, 원하는 결과만 있으면 됩니다.<br />진단이 맞는지부터 안내하겠습니다.</p><div className="au-actions"><a className="au-button au-primary" href="https://pf.kakao.com/_xosxkJX/chat" target="_blank" rel="noreferrer">카카오톡으로 상담 ↗</a><a className="au-button au-secondary" href="mailto:allweek@naver.com">이메일 문의</a></div></div><Inquiry /></section>
  </main>;
}
