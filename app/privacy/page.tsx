import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads Privacy Policy | ToolsLab",
  description: "How Trend Threads processes topic signals, on-device data, retention, service providers, and deletion requests.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="PRIVACY POLICY"
      title="Trend Threads Privacy Policy"
      summary="English is the primary policy language. A complete Korean version is provided below. Trend Threads publishes de-identified topic signals, not copies of individual Threads posts."
    >
      <div className="policy-meta">
        <span>Operator: ToolsLab (툴스랩), Republic of Korea</span>
        <span>Effective date: August 10, 2026</span>
      </div>

      <div lang="en">
        <PolicySection title="1. Information delivered to the public app">
          <p>The public app receives only an operator-controlled topic label, category, rank, five-point score band, ten-point velocity band, reviewed aggregate reason, and a time bucket rounded to 15 minutes.</p>
          <p>A topic is eligible only after at least 30 eligible RECENT posts, 20 distinct authors, and two successfully completed independent RECENT collection opportunities separated by at least 15 minutes. Partial, failed, in-progress, duplicate, closely spaced retry, and TOP-only evidence does not qualify a topic. The mobile app does not receive Threads post text, usernames, profiles, account or post IDs, media, individual post permalinks, exact evidence counts, access tokens, or app secrets.</p>
        </PolicySection>

        <PolicySection title="2. Meta Platform Data and purpose">
          <p>Only while ToolsLab holds approved official Threads API access and enables the private collection feature, an authorized server-side operator account uses official Keyword Search results to calculate de-identified topic aggregates. The requested fields are post ID, username, text, timestamp, and permalink. The operator access token and app secret remain server-side.</p>
          <p>This data is used only for bounded topic classification, safety filtering, minimum-sample checks, ranking calculations, integrity review, and the required operation and security of the integration. Trend Threads does not use unofficial scraping, private endpoints, Threads cookies, end-user Threads login sessions, advertising, data brokerage, or generative-AI training.</p>
        </PolicySection>

        <PolicySection title="3. Retention and de-identification">
          <ul>
            <li>New topic-collector writes do not retain a duplicate raw provider payload.</li>
            <li>Normalized post, author, and observation evidence is deleted within a rolling maximum of 24 hours.</li>
            <li>Aggregate history without post or author identifiers is retained for no more than eight days.</li>
            <li>If retention cannot complete, the calculator fails closed and does not publish a new aggregate.</li>
          </ul>
        </PolicySection>

        <PolicySection title="4. On-device data and optional account">
          <p>Display language, content language, time range, recent searches, saved topics, and preferences are stored on the device. Searches are matched on-device against already published topic and category labels and are not sent to ToolsLab or Threads. Saved topics contain no post copies.</p>
          <p>Core browsing, search, saving, and the official Threads handoff require no login. If a user chooses an email account, Supabase processes the email address, authentication state, internal user identifier, and account preferences for authentication and synchronization. Usage analytics remains off unless an authenticated user expressly opts in, and Meta Platform Data and search terms are excluded from analytics events.</p>
        </PolicySection>

        <PolicySection title="5. Service providers with potential access">
          <ul>
            <li><strong>Supabase, Inc.:</strong> Tokyo-region database, Edge Functions, authentication, and server-side secret storage. Supabase processes the official API response and normalized evidence on ToolsLab&apos;s behalf.</li>
            <li><strong>Vercel Inc.:</strong> public policy hosting and a protected operations preview. When the operations preview is connected, its server-rendered moderation and operations interface may process restricted Platform Data for authorized ToolsLab personnel only.</li>
            <li><strong>Meta Threads API:</strong> source of the official keyword-search response and destination of the official Threads search handoff.</li>
          </ul>
          <p>The initial service does not send Meta Platform Data to OpenAI, advertising providers, data brokers, or remote translation providers.</p>
        </PolicySection>

        <PolicySection title="6. Sharing, transfers, and official Threads handoff">
          <p>ToolsLab does not sell Meta Platform Data or use it for targeted advertising. Service providers may process it only to provide the infrastructure and protected operations described above. Cloud infrastructure may involve cross-border processing under the provider&apos;s contractual and security controls.</p>
          <p>Selecting “Open in Threads” opens the official threads.com topic-search address. Content viewed after that handoff is provided by Threads and is subject to its terms and policies.</p>
        </PolicySection>

        <PolicySection title="7. Retention, deletion, and user choices">
          <ul>
            <li>Local activity and cached aggregate signals can be deleted from Settings.</li>
            <li>A server-account export excludes device-only local activity and active delivery credentials.</li>
            <li>Deleting an optional account removes the Supabase authentication account and associated server user data.</li>
            <li>Source evidence and de-identified aggregate history are automatically removed under the 24-hour and eight-day limits above.</li>
          </ul>
          <p>If the user cannot sign in, deletion can be requested through the <a className="inline-link" href="/data-deletion">Account and Data Deletion page</a>.</p>
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
      <PolicySection title="1. 앱에 전달되는 정보">
        <p>공개 앱에는 운영자가 관리하는 주제명, 분야명, 순위, 5점 단위 점수 구간, 10점 단위 변화 구간, 상승 이유 코드와 15분 단위로 반올림한 시각만 전달됩니다.</p>
        <p>적격 게시물 30개, 서로 다른 작성자 20명, 성공적으로 완료된 공식 RECENT 수집 2회 이상이 기여하고 독립 수집 사이가 최소 15분인 주제만 공개합니다. partial·실패·진행 중인 수집, 15분 미만 간격으로 이어진 재시도·중복 요청과 TOP-only 근거는 별도 수집으로 인정하지 않습니다. 앱에는 게시물 본문, 사용자명, 계정·게시물 ID, 미디어, 개별 게시물 링크, 정확한 근거 건수를 전달하지 않습니다.</p>
      </PolicySection>

      <PolicySection title="2. 서버의 공식 원천 데이터 처리">
        <p>운영자가 승인된 공식 Threads API 접근 권한을 보유하고 기능을 활성화한 경우에만 공식 Keyword Search 결과를 주제 집계와 순위 계산 목적으로 일시 처리합니다. 비공식 크롤링, Threads 쿠키 또는 사용자 Threads 로그인 세션은 사용하지 않습니다.</p>
        <ul>
          <li>주제명은 게시글 문장을 복사하지 않고 운영자가 관리하는 키워드팩에서 가져옵니다.</li>
          <li>공식 응답의 원본 payload는 집계 직후 제거합니다.</li>
          <li>정규화된 게시물·작성자·관측 근거는 최대 24시간의 이동 보관기간 안에 삭제합니다.</li>
          <li>게시물·작성자 식별자가 없는 주제 집계 이력은 주간 계산에 필요한 범위에서 최대 8일 보관합니다.</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. 기기에 저장되는 정보">
        <p>화면 언어, 콘텐츠 언어, 기간, 최근 검색어, 저장한 주제와 환경설정은 해당 기기에 저장됩니다. 검색어는 이미 공개된 주제·분야명과 기기 안에서만 대조하며 ToolsLab 서버나 Threads로 보내지 않습니다.</p>
        <p>저장한 주제에는 공개된 주제명, 분야, 당시 점수 구간과 상승 이유만 들어가며 게시물 사본은 포함되지 않습니다. 설정에서 저장한 주제·최근 검색 등 로컬 활동과 집계 신호 캐시를 삭제할 수 있습니다.</p>
      </PolicySection>

      <PolicySection title="4. 선택적 계정과 사용 분석">
        <p>공개 주제 순위, 검색, 주제 저장과 Threads 이동은 로그인 없이 이용할 수 있습니다. 사용자가 이메일 계정을 선택하면 Supabase가 이메일 주소, 인증 상태, 내부 사용자 식별자와 계정 환경설정을 인증·동기화 목적으로 처리합니다.</p>
        <p>사용 분석은 기본적으로 꺼져 있습니다. 로그인 사용자가 명시적으로 동의한 경우에만 허용된 최소 이벤트를 기록하며, 검색어와 Threads 원천 데이터는 분석 이벤트에 포함하지 않습니다.</p>
      </PolicySection>

      <PolicySection title="5. 처리하지 않는 정보와 외부 서비스">
        <p>위치, 주소록, 사진 보관함, 결제정보, 광고 식별자, Threads 비밀번호·쿠키·로그인 세션, OpenAI API 입력을 초기 서비스에서 처리하지 않습니다.</p>
        <ul>
          <li><strong>Supabase, Inc.:</strong> Tokyo 리전 데이터베이스, Edge Functions, 선택적 계정 인증과 서버 비밀값 저장. 공식 API 응답과 정규화 근거를 ToolsLab을 대신하여 처리합니다.</li>
          <li><strong>Vercel Inc.:</strong> 공개 정책 페이지와 접근 통제된 운영 Preview 제공. 운영 Preview가 연결된 경우 승인된 ToolsLab 담당자용 서버 렌더링 운영·moderation 화면에서 제한된 플랫폼 데이터를 처리할 수 있습니다.</li>
          <li><strong>Meta Threads API:</strong> 승인된 경우 공식 키워드 검색 결과의 일시 처리</li>
        </ul>
        <p>초기 서비스는 Meta 플랫폼 데이터를 OpenAI, 광고 사업자, 데이터 브로커 또는 원격 번역 제공자에게 보내지 않습니다.</p>
        <p>“Threads에서 보기”를 누르면 공식 threads.com 주제 검색 주소를 열며, 이후 콘텐츠 이용에는 Threads의 약관과 정책이 적용됩니다.</p>
      </PolicySection>

      <PolicySection title="6. 보관, 삭제와 이용자의 선택">
        <ul>
          <li>기기 로컬 활동과 집계 캐시는 앱 설정에서 삭제할 수 있습니다.</li>
          <li>데이터 내보내기는 서버 계정 데이터만 포함하며 기기 로컬 활동은 포함하지 않습니다.</li>
          <li>계정 삭제를 실행하면 Supabase 인증 계정과 해당 사용자의 서버 데이터를 삭제합니다.</li>
          <li>원천 근거와 비식별 주제 이력은 위의 24시간·8일 상한에 따라 자동 정리합니다.</li>
        </ul>
        <p>앱에 로그인할 수 없는 경우에는 <a className="inline-link" href="/data-deletion">계정 및 데이터 삭제 안내</a>에 따라 요청할 수 있습니다.</p>
      </PolicySection>

      <PolicySection title="7. 개인정보 문의">
        <dl className="contact-list">
          <div><dt>담당</dt><dd>툴스랩 개인정보 문의 담당자</dd></div>
          <div><dt>이메일</dt><dd><a href="mailto:allweek@naver.com">allweek@naver.com</a></dd></div>
          <div><dt>전화</dt><dd><a href="tel:07043503571">070-4350-3571</a></dd></div>
        </dl>
        <p>계정 비밀번호, 인증 코드 또는 Threads 액세스 토큰을 문의 메일로 보내지 마세요.</p>
      </PolicySection>

      <PolicySection title="8. 방침 변경">
        <p>서비스 기능이나 법적 요구사항이 변경되면 이 방침을 수정할 수 있습니다. 중요한 변경은 시행 전에 앱 또는 이 페이지에서 안내하고 시행일을 갱신합니다.</p>
      </PolicySection>
      </div>
    </LegalShell>
  );
}
