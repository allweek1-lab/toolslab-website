import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads Terms of Service | ToolsLab",
  description: "Terms for the Trend Threads de-identified topic-discovery service.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell eyebrow="TERMS OF SERVICE" title="Trend Threads Terms of Service" summary="English is the primary terms language. A complete Korean version is provided below.">
      <div className="policy-meta">
        <span>Operator: ToolsLab (툴스랩), Republic of Korea</span>
        <span>Effective date: August 10, 2026</span>
      </div>

      <div lang="en">
        <PolicySection title="1. Nature of the service">
          <p>Trend Threads is an independent discovery tool that aggregates signals observed through the official Threads API into category rankings and reviewed reasons for rising topics. It does not copy or redistribute individual Threads posts, accounts, or media, and it is not affiliated with or endorsed by Meta or Threads.</p>
        </PolicySection>

        <PolicySection title="2. Internal indicators">
          <p>Ranks, score bands, velocity bands, and reasons are ToolsLab estimates calculated from official search-result position, topic breadth per collection opportunity, repeated observations, and bounded post-level trend strength.</p>
          <p>They are not view counts, a measure of all Threads users, a probability of virality, an investment indicator, a statement of factual accuracy, or an official Threads ranking.</p>
        </PolicySection>

        <PolicySection title="3. Use and storage">
          <p>Public topic rankings, category and language filters, time-range filters, on-device search, and saved topics are available without login. Saved topics stay on the device and contain no copies of posts.</p>
          <p>Selecting a topic opens the official threads.com topic-search page. Reading and interacting with the underlying content takes place on Threads and is subject to its terms and policies.</p>
        </PolicySection>

        <PolicySection title="4. API authorization and fail-closed availability">
          <p>Official source processing is available only while ToolsLab has the required approval, credentials, and feature flags. If authorization, freshness, safety, retention, or minimum-sample requirements cannot be verified, the app remains unavailable instead of showing stale posts, fabricated content, or an unapproved feed.</p>
        </PolicySection>

        <PolicySection title="5. Prohibited conduct">
          <p>Users must not attempt to identify a person from aggregate signals; engage in unlawful activity, infringement, harassment, threats, hate, or spam; make abusive automated requests; reverse engineer or bypass access controls; or interfere with service operations.</p>
        </PolicySection>

        <PolicySection title="6. Changes and limitation of purpose">
          <p>The initial service has no payment, advertising, copied post-detail feed, remote translation provider, or post-based push integration. Features may change or stop because of platform policy, law, security, or operational requirements.</p>
          <p>The service is an informational trend-discovery tool and does not replace legal, medical, investment, or other professional judgment. Continuous availability of every topic cannot be guaranteed when external services or search results change.</p>
        </PolicySection>

        <PolicySection title="7. Account termination and contact">
          <p>An optional account can be deleted from Settings. Questions may be sent to <a className="inline-link" href="mailto:allweek@naver.com">allweek@naver.com</a> or through the <a className="inline-link" href="/support">Support page</a>.</p>
        </PolicySection>

        <PolicySection title="8. Changes to these terms">
          <p>These terms may change when the service or applicable requirements change. Material changes will be announced before they take effect.</p>
        </PolicySection>
      </div>

      <div className="language-divider" lang="ko">
        <h2>한국어 이용약관</h2>
        <p>아래 한국어 안내는 위 영어 주 언어 약관과 동일한 서비스 경계를 설명합니다.</p>
      </div>

      <div lang="ko">
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
      </div>
    </LegalShell>
  );
}
