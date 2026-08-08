import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads 이용약관 | ToolsLab",
  description: "Trend Threads 주제 순위 서비스의 성격과 이용 조건을 안내합니다.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell eyebrow="TERMS OF SERVICE" title="Trend Threads 이용약관" summary="Trend Threads를 이용하기 전에 주제 집계 서비스의 성격과 이용 조건을 확인해 주세요.">
      <div className="policy-meta">
        <span>운영주체: 툴스랩 (ToolsLab)</span>
        <span>시행일: 2026년 8월 9일</span>
      </div>

      <PolicySection title="1. 서비스 성격">
        <p>Trend Threads는 공식 Threads API에서 관측한 신호를 집계해 지금 떠오르는 주제의 분야별 순위와 상승 이유를 보여주는 비공식 탐색 도구입니다. 개별 Threads 게시물·계정·미디어를 복제하거나 재배포하지 않으며 Meta 또는 Threads와 제휴한 공식 서비스가 아닙니다.</p>
      </PolicySection>

      <PolicySection title="2. 자체 지표 안내">
        <p>순위, 점수 구간, 변화 구간과 상승 이유는 공식 검색 결과 위치, 수집 기회당 주제 폭, 반복 포착과 게시물별 추세 강도를 바탕으로 계산한 ToolsLab의 자체 추정값입니다.</p>
        <p>이 값은 조회수, 전체 Threads 이용자의 관심도, 바이럴 확률, 투자 지표, 사실의 정확성 또는 Threads 공식 순위를 의미하지 않습니다.</p>
      </PolicySection>

      <PolicySection title="3. 이용 방법과 저장">
        <p>공개 주제 순위, 분야·언어·기간 필터, 기기 내 검색과 주제 저장은 로그인 없이 이용할 수 있습니다. 저장한 주제는 해당 기기에 보관되며 게시물 사본을 포함하지 않습니다.</p>
        <p>주제 카드를 누르면 공식 threads.com 주제 검색 화면이 열립니다. 실제 글의 열람과 상호작용은 Threads에서 이루어지며 Threads의 약관과 정책이 적용됩니다.</p>
      </PolicySection>

      <PolicySection title="4. 데이터 권한과 서비스 중단">
        <p>공식 원천 데이터 처리는 ToolsLab이 필요한 API 권한, 자격 증명과 기능 플래그를 보유한 동안에만 제공됩니다. 권한, 최신성, 안전성 또는 최소 표본 기준을 확인할 수 없으면 앱은 과거 게시물이나 임의 데이터를 대신 표시하지 않고 준비 상태로 닫힙니다.</p>
      </PolicySection>

      <PolicySection title="5. 이용 제한">
        <p>집계 신호로 개인을 식별하려는 시도, 불법 행위, 권리 침해, 괴롭힘, 위협, 혐오, 스팸, 비정상적인 자동 요청, 역공학, 접근 통제 우회 또는 서비스 운영을 방해하는 행위를 해서는 안 됩니다.</p>
      </PolicySection>

      <PolicySection title="6. 기능 변경과 책임 범위">
        <p>초기 서비스에는 결제, 광고, 게시물 상세 복제, 실제 번역 제공자 또는 게시물 기반 푸시 알림이 연결되어 있지 않습니다. 플랫폼 정책, 법률, 보안 또는 운영상 필요에 따라 기능을 변경하거나 중단할 수 있습니다.</p>
        <p>서비스는 트렌드 탐색을 돕는 정보 도구이며 법률·의료·투자 등 전문 판단을 대신하지 않습니다. 외부 서비스 중단이나 검색 결과 변화로 모든 주제의 계속적인 제공을 보장할 수는 없습니다.</p>
      </PolicySection>

      <PolicySection title="7. 계정 종료와 문의">
        <p>선택적으로 만든 계정 삭제는 앱 설정에서 진행할 수 있습니다. 약관 또는 정책 문의는 <a className="inline-link" href="mailto:allweek@naver.com">allweek@naver.com</a> 또는 <a className="inline-link" href="/support">지원 페이지</a>를 이용해 주세요.</p>
      </PolicySection>

      <PolicySection title="8. 약관 변경">
        <p>서비스 내용이나 관련 요구사항의 변경에 따라 이 약관을 수정할 수 있습니다. 중요한 변경은 시행 전에 앱 또는 이 페이지에서 안내합니다.</p>
      </PolicySection>
    </LegalShell>
  );
}
