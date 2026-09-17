import Link from "next/link";
import { companyPageMetadata, JsonLd } from "../../site-metadata";
import styles from "./guide.module.css";

const title = "엑셀·CSV 파일 합치기: 누락·중복 확인과 자동화 방법";
export const metadata = companyPageMetadata(
  `${title} | 툴스랩`,
  "여러 엑셀·CSV 파일을 합칠 때 확인할 열 이름, 주문번호, 빈 수량, 중복 후보를 가상 예시로 설명합니다. 무료 데모와 맞춤 제작 범위도 확인하세요.",
  "/automation/excel-csv-merge-guide",
);

const rows = [
  ["A.csv", "A001", "2", "—"],
  ["A.csv", "A002", "1", "중복 후보"],
  ["B.csv", "A003", "빈칸", "수량 확인"],
  ["B.csv", "A004", "3", "—"],
  ["C.csv", "A002", "1", "중복 후보"],
  ["C.csv", "A005", "2", "—"],
];

export default function MergeGuide() {
  return <main id="main-content" className={`au-wrap ${styles.guide}`}>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: title, mainEntityOfPage: "https://toolslab.co.kr/automation/excel-csv-merge-guide", inLanguage: "ko-KR", datePublished: "2026-09-14", dateModified: "2026-09-14", author: { "@type": "Organization", name: "툴스랩", url: "https://toolslab.co.kr/" }, publisher: { "@id": "https://toolslab.co.kr/#organization", "@type": "Organization", name: "툴스랩" } }} />
    <nav aria-label="현재 위치" className={styles.breadcrumb}><Link href="/">툴스랩</Link><span>/</span><Link href="/automation">엑셀 자동화</Link><span>/ 취합 안내</span></nav>
    <header><p className="au-kicker">엑셀 취합 실무 안내</p><h1>{title}</h1><p className={styles.lead}>파일을 한 표로 모으는 일과, 그 표가 맞는지 확인하는 일은 함께 해야 합니다. 열 이름을 맞추고 원본 위치를 남긴 뒤, 누락 값과 중복 후보를 따로 확인하면 검토하기 쉬워집니다.</p><p className={styles.byline}>작성: 툴스랩 · <time dateTime="2026-09-14">2026년 9월 14일</time> · 아래 자료는 설명용 가상 예시입니다.</p></header>
    <section><h2>파일 3개를 합치면 무엇이 달라지나요?</h2><p>A.csv, B.csv, C.csv에 각각 2행이 있다면, 합친 결과는 우선 6행입니다. 같은 주문번호가 보인다고 바로 지우거나, 빈 수량을 0으로 채우지는 않습니다.</p>
      <div className={styles.flow} aria-label="파일 세 개를 통합한 뒤 확인 항목을 표시"><span>A.csv + B.csv + C.csv</span><b aria-hidden="true">→</b><span>통합 6행</span><b aria-hidden="true">→</b><span>누락·중복 후보 검토</span></div>
      <div className={styles.tableWrap}><table><caption>설명용 통합 결과: 주문번호만 비교한 예시</caption><thead><tr><th scope="col">원본 파일</th><th scope="col">주문번호</th><th scope="col">수량</th><th scope="col">확인할 내용</th></tr></thead><tbody>{rows.map((row, index) => <tr key={index}>{row.map((cell, column) => <td key={column}>{cell}</td>)}</tr>)}</tbody></table></div>
      <p><strong>수량 누락은 1행, 중복 후보는 2행입니다.</strong> A002 두 행은 하나의 중복 후보 그룹입니다. 원본을 확인해 실제 중복인지, 같은 주문의 별도 품목인지 결정해야 합니다. 공개 데모는 지점별 실적 자료에서 ‘지점 + 기록번호’를 비교하므로 이 주문 예시와 입력 양식·결과 수치는 다릅니다.</p>
    </section>
    <section><h2>합치기 전에 정할 4가지</h2><ol><li><strong>열의 의미:</strong> ‘수량’과 ‘개수’가 같은 뜻인지, ‘금액’이 단가인지 합계인지 확인합니다. 이름만 비슷하다고 합치면 잘못된 집계가 됩니다.</li><li><strong>값의 형식:</strong> 주문번호의 앞자리 0은 보존하고, 날짜·통화·천 단위 구분 방식을 맞춥니다. 빈칸은 값이 없는 상태이며 자동으로 0과 같아지지 않습니다.</li><li><strong>중복 기준:</strong> 주문번호만 비교할지, 품목이나 날짜까지 함께 비교할지 정합니다. 삭제가 필요하면 원본과 삭제 내역을 보존합니다.</li><li><strong>대조 방법:</strong> 입력 행 수와 결과 행 수, 원본 파일·행 번호, 합의한 합계를 비교합니다. 확인되지 않은 값은 검토 목록에 남깁니다.</li></ol></section>
    <section><h2>직접 합칠까요, 맞춤 도구를 만들까요?</h2><p>가끔 소량을 처리한다면 복사 후 대조하는 방법으로도 충분할 수 있습니다. 같은 구조의 파일이 반복해서 쌓이고 Excel 환경에서 처리하고 싶다면 Power Query의 폴더 가져오기를 검토할 수 있습니다. 열 이름 변경, 별도 검증 규칙, 정해진 보고서 양식까지 반복된다면 맞춤 도구의 범위를 상담할 수 있습니다.</p><p>Excel의 폴더 취합 설정은 <a href="https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query" target="_blank" rel="noreferrer">Microsoft 공식 Power Query 안내</a>에서 확인할 수 있습니다. 어떤 방법이든 처음에는 작은 샘플로 결과를 대조하세요. 파일 수가 많다는 이유만으로 제작부터 시작할 필요는 없습니다.</p></section>
    <section><h2>무료 데모에서 확인할 수 있는 것</h2><p>툴스랩 데모는 기록번호·지점·일자·항목·금액, 정해진 5개 열의 CSV·XLSX 자료를 취합하고, 검토 목록과 지점별 요약을 포함한 4개 시트의 엑셀을 만듭니다. 원본 파일명과 행 번호도 남깁니다. 모든 회사의 양식을 그대로 처리하는 범용 도구는 아닙니다.</p><ul><li>회원가입 없이 가상 샘플로 실행할 수 있습니다.</li><li>직접 넣는 파일은 최대 10개, 개별 5MB, 전체 20MB입니다. 세부 행 수 제한과 필수 열은 데모에서 확인할 수 있습니다.</li><li>파일은 브라우저에서 처리하며 서버로 업로드하지 않습니다. XLS·XLSM과 암호화된 파일은 지원하지 않습니다.</li></ul><Link className="au-button au-primary" href="/automation/demo">가상 샘플로 결과 확인</Link></section>
    <section className={styles.contact}><h2>지금 쓰는 양식으로 만들고 싶다면</h2><p>내 파일로 확인하는 <strong>진단·작동 샘플은 49,000원</strong>, 반복 작업 1개와 입력·출력 양식 각 1종 기준 맞춤 제작은 <strong>19만원부터</strong> 상담합니다. 같은 업무의 제작을 14일 안에 진행하면 진단비를 전액 차감합니다.</p><p>개인정보를 가상 값으로 바꾼 입력 샘플, 원하는 결과 예시, 처리 주기와 대략적인 파일 수를 준비해 주세요. 제작 범위와 수정 조건을 먼저 확인할 수 있습니다.</p><Link className="au-button au-primary" href="/automation#diagnosis">49,000원 진단 확인</Link><Link className={styles.scopeLink} href="/automation#pricing">가격과 포함 범위 확인</Link></section>
  </main>;
}
