import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads Terms of Service | ToolsLab",
  description: "Terms for the Trend Threads connected-user automatic individual-post discovery service.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell eyebrow="TERMS OF SERVICE" title="Trend Threads Terms of Service" summary="English is the primary terms language. A complete Korean version is provided below.">
      <div className="policy-meta">
        <span>Operator: ToolsLab (툴스랩), Republic of Korea</span>
        <span>Effective date: August 24, 2026</span>
      </div>

      <div lang="en">
        <PolicySection title="1. Nature of the connected-user service">
          <p>Trend Threads is an independent, unofficial discovery tool that finds public Threads posts in a category requested by the connected user and ranks individual posts as Rising or Popular.</p>
          <p>Trend Threads is not affiliated with or endorsed by Meta or Threads. It temporarily displays safety-filtered text-post search results for the requesting connected user, but does not copy, redistribute, display, or download media.</p>
        </PolicySection>

        <PolicySection title="2. Account connection and required permissions">
          <p>Automatic rankings are prepared only while the user is signed in to Trend Threads, has granted <code>threads_basic</code> and <code>threads_keyword_search</code> with the user&apos;s own Threads account, has explicitly enabled the feature, and the connection remains valid.</p>
          <p><code>threads_basic</code> verifies and displays the app-scoped connected account and supports account binding, expiry, reconnection, disconnect, and deletion. <code>threads_keyword_search</code> performs only the automatic-ranking searches explicitly enabled by that connected user or an optional precise manual measurement the user starts.</p>
        </PolicySection>

        <PolicySection title="3. Internal rankings and official Threads handoff">
          <p>The automatic queue rotates one reviewed term for each of ten categories, compares the same RECENT search at least 61 seconds apart, and refreshes on a staggered cadence of about 60 minutes. Rising includes only individual posts that newly appeared or gained search position. If none rose, current leaders from the same RECENT search are explicitly labeled Popular now and are not represented as rising.</p>
          <p>Scores and percentages are internal search-visibility estimates, not platform-wide views, likes, engagement counts, official Threads rankings, guarantees of popularity, statements of factual accuracy, or investment advice. Selecting a ranked post opens its exact official permalink on Threads.</p>
          <p>Automatic baselines and completed snapshots are stored briefly only as owner-, category-, language-, and purpose-bound AES-256-GCM ciphertext, become stale after 75 minutes, and are deleted no later than two hours after observation. Results are not stored in device cache, analytics, advertising systems, or any public or cross-user aggregate, and media is not copied or downloaded.</p>
        </PolicySection>

        <PolicySection title="4. Fail-closed availability">
          <p>If the Threads account is not connected or authorization, safety, freshness, or result integrity cannot be verified, the app shows a failure state. It does not substitute an operator token, public operator aggregates, cached operator results, fabricated content, or test data.</p>
        </PolicySection>

        <PolicySection title="5. User responsibilities">
          <p>Users must not make abusive automated requests; attempt to identify or profile a person from ranked signals; engage in unlawful activity, infringement, harassment, threats, hate, or spam; reverse engineer or bypass access controls; or interfere with service operations.</p>
        </PolicySection>

        <PolicySection title="6. Changes and limitation of purpose">
          <p>The initial service has no payment, advertising, media-copying feed, remote translation provider, or post-based push integration. Features may change or stop because of platform policy, law, security, or operational requirements.</p>
          <p>The service is an informational trend-discovery tool and does not replace legal, medical, investment, or other professional judgment. Continuous availability of every category, search term, or result cannot be guaranteed when external services or search results change.</p>
        </PolicySection>

        <PolicySection title="7. Disconnect, account termination, and contact">
          <p>Automatic rankings can be turned off, the optional Threads connection can be disconnected, and the Trend Threads account can be deleted from Settings. Turning the feature off removes pending jobs and encrypted baselines and snapshots. Disconnecting additionally removes the encrypted token, account binding, automatic-ranking preference, and pending OAuth state, but does not delete the user&apos;s Threads account. Questions may be sent to <a className="inline-link" href="mailto:allweek@naver.com">allweek@naver.com</a> or through the <a className="inline-link" href="/support">Support page</a>.</p>
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
          <p>Trend Threads는 연결한 사용자가 요청한 분야의 공개 Threads 게시물을 찾아 개별 게시물을 급상승 또는 인기 순위로 보여주는 독립적인 비공식 발견 도구입니다.</p>
          <p>Meta 또는 Threads와 제휴하거나 보증받은 서비스가 아닙니다. 요청한 연결 사용자에게 안전 필터를 통과한 텍스트 게시물 검색 결과를 일시 표시하지만 미디어를 복제·재배포·표시·다운로드하지 않습니다.</p>
        </PolicySection>

        <PolicySection title="2. 계정 연결과 필요한 권한">
          <p>사용자가 Trend Threads에 로그인하고 자신의 Threads 계정으로 <code>threads_basic</code>과 <code>threads_keyword_search</code>를 승인하고 자동 순위를 명시적으로 켠 상태에서 연결이 유효한 동안에만 자동 순위를 준비합니다.</p>
          <p><code>threads_basic</code>은 앱 범위 연결 계정을 확인·표시하고 계정 binding, 만료, 재연결, 연결 해제와 삭제를 지원합니다. <code>threads_keyword_search</code>는 연결 사용자가 명시적으로 켠 자동 순위 검색 또는 사용자가 시작한 선택적 정밀 수동 측정에만 사용합니다.</p>
        </PolicySection>

        <PolicySection title="3. 자체 순위와 공식 Threads 이동">
          <p>자동 queue는 10개 분야마다 검토 검색어 1개를 순환 선택하고 같은 RECENT 검색을 61초 이상 간격으로 비교하며 약 60분마다 분산 갱신합니다. 새로 나타났거나 검색 위치가 상승한 개별 게시물만 급상승에 포함합니다. 상승 글이 없으면 같은 RECENT 검색의 현재 상위를 현재 인기 게시물로 명확히 구분하며 급상승으로 표현하지 않습니다.</p>
          <p>점수와 상승률은 내부 검색 가시성 추정이며 플랫폼 전체 조회 수, 좋아요 수, 참여 수, Threads 공식 순위, 인기 보장, 사실 보증 또는 투자 조언이 아닙니다. 순위 게시물을 누르면 Threads의 정확한 공식 permalink를 엽니다.</p>
          <p>자동 baseline과 완성 snapshot은 사용자·분야·언어·용도에 결합된 AES-256-GCM 암호문으로만 단기 저장하고 75분 후 오래된 상태가 되며 관찰 후 최대 2시간 안에 삭제합니다. 결과는 기기 cache, analytics, 광고 시스템 또는 공개·사용자 간 집계에 저장하지 않고 미디어를 복제·다운로드하지 않습니다.</p>
        </PolicySection>

        <PolicySection title="4. 실패 시 대체하지 않는 원칙">
          <p>Threads 계정을 연결하지 않았거나 권한·안전성·최신성·결과 무결성을 확인할 수 없으면 앱은 실패 상태를 표시합니다. 운영자 토큰, 공개 운영자 집계, 운영자 cache, 임의 콘텐츠 또는 테스트 데이터로 대체하지 않습니다.</p>
        </PolicySection>

        <PolicySection title="5. 이용자 책임">
          <p>비정상적인 자동 요청, 순위 신호를 이용한 개인 식별·프로파일링 시도, 불법 행위, 권리 침해, 괴롭힘, 위협, 혐오, 스팸, 역공학, 접근 통제 우회 또는 서비스 운영 방해 행위를 해서는 안 됩니다.</p>
        </PolicySection>

        <PolicySection title="6. 기능 변경과 책임 범위">
          <p>초기 서비스에는 결제, 광고, 미디어 복제 피드, 원격 번역 제공자 또는 게시물 기반 푸시 알림이 연결되어 있지 않습니다. 플랫폼 정책, 법률, 보안 또는 운영상 필요에 따라 기능을 변경하거나 중단할 수 있습니다.</p>
          <p>서비스는 트렌드 탐색을 돕는 정보 도구이며 법률·의료·투자 등 전문 판단을 대신하지 않습니다. 외부 서비스 중단이나 검색 결과 변화로 모든 분야, 검색어 또는 결과의 계속적인 제공을 보장할 수는 없습니다.</p>
        </PolicySection>

        <PolicySection title="7. 연결 해제, 계정 종료와 문의">
          <p>자동 순위 끄기, 선택적 Threads 연결 해제와 Trend Threads 계정 삭제는 설정에서 진행할 수 있습니다. 자동 순위를 끄면 대기 작업과 암호화 baseline·snapshot을 삭제합니다. 연결 해제는 암호화 token, 계정 연결, 자동 순위 설정과 OAuth state도 삭제하지만 사용자의 Threads 계정은 삭제하지 않습니다. 약관 또는 정책 문의는 <a className="inline-link" href="mailto:allweek@naver.com">allweek@naver.com</a> 또는 <a className="inline-link" href="/support">지원 페이지</a>를 이용해 주세요.</p>
        </PolicySection>

        <PolicySection title="8. 약관 변경">
          <p>서비스 내용이나 관련 요구사항의 변경에 따라 이 약관을 수정할 수 있습니다. 중요한 변경은 시행 전에 앱 또는 이 페이지에서 안내합니다.</p>
        </PolicySection>
      </div>
    </LegalShell>
  );
}
