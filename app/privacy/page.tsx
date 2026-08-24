import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads Privacy Policy | ToolsLab",
  description: "How Trend Threads handles connected-user authorization, automatic individual-post rankings, retention, service providers, and deletion requests.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="PRIVACY POLICY"
      title="Trend Threads Privacy Policy"
      summary="English is the primary policy language. A complete Korean version is provided below. Trend Threads prepares temporary individual-post rankings only for a signed-in user who connects their own Threads account and explicitly enables the feature."
    >
      <div className="policy-meta">
        <span>Operator: ToolsLab (툴스랩), Republic of Korea</span>
        <span>Effective date: August 24, 2026</span>
      </div>

      <div lang="en">
        <PolicySection title="1. Trend Threads account and optional Threads connection">
          <p>A Trend Threads account is required for the connected-user automatic ranking. Supabase processes the email address, authentication state, internal user identifier, account preferences, and consent records needed for authentication, security, synchronization, and deletion.</p>
          <p>If you choose to connect Threads, Trend Threads requests <code>threads_basic</code> and <code>threads_keyword_search</code> through Meta&apos;s official user authorization flow. <code>threads_basic</code> verifies the consenting app-scoped account identity and supports correct account binding, expiry, reconnection, disconnect, and deletion. <code>threads_keyword_search</code> is used only after the signed-in connected user explicitly enables automatic rankings or starts an optional precise manual measurement.</p>
        </PolicySection>

        <PolicySection title="2. Authorization and token protection">
          <p>The authorization code is exchanged only by our HTTPS backend. The Threads access token is encrypted separately for each Trend Threads user with AES-256-GCM at rest. It is never sent to the mobile app, placed in a callback URL, included in analytics, used for advertising, or shared with another Trend Threads user.</p>
          <p>The optional Threads connection is used only to verify the account that gave consent, provide the connected-user rankings, manage token expiry and reconnection, prevent conflicting account bindings, and honor disconnect or deletion requests.</p>
        </PolicySection>

        <PolicySection title="3. Automatic individual-post rankings and data minimization">
          <p>After the user explicitly enables automatic rankings, an owner-specific deduplicated queue rotates one reviewed term for each of ten categories and compares the same RECENT search at least 61 seconds apart using only that user&apos;s encrypted token. It refreshes on a staggered cadence of about 60 minutes. Only individual posts that newly appeared or gained search position are labeled Rising. If none rose, current leaders from the same RECENT search are explicitly labeled Popular now and are not represented as rising.</p>
          <p>Each search is limited to 25 text posts. Our backend validates the post ID, username, text, official permalink, publication time, and result position and returns only safety-filtered results to that signed-in requester. The app displays temporary individual text-post cards and opens the exact original permalink on Threads. Media is not displayed, copied, or downloaded.</p>
          <p>The automatic baseline and completed owner-specific snapshot are stored briefly only as owner-, category-, language-, and purpose-bound AES-256-GCM ciphertext. A snapshot becomes stale after 75 minutes and is deleted no later than two hours after observation. Post results are not stored in device cache, analytics, advertising systems, or any public or cross-user aggregate. Media and exact result counts are not stored in snapshots.</p>
          <p>An optional precise manual measurement uses six reviewed terms. Its result content and observations are not retained in the server database or device cache. Rising scores and percentages are internal search-visibility measurements; Popular now scores are internal current-search estimates. Neither is an official Threads view, like, engagement count, or ranking.</p>
          <p>The connected-user flow does not fall back to an operator token, test data, public operator aggregates, or cached operator results. If authorization, safety, or freshness cannot be verified, the request fails closed.</p>
        </PolicySection>

        <PolicySection title="4. Retention and deletion">
          <ul>
            <li>The encrypted Threads token and account binding are retained only while the connection remains active.</li>
            <li>Pending OAuth state is short-lived and is deleted after completion, expiry, disconnect, or account deletion.</li>
            <li>A content-free service lifecycle receipt containing the Trend Threads user ID, requested category and mode, language, success or reviewed error code, and timestamps may be retained for up to 24 hours for abuse prevention and reliability. It contains no post or observation content.</li>
            <li>Turning automatic rankings off deletes pending jobs and encrypted baselines and snapshots.</li>
            <li>Disconnect deletes the encrypted token, Threads account binding, automatic-ranking preference, pending jobs, encrypted baselines and snapshots, and pending OAuth state. Deleting the Trend Threads account also removes the connection and owned lifecycle receipts through the account-deletion process.</li>
          </ul>
        </PolicySection>

        <PolicySection title="5. On-device data and analytics">
          <p>Display language, content language, recent searches, saved categories, and preferences may be stored on the device. Prepared post-result content and observations are not written to the device cache. Local activity can be removed from Settings.</p>
          <p>Usage analytics remains off unless an authenticated user expressly opts in. Threads access tokens, provider result content, and live keyword-search results are excluded from analytics events.</p>
        </PolicySection>

        <PolicySection title="6. Service providers and transfers">
          <ul>
            <li><strong>Supabase, Inc.:</strong> Tokyo-region database, Edge Functions, authentication, encrypted server-side token storage, and lifecycle records.</li>
            <li><strong>Vercel Inc.:</strong> hosting for these public policy pages.</li>
            <li><strong>Meta Threads API:</strong> provider of user authorization and the official keyword-search response, and Threads is the destination for the exact original-post handoff.</li>
          </ul>
          <p>ToolsLab does not sell Meta Platform Data or use it for targeted advertising. The initial service does not send Meta Platform Data to OpenAI, advertising providers, data brokers, or remote translation providers. Cloud infrastructure may involve cross-border processing under the providers&apos; contractual and security controls.</p>
        </PolicySection>

        <PolicySection title="7. User choices and official Threads handoff">
          <p>You can disconnect Threads, delete local activity, or delete your Trend Threads account from Settings. If you cannot sign in, follow the <a className="inline-link" href="/data-deletion">Account and Data Deletion page</a>.</p>
          <p>Selecting a ranked post opens that post&apos;s exact official Threads permalink. Content viewed after that handoff is provided by Threads and is subject to its terms and policies. Disconnecting Trend Threads does not delete the user&apos;s Threads account or content.</p>
        </PolicySection>

        <PolicySection title="8. Contact and policy changes">
          <dl className="contact-list">
            <div><dt>Operator</dt><dd>ToolsLab (툴스랩)</dd></div>
            <div><dt>Email</dt><dd><a href="mailto:allweek@naver.com">allweek@naver.com</a></dd></div>
            <div><dt>Phone</dt><dd><a href="tel:07043503571">+82 70-4350-3571</a></dd></div>
          </dl>
          <p>Do not send a password, authentication code, or Threads access token by email. This policy may change when the service or legal requirements change; material changes will be announced and the effective date will be updated.</p>
        </PolicySection>
      </div>

      <div className="language-divider" lang="ko">
        <h2>한국어 개인정보 처리방침</h2>
        <p>아래 한국어 안내는 위 영어 주 언어 방침과 동일한 서비스 경계를 설명합니다.</p>
      </div>

      <div lang="ko">
        <PolicySection title="1. Trend Threads 계정과 선택적 Threads 연결">
          <p>연결 사용자 자동 순위를 사용하려면 Trend Threads 계정이 필요합니다. Supabase는 인증, 보안, 동기화와 삭제에 필요한 이메일 주소, 인증 상태, 내부 사용자 식별자, 계정 환경설정과 동의 기록을 처리합니다.</p>
          <p>사용자가 Threads를 연결하면 Trend Threads는 Meta의 공식 사용자 승인 흐름으로 <code>threads_basic</code>과 <code>threads_keyword_search</code>를 요청합니다. <code>threads_basic</code>은 동의한 앱 범위 계정 식별자를 확인하고 올바른 계정 연결, 만료, 재연결, 연결 해제와 삭제를 관리합니다. <code>threads_keyword_search</code>는 로그인하고 연결한 사용자가 자동 순위를 명시적으로 켜거나 선택적 정밀 수동 측정을 시작한 경우에만 사용합니다.</p>
        </PolicySection>

        <PolicySection title="2. 승인과 토큰 보호">
          <p>인증 코드는 HTTPS 백엔드에서만 교환합니다. Threads 액세스 토큰은 Trend Threads 사용자별로 AES-256-GCM 암호화해 저장합니다. 모바일 앱, callback URL, analytics 또는 광고에 전달하지 않고 다른 Trend Threads 사용자와 공유하지 않습니다.</p>
          <p>선택적 Threads 연결은 동의한 계정 확인, 연결 사용자 순위 제공, 토큰 만료·재연결 관리, 충돌하는 계정 연결 방지와 연결 해제·삭제 요청 처리 목적으로만 사용합니다.</p>
        </PolicySection>

        <PolicySection title="3. 자동 개별 게시물 순위와 데이터 최소화">
          <p>사용자가 자동 순위를 명시적으로 켜면 사용자 전용 중복 방지 queue가 10개 분야마다 검토 검색어 1개를 순환 선택하고 해당 사용자의 암호화 token만으로 같은 RECENT 검색을 61초 이상 간격으로 비교합니다. 준비 순위는 약 60분마다 분산 갱신합니다. 새로 나타났거나 검색 위치가 상승한 개별 게시물만 급상승으로 표시합니다. 상승 글이 없으면 같은 RECENT 검색의 현재 상위를 현재 인기 게시물로 명확히 구분하며 급상승으로 표현하지 않습니다.</p>
          <p>각 검색은 텍스트 게시물 최대 25개로 제한합니다. 백엔드는 게시물 ID, 사용자 이름, 본문, 공식 permalink, 게시 시각과 검색 위치를 검증하고 안전 필터를 통과한 결과만 로그인한 요청자에게 반환합니다. 앱은 개별 텍스트 게시물 카드를 일시 표시하고 Threads의 정확한 원문 permalink를 엽니다. 미디어는 표시·복제·다운로드하지 않습니다.</p>
          <p>자동 baseline과 완성된 사용자별 snapshot은 사용자·분야·언어·용도에 결합된 AES-256-GCM 암호문으로만 단기 저장합니다. snapshot은 75분 후 오래된 상태가 되고 관찰 후 최대 2시간 안에 삭제합니다. 게시물 결과는 기기 cache, analytics, 광고 시스템 또는 공개·사용자 간 집계에 저장하지 않습니다. 미디어와 정확한 결과 수는 snapshot에 저장하지 않습니다.</p>
          <p>선택적 정밀 수동 측정은 검토 검색어 6개를 사용하며 결과 콘텐츠와 관찰을 서버 DB나 기기 cache에 보관하지 않습니다. 급상승 점수와 상승률은 내부 검색 가시성 지표이고 현재 인기 점수는 현재 검색 결과의 내부 추정입니다. 어느 값도 Threads 공식 조회수, 좋아요 수, 참여 수 또는 공식 순위가 아닙니다.</p>
          <p>연결 사용자 흐름은 운영자 토큰, 테스트 데이터, 공개 운영자 집계 또는 운영자 cache로 대체하지 않습니다. 권한·안전성·최신성을 확인할 수 없으면 요청은 실패 상태로 종료됩니다.</p>
        </PolicySection>

        <PolicySection title="4. 보관과 삭제">
          <ul>
            <li>암호화 Threads 토큰과 계정 연결은 연결 상태가 유효한 동안에만 보관합니다.</li>
            <li>대기 중 OAuth state는 단기간만 보관하며 완료, 만료, 연결 해제 또는 계정 삭제 시 제거합니다.</li>
            <li>악용 방지와 신뢰성 확인을 위해 Trend Threads 사용자 ID, 요청 분야와 모드, 언어, 성공 또는 검토된 오류 코드, 시각만 포함한 콘텐츠 없는 service lifecycle 기록을 최대 24시간 보관할 수 있습니다. 게시물이나 관찰 콘텐츠는 포함하지 않습니다.</li>
            <li>자동 순위를 끄면 대기 작업과 암호화 baseline·snapshot을 삭제합니다.</li>
            <li>연결 해제는 암호화 토큰, Threads 계정 연결, 자동 순위 설정, 대기 작업, 암호화 baseline·snapshot과 대기 중 OAuth state를 삭제합니다. Trend Threads 계정 삭제 시 연결과 사용자 소유 lifecycle 기록도 계정 삭제 절차를 통해 제거합니다.</li>
          </ul>
        </PolicySection>

        <PolicySection title="5. 기기 저장 정보와 사용 분석">
          <p>화면 언어, 콘텐츠 언어, 최근 검색어, 저장한 분야와 환경설정은 기기에 저장될 수 있습니다. 준비된 게시물 결과 콘텐츠와 관찰은 기기 cache에 기록하지 않으며 설정에서 로컬 활동을 삭제할 수 있습니다.</p>
          <p>사용 분석은 인증한 사용자가 명시적으로 동의하지 않는 한 꺼져 있습니다. Threads 액세스 토큰, provider 결과 콘텐츠와 실시간 키워드 검색 결과는 분석 이벤트에서 제외합니다.</p>
        </PolicySection>

        <PolicySection title="6. 처리업체와 국외 처리">
          <ul>
            <li><strong>Supabase, Inc.:</strong> Tokyo 리전 데이터베이스, Edge Functions, 인증, 암호화한 서버 토큰 저장과 lifecycle 기록</li>
            <li><strong>Vercel Inc.:</strong> 이 공개 정책 페이지의 호스팅</li>
            <li><strong>Meta Threads API:</strong> 사용자 승인과 공식 키워드 검색 응답의 제공자이며 Threads는 정확한 원문 게시물 이동의 목적지</li>
          </ul>
          <p>ToolsLab은 Meta 플랫폼 데이터를 판매하거나 맞춤 광고에 사용하지 않습니다. 초기 서비스는 Meta 플랫폼 데이터를 OpenAI, 광고 사업자, 데이터 브로커 또는 원격 번역 제공자에게 보내지 않습니다. 클라우드 인프라 이용 과정에서 각 처리업체의 계약·보안 통제에 따른 국외 처리가 발생할 수 있습니다.</p>
        </PolicySection>

        <PolicySection title="7. 이용자 선택과 공식 Threads 이동">
          <p>설정에서 Threads 연결 해제, 로컬 활동 삭제 또는 Trend Threads 계정 삭제를 실행할 수 있습니다. 앱에 로그인할 수 없는 경우에는 <a className="inline-link" href="/data-deletion">계정 및 데이터 삭제 안내</a>를 따르세요.</p>
          <p>순위 게시물을 누르면 해당 게시물의 정확한 공식 Threads permalink를 엽니다. 이후 콘텐츠는 Threads가 제공하며 Threads의 약관과 정책이 적용됩니다. Trend Threads 연결을 해제해도 사용자의 Threads 계정이나 콘텐츠는 삭제되지 않습니다.</p>
        </PolicySection>

        <PolicySection title="8. 개인정보 문의와 방침 변경">
          <dl className="contact-list">
            <div><dt>담당</dt><dd>툴스랩 개인정보 문의 담당자</dd></div>
            <div><dt>이메일</dt><dd><a href="mailto:allweek@naver.com">allweek@naver.com</a></dd></div>
            <div><dt>전화</dt><dd><a href="tel:07043503571">070-4350-3571</a></dd></div>
          </dl>
          <p>계정 비밀번호, 인증 코드 또는 Threads 액세스 토큰을 문의 메일로 보내지 마세요. 서비스 기능이나 법적 요구사항이 변경되면 이 방침을 수정할 수 있으며 중요한 변경은 시행 전에 안내하고 시행일을 갱신합니다.</p>
        </PolicySection>
      </div>
    </LegalShell>
  );
}
