import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads Privacy Policy | ToolsLab",
  description: "How Trend Threads handles connected-user Threads authorization, live topic rankings, retention, service providers, and deletion requests.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="PRIVACY POLICY"
      title="Trend Threads Privacy Policy"
      summary="English is the primary policy language. A complete Korean version is provided below. Trend Threads checks six controlled topics for a user who connects Threads and does not reproduce Threads posts or accounts."
    >
      <div className="policy-meta">
        <span>Operator: ToolsLab (툴스랩), Republic of Korea</span>
        <span>Effective date: August 22, 2026</span>
      </div>

      <div lang="en">
        <PolicySection title="1. Trend Threads account and optional Threads connection">
          <p>A Trend Threads account is required for the connected-user live ranking. Supabase processes the email address, authentication state, internal user identifier, account preferences, and consent records needed for authentication, security, synchronization, and deletion.</p>
          <p>If you choose to connect your Threads account, Trend Threads requests <code>threads_basic</code> and <code>threads_keyword_search</code> through Meta&apos;s official Threads authorization flow. We receive the app-scoped Threads account identifier and username needed to verify and display the connected account, and an access token needed to run the live topic checks you request.</p>
        </PolicySection>

        <PolicySection title="2. Authorization and token protection">
          <p>The authorization code is exchanged only by our HTTPS backend. The Threads access token is encrypted separately for each Trend Threads user with AES-256-GCM at rest. It is never sent to the mobile app, placed in a callback URL, used for advertising, or shared with another Trend Threads user.</p>
          <p>The optional Threads connection is used only to verify the account that gave consent, provide the connected-user live ranking, manage token expiry and reconnection, prevent conflicting account bindings, and honor disconnect or deletion requests.</p>
        </PolicySection>

        <PolicySection title="3. Live category ranking and data minimization">
          <p>When you request a live category ranking, our backend performs RECENT keyword searches for six reviewed topic labels in the selected category using your connected Threads access token. It returns their current 1–6 activity ranking and coarse five-point activity bands.</p>
          <p>Provider results are processed transiently in memory and reduced to coarse five-point activity, result, unique-author, and recent-result bands. We do not retain or display provider post text, post IDs, author identities, usernames, profiles, permalinks, media, exact result counts, or copies of Threads content from these searches.</p>
          <p>The connected-user flow does not fall back to an operator token, test data, public operator aggregates, or cached operator results. If authorization, safety, or freshness cannot be verified, the request fails closed.</p>
        </PolicySection>

        <PolicySection title="4. Retention and deletion">
          <ul>
            <li>The encrypted Threads token and account binding are retained only while the connection remains active.</li>
            <li>Pending OAuth state is short-lived and is deleted after completion, expiry, disconnect, or account deletion.</li>
            <li>A content-free service lifecycle receipt containing the Trend Threads user ID, controlled category, language, success or reviewed error code, and timestamps may be retained for up to 24 hours for abuse prevention and reliability.</li>
            <li>Disconnect deletes the encrypted token, Threads account binding, and pending OAuth state. Deleting the Trend Threads account also removes the connection and owned lifecycle receipts through the account-deletion process.</li>
          </ul>
        </PolicySection>

        <PolicySection title="5. On-device data and analytics">
          <p>Display language, content language, time range, recent searches, saved topics, and preferences may be stored on the device. Saved topics contain no copy of a Threads post. Local activity can be removed from Settings.</p>
          <p>Usage analytics remains off unless an authenticated user expressly opts in. Threads access tokens, provider result content, and live keyword-search results are excluded from analytics events.</p>
        </PolicySection>

        <PolicySection title="6. Service providers and transfers">
          <ul>
            <li><strong>Supabase, Inc.:</strong> Tokyo-region database, Edge Functions, authentication, encrypted server-side token storage, and lifecycle records.</li>
            <li><strong>Vercel Inc.:</strong> hosting for these public policy pages.</li>
            <li><strong>Meta Threads API:</strong> provider of user authorization and the official keyword-search response, and destination of the official Threads search handoff.</li>
          </ul>
          <p>ToolsLab does not sell Meta Platform Data or use it for targeted advertising. The initial service does not send Meta Platform Data to OpenAI, advertising providers, data brokers, or remote translation providers. Cloud infrastructure may involve cross-border processing under the providers&apos; contractual and security controls.</p>
        </PolicySection>

        <PolicySection title="7. User choices and official Threads handoff">
          <p>You can disconnect Threads, delete local activity, or delete your Trend Threads account from Settings. If you cannot sign in, follow the <a className="inline-link" href="/data-deletion">Account and Data Deletion page</a>.</p>
          <p>Selecting “Open in Threads” opens the official threads.com topic-search address. Content viewed after that handoff is provided by Threads and is subject to its terms and policies. Disconnecting Trend Threads does not delete the user&apos;s Threads account or content.</p>
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
          <p>연결 사용자 실시간 순위를 사용하려면 Trend Threads 계정이 필요합니다. Supabase는 인증, 보안, 동기화와 삭제에 필요한 이메일 주소, 인증 상태, 내부 사용자 식별자, 계정 환경설정과 동의 기록을 처리합니다.</p>
          <p>사용자가 Threads 계정 연결을 선택하면 Trend Threads는 Meta의 공식 Threads 승인 흐름을 통해 <code>threads_basic</code>과 <code>threads_keyword_search</code> 권한을 요청합니다. 당사는 연결한 계정을 확인·표시하는 데 필요한 앱 범위 Threads 계정 식별자와 사용자 이름, 사용자가 요청한 실시간 주제 확인을 수행하는 데 필요한 액세스 토큰을 수신합니다.</p>
        </PolicySection>

        <PolicySection title="2. 승인과 토큰 보호">
          <p>인증 코드는 HTTPS 백엔드에서만 교환합니다. Threads 액세스 토큰은 Trend Threads 사용자별로 AES-256-GCM 암호화해 저장합니다. 모바일 앱이나 callback URL에 전달하지 않고 광고에 사용하거나 다른 Trend Threads 사용자와 공유하지 않습니다.</p>
          <p>선택적 Threads 연결은 동의한 계정 확인, 연결 사용자 실시간 순위 제공, 토큰 만료·재연결 관리, 충돌하는 계정 연결 방지와 연결 해제·삭제 요청 처리 목적으로만 사용합니다.</p>
        </PolicySection>

        <PolicySection title="3. 실시간 카테고리 순위와 데이터 최소화">
          <p>사용자가 실시간 카테고리 순위를 요청하면 백엔드는 연결한 Threads 액세스 토큰으로 선택한 카테고리의 검토된 주제 6개에 대해 RECENT 키워드 검색을 수행하고 현재 활동 1~6위와 거친 5점 단위 활동 구간을 반환합니다.</p>
          <p>Provider 결과는 메모리에서 일시 처리한 뒤 5점 단위 활동·결과·고유 작성자·최근 결과 구간으로 축약합니다. 이 검색에서 받은 게시물 본문, 게시물 ID, 작성자 식별자, 사용자 이름, 프로필, permalink, 미디어, 정확한 결과 수 또는 Threads 콘텐츠 사본을 저장하거나 표시하지 않습니다.</p>
          <p>연결 사용자 흐름은 운영자 토큰, 테스트 데이터, 공개 운영자 집계 또는 운영자 cache로 대체하지 않습니다. 권한·안전성·최신성을 확인할 수 없으면 요청은 실패 상태로 종료됩니다.</p>
        </PolicySection>

        <PolicySection title="4. 보관과 삭제">
          <ul>
            <li>암호화 Threads 토큰과 계정 연결은 연결 상태가 유효한 동안에만 보관합니다.</li>
            <li>대기 중 OAuth state는 단기간만 보관하며 완료, 만료, 연결 해제 또는 계정 삭제 시 제거합니다.</li>
            <li>악용 방지와 신뢰성 확인을 위해 Trend Threads 사용자 ID, 통제 카테고리, 언어, 성공 또는 검토된 오류 코드, 시각만 포함한 콘텐츠 없는 service lifecycle 기록을 최대 24시간 보관할 수 있습니다.</li>
            <li>연결 해제는 암호화 토큰, Threads 계정 연결과 대기 중 OAuth state를 삭제합니다. Trend Threads 계정 삭제 시 연결과 사용자 소유 lifecycle 기록도 계정 삭제 절차를 통해 제거합니다.</li>
          </ul>
        </PolicySection>

        <PolicySection title="5. 기기 저장 정보와 사용 분석">
          <p>화면 언어, 콘텐츠 언어, 기간, 최근 검색어, 저장한 주제와 환경설정은 기기에 저장될 수 있습니다. 저장한 주제에는 Threads 게시물 사본이 포함되지 않으며 설정에서 로컬 활동을 삭제할 수 있습니다.</p>
          <p>사용 분석은 인증한 사용자가 명시적으로 동의하지 않는 한 꺼져 있습니다. Threads 액세스 토큰, provider 결과 콘텐츠와 실시간 키워드 검색 결과는 분석 이벤트에서 제외합니다.</p>
        </PolicySection>

        <PolicySection title="6. 처리업체와 국외 처리">
          <ul>
            <li><strong>Supabase, Inc.:</strong> Tokyo 리전 데이터베이스, Edge Functions, 인증, 암호화한 서버 토큰 저장과 lifecycle 기록</li>
            <li><strong>Vercel Inc.:</strong> 이 공개 정책 페이지의 호스팅</li>
            <li><strong>Meta Threads API:</strong> 사용자 승인과 공식 키워드 검색 응답의 제공자이자 공식 Threads 검색 이동의 목적지</li>
          </ul>
          <p>ToolsLab은 Meta 플랫폼 데이터를 판매하거나 맞춤 광고에 사용하지 않습니다. 초기 서비스는 Meta 플랫폼 데이터를 OpenAI, 광고 사업자, 데이터 브로커 또는 원격 번역 제공자에게 보내지 않습니다. 클라우드 인프라 이용 과정에서 각 처리업체의 계약·보안 통제에 따른 국외 처리가 발생할 수 있습니다.</p>
        </PolicySection>

        <PolicySection title="7. 이용자 선택과 공식 Threads 이동">
          <p>설정에서 Threads 연결 해제, 로컬 활동 삭제 또는 Trend Threads 계정 삭제를 실행할 수 있습니다. 앱에 로그인할 수 없는 경우에는 <a className="inline-link" href="/data-deletion">계정 및 데이터 삭제 안내</a>를 따르세요.</p>
          <p>“Threads에서 보기”를 누르면 공식 threads.com 주제 검색 주소를 엽니다. 이후 콘텐츠는 Threads가 제공하며 Threads의 약관과 정책이 적용됩니다. Trend Threads 연결을 해제해도 사용자의 Threads 계정이나 콘텐츠는 삭제되지 않습니다.</p>
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
