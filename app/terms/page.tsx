import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads Terms of Service | ToolsLab",
  description: "Terms for the Trend Threads connected-user live topic-discovery service.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell eyebrow="TERMS OF SERVICE" title="Trend Threads Terms of Service" summary="English is the primary terms language. A complete Korean version is provided below.">
      <div className="policy-meta">
        <span>Operator: ToolsLab (툴스랩), Republic of Korea</span>
        <span>Effective date: August 22, 2026</span>
      </div>

      <div lang="en">
        <PolicySection title="1. Nature of the connected-user service">
          <p>Trend Threads is an independent, unofficial discovery tool. A connected user requests a category, the service checks six controlled topics through the official Threads search, and it shows their current 1–6 activity ranking.</p>
          <p>Trend Threads is not affiliated with or endorsed by Meta or Threads and does not copy or redistribute Threads posts, accounts, profiles, or media.</p>
        </PolicySection>

        <PolicySection title="2. Account connection and required permissions">
          <p>A live ranking is calculated only while the user is signed in to Trend Threads, has granted <code>threads_basic</code> and <code>threads_keyword_search</code> with the user&apos;s own Threads account, and the connection remains valid.</p>
          <p><code>threads_basic</code> verifies and displays the app-scoped connected account and supports account binding, expiry, reconnection, disconnect, and deletion. <code>threads_keyword_search</code> performs the six live topic checks requested by that connected user.</p>
        </PolicySection>

        <PolicySection title="3. Internal rankings and official Threads handoff">
          <p>Ranks and five-point bands are coarse ToolsLab estimates for the six requested controlled topics at that time. They are not platform-wide view counts, official Threads rankings, a guarantee of popularity, a statement of factual accuracy, or investment advice.</p>
          <p>Trend Threads does not reproduce posts or account content from search responses. Selecting a ranked topic opens the official threads.com search so actual content remains on Threads and is subject to its terms and policies.</p>
        </PolicySection>

        <PolicySection title="4. Fail-closed availability">
          <p>If the Threads account is not connected or authorization, safety, freshness, or result integrity cannot be verified, the app shows a failure state. It does not substitute an operator token, public operator aggregates, cached operator results, fabricated content, or test data.</p>
        </PolicySection>

        <PolicySection title="5. User responsibilities">
          <p>Users must not make abusive automated requests; attempt to identify or profile a person from ranked signals; engage in unlawful activity, infringement, harassment, threats, hate, or spam; reverse engineer or bypass access controls; or interfere with service operations.</p>
        </PolicySection>

        <PolicySection title="6. Changes and limitation of purpose">
          <p>The initial service has no payment, advertising, copied post-detail feed, remote translation provider, or post-based push integration. Features may change or stop because of platform policy, law, security, or operational requirements.</p>
          <p>The service is an informational trend-discovery tool and does not replace legal, medical, investment, or other professional judgment. Continuous availability of every category or topic cannot be guaranteed when external services or search results change.</p>
        </PolicySection>

        <PolicySection title="7. Disconnect, account termination, and contact">
          <p>The optional Threads connection can be disconnected and the Trend Threads account can be deleted from Settings. Disconnecting does not delete the user&apos;s Threads account. Questions may be sent to <a className="inline-link" href="mailto:allweek@naver.com">allweek@naver.com</a> or through the <a className="inline-link" href="/support">Support page</a>.</p>
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
        <PolicySection title="1. 연결 사용자 서비스의 성격">
          <p>Trend Threads는 독립적인 비공식 발견 도구입니다. 연결한 사용자가 카테고리를 요청하면 공식 Threads 검색으로 통제 주제 6개를 확인하고 현재 활동 1~6위를 보여줍니다.</p>
          <p>Meta 또는 Threads와 제휴하거나 보증받은 서비스가 아니며 Threads 게시물, 계정, 프로필 또는 미디어를 복제하거나 재배포하지 않습니다.</p>
        </PolicySection>

        <PolicySection title="2. 계정 연결과 필요한 권한">
          <p>사용자가 Trend Threads에 로그인하고 자신의 Threads 계정으로 <code>threads_basic</code>과 <code>threads_keyword_search</code>를 승인한 상태에서 연결이 유효한 동안에만 실시간 순위를 계산합니다.</p>
          <p><code>threads_basic</code>은 앱 범위 연결 계정을 확인·표시하고 계정 binding, 만료, 재연결, 연결 해제와 삭제를 지원합니다. <code>threads_keyword_search</code>는 연결 사용자가 요청한 여섯 실시간 주제 확인을 수행합니다.</p>
        </PolicySection>

        <PolicySection title="3. 자체 순위와 공식 Threads 이동">
          <p>순위와 5점 단위 구간은 사용자가 요청한 여섯 통제 주제에 대한 해당 시점의 거친 ToolsLab 자체 추정값입니다. 플랫폼 전체 조회 수, Threads 공식 순위, 인기도 보장, 사실의 정확성 또는 투자 조언이 아닙니다.</p>
          <p>검색 응답의 게시물·계정 콘텐츠를 복제하지 않습니다. 순위 주제를 선택하면 공식 threads.com 검색을 열며 실제 콘텐츠는 Threads에 남고 Threads의 약관과 정책이 적용됩니다.</p>
        </PolicySection>

        <PolicySection title="4. 실패 시 대체하지 않는 원칙">
          <p>Threads 계정을 연결하지 않았거나 권한·안전성·최신성·결과 무결성을 확인할 수 없으면 앱은 실패 상태를 표시합니다. 운영자 토큰, 공개 운영자 집계, 운영자 cache, 임의 콘텐츠 또는 테스트 데이터로 대체하지 않습니다.</p>
        </PolicySection>

        <PolicySection title="5. 이용자 책임">
          <p>비정상적인 자동 요청, 순위 신호를 이용한 개인 식별·프로파일링 시도, 불법 행위, 권리 침해, 괴롭힘, 위협, 혐오, 스팸, 역공학, 접근 통제 우회 또는 서비스 운영 방해 행위를 해서는 안 됩니다.</p>
        </PolicySection>

        <PolicySection title="6. 기능 변경과 책임 범위">
          <p>초기 서비스에는 결제, 광고, 게시물 상세 복제, 원격 번역 제공자 또는 게시물 기반 푸시 알림이 연결되어 있지 않습니다. 플랫폼 정책, 법률, 보안 또는 운영상 필요에 따라 기능을 변경하거나 중단할 수 있습니다.</p>
          <p>서비스는 트렌드 탐색을 돕는 정보 도구이며 법률·의료·투자 등 전문 판단을 대신하지 않습니다. 외부 서비스 중단이나 검색 결과 변화로 모든 카테고리나 주제의 계속적인 제공을 보장할 수는 없습니다.</p>
        </PolicySection>

        <PolicySection title="7. 연결 해제, 계정 종료와 문의">
          <p>선택적 Threads 연결 해제와 Trend Threads 계정 삭제는 설정에서 진행할 수 있습니다. 연결 해제는 사용자의 Threads 계정을 삭제하지 않습니다. 약관 또는 정책 문의는 <a className="inline-link" href="mailto:allweek@naver.com">allweek@naver.com</a> 또는 <a className="inline-link" href="/support">지원 페이지</a>를 이용해 주세요.</p>
        </PolicySection>

        <PolicySection title="8. 약관 변경">
          <p>서비스 내용이나 관련 요구사항의 변경에 따라 이 약관을 수정할 수 있습니다. 중요한 변경은 시행 전에 앱 또는 이 페이지에서 안내합니다.</p>
        </PolicySection>
      </div>
    </LegalShell>
  );
}
