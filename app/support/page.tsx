import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads Support | ToolsLab",
  description: "Support for Trend Threads connected-user Rising and Popular individual-post rankings, Threads account connection, exact original-post handoff, and account deletion.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/support" },
};

export default function SupportPage() {
  return (
    <LegalShell eyebrow="TREND THREADS SUPPORT" title="Trend Threads Support" summary="English is the primary support language. Korean guidance is provided below.">
      <div lang="en">
      <PolicySection title="Contact">
        <dl className="contact-list">
          <div><dt>Operator</dt><dd>ToolsLab (툴스랩)</dd></div>
          <div><dt>Email</dt><dd><a href="mailto:allweek@naver.com">allweek@naver.com</a></dd></div>
          <div><dt>Phone</dt><dd><a href="tel:07043503571">+82 70-4350-3571</a></dd></div>
        </dl>
        <p>Include the device model, iOS version, app version, affected screen, and approximate time. Do not send a password, authentication code, or Threads access token.</p>
      </PolicySection>

      <PolicySection title="Connected-user reviewer walkthrough">
        <ol>
          <li>Sign in to Trend Threads and select <strong>Connect Threads and view post rankings</strong>.</li>
          <li>Select <strong>Continue with Threads</strong> and grant <code>threads_basic</code> to verify your connected account and <code>threads_keyword_search</code> to run searches you request.</li>
          <li>Confirm <strong>Connected</strong> and your Threads username, then select <strong>View prepared Threads rankings</strong>.</li>
          <li>Select <strong>Enable automatic rankings for 10 categories</strong>. The owner-specific queue rotates one reviewed term per category and compares the same RECENT search at least 61 seconds apart; the screen can be closed while preparation continues.</li>
          <li>Review the prepared individual post cards. Rising contains only posts that newly appeared or gained search position. If none rose, current leaders from the same RECENT search are explicitly labeled <strong>Popular now</strong> and are not represented as rising. Scores are internal search-visibility measurements, not official views, likes, engagement, or a Threads ranking.</li>
          <li>Select a ranked post to open that exact original post on Threads, then return to Trend Threads.</li>
          <li>Open the category sheet to confirm all ten categories. Prepared rankings refresh about every 60 minutes; a snapshot becomes stale after 75 minutes and is deleted no later than two hours after observation.</li>
          <li>Reconnect or disconnect Threads from Settings. Disconnecting removes the encrypted token, account binding, automatic-ranking preference, pending jobs, encrypted baselines and snapshots, and pending OAuth state. You can also delete local activity or the Trend Threads account.</li>
        </ol>
      </PolicySection>

      <PolicySection title="If a live Threads check cannot be completed">
        <p>Confirm that you are signed in to Trend Threads and that the Threads connection in Settings says “Connected.” If the authorization expired or was rejected, select “Reconnect Threads.” Check the network and retry; after a provider rate limit, wait before trying again.</p>
        <p>An empty Rising result can mean that no eligible post gained positive search visibility between the two RECENT observations; it is not automatically an error. Check the explicit Popular now section and the last calculated time. The app quietly rechecks preparation status, so do not repeatedly enable the feature or retry immediately after a rate-limit message.</p>
        <p>If authorization, safety, freshness, or result integrity cannot be verified, the app fails closed. It does not fall back to an operator token, public operator aggregates, cached operator results, fixtures, or test data. If the problem continues, contact support with the device, iOS version, app version, screen, and approximate time—never a password, code, or token.</p>
      </PolicySection>

      <PolicySection title="Service description">
        <p>Trend Threads is an independent, unofficial trend-discovery tool. Individual-post rankings are calculated only for a signed-in user who connects their own Threads account and grants <code>threads_basic</code> and <code>threads_keyword_search</code>.</p>
        <p>The automatic queue rotates one reviewed term for each of ten categories and compares the same RECENT search at least 61 seconds apart. Rising contains only positive measured movement; if none rose, current leaders are explicitly labeled Popular now. Owner-specific baselines and snapshots are AES-256-GCM ciphertext, refresh about every 60 minutes, become stale after 75 minutes, and are deleted no later than two hours after observation. Results are not stored in device cache, analytics, advertising systems, or any public or cross-user aggregate. Media is not displayed or downloaded, and selecting a card opens the exact official permalink on Threads.</p>
      </PolicySection>

      <PolicySection title="Policy documents">
        <p><a className="inline-link" href="/data-deletion">Account and Data Deletion</a></p>
        <p><a className="inline-link" href="/privacy">Privacy Policy</a></p>
        <p><a className="inline-link" href="/terms">Terms of Service</a></p>
      </PolicySection>
      </div>

      <div className="language-divider" lang="ko">
        <h2>한국어 지원 안내</h2>
      </div>

      <div lang="ko">
      <PolicySection title="연락처">
        <dl className="contact-list">
          <div><dt>운영</dt><dd>툴스랩 (ToolsLab)</dd></div>
          <div><dt>이메일</dt><dd><a href="mailto:allweek@naver.com">allweek@naver.com</a></dd></div>
          <div><dt>전화</dt><dd><a href="tel:07043503571">070-4350-3571</a></dd></div>
        </dl>
        <p>이메일 문의 시 기기 모델, iOS 버전, 앱 버전, 발생한 화면과 시각을 적어주시면 확인에 도움이 됩니다. 비밀번호, 인증 코드 또는 Threads 액세스 토큰은 보내지 마세요.</p>
      </PolicySection>

      <PolicySection title="연결 사용자 검수 재현 절차">
        <ol>
          <li>Trend Threads에 로그인하고 <strong>Connect Threads and view post rankings</strong>를 누릅니다.</li>
          <li><strong>Continue with Threads</strong>를 누르고 연결 계정 확인을 위한 <code>threads_basic</code>과 사용자가 요청한 검색 실행을 위한 <code>threads_keyword_search</code>를 승인합니다.</li>
          <li><strong>Connected</strong>와 Threads 사용자 이름을 확인한 뒤 <strong>View prepared Threads rankings</strong>를 누릅니다.</li>
          <li><strong>Enable automatic rankings for 10 categories</strong>를 누릅니다. 사용자 전용 queue가 분야마다 검토 검색어 1개를 순환 선택하고 같은 RECENT 검색을 61초 이상 간격으로 비교합니다. 준비 중에는 화면을 닫아도 됩니다.</li>
          <li>준비된 개별 게시물 카드를 확인합니다. 새로 나타났거나 검색 위치가 상승한 게시물만 급상승에 표시합니다. 상승 글이 없으면 같은 RECENT 검색의 현재 상위를 <strong>현재 인기 게시물</strong>로 명확히 구분하며 급상승으로 표현하지 않습니다. 점수는 공식 조회수, 좋아요 수, 참여 수 또는 Threads 공식 순위가 아닙니다.</li>
          <li>순위 게시물을 눌러 Threads의 정확한 원문 게시물이 열리는지 확인한 뒤 앱으로 돌아옵니다.</li>
          <li>분야 선택 화면에서 전체 10개 분야를 확인합니다. 준비 순위는 약 60분마다 갱신하고 snapshot은 75분 후 오래된 상태가 되며 관찰 후 최대 2시간 안에 삭제합니다.</li>
          <li>설정에서 Threads를 재연결하거나 연결 해제할 수 있습니다. 연결 해제 시 암호화 토큰, 계정 연결, 자동 순위 설정, 대기 작업, 암호화 baseline·snapshot과 OAuth state를 삭제합니다. 로컬 활동 삭제나 Trend Threads 계정 삭제도 실행할 수 있습니다.</li>
        </ol>
      </PolicySection>

      <PolicySection title="실시간 Threads 확인을 완료할 수 없을 때">
        <p>Trend Threads에 로그인되어 있고 설정의 Threads 연결 상태가 ‘연결됨’인지 확인하세요. 인증이 만료되었거나 거절되었다면 ‘Threads 다시 연결’을 선택하세요. 네트워크를 확인한 뒤 다시 시도하고, 제공자 속도 제한이 발생했다면 잠시 기다려 주세요.</p>
        <p>급상승 결과가 비어 있으면 두 RECENT 관찰 사이에 검색 가시성이 실제로 증가한 적격 게시물이 없었다는 의미일 수 있으며 자동으로 오류인 것은 아닙니다. 명시적으로 구분된 현재 인기 게시물과 마지막 계산 시각을 확인하세요. 앱이 준비 상태를 조용히 다시 조회하므로 기능을 반복해서 켜거나 속도 제한 안내 뒤 즉시 재시도하지 마세요.</p>
        <p>인증, 안전성, 최신성 또는 결과 무결성을 확인할 수 없으면 앱은 안전하게 중단합니다. 운영자 토큰, 공개 운영자 집계, 운영자 cache, fixture 또는 테스트 데이터로 대체하지 않습니다. 문제가 계속되면 기기, iOS·앱 버전, 화면과 발생 시각을 알려 주세요. 비밀번호, 인증 코드 또는 토큰은 보내지 마세요.</p>
      </PolicySection>

      <PolicySection title="서비스 안내">
        <p>Trend Threads는 독립적인 비공식 트렌드 발견 도구입니다. 개별 게시물 순위는 로그인한 사용자가 본인의 Threads 계정을 연결하고 <code>threads_basic</code>과 <code>threads_keyword_search</code> 권한을 부여한 경우에만 계산됩니다.</p>
        <p>자동 queue는 10개 분야마다 검토 검색어 1개를 순환 선택하고 같은 RECENT 검색을 61초 이상 간격으로 비교합니다. 양의 실측 움직임만 급상승에 표시하고 상승 글이 없으면 현재 인기 게시물로 명확히 구분합니다. 사용자별 baseline과 snapshot은 AES-256-GCM 암호문으로 저장해 약 60분마다 갱신하고 75분 후 오래된 상태가 되며 관찰 후 최대 2시간 안에 삭제합니다. 결과는 기기 cache, analytics, 광고 또는 공개·사용자 간 집계에 저장하지 않고 미디어는 표시·다운로드하지 않습니다. 카드를 누르면 Threads의 정확한 공식 permalink를 엽니다.</p>
      </PolicySection>

      <PolicySection title="정책 문서">
        <p><a className="inline-link" href="/data-deletion">계정 및 데이터 삭제 안내 보기</a></p>
        <p><a className="inline-link" href="/privacy">개인정보 처리방침 보기</a></p>
        <p><a className="inline-link" href="/terms">이용약관 보기</a></p>
      </PolicySection>
      </div>
    </LegalShell>
  );
}
