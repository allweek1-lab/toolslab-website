import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads Account and Data Deletion | ToolsLab",
  description: "How to disconnect Threads and delete Trend Threads local activity, connected-account credentials, and server-account data.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <LegalShell eyebrow="TREND THREADS DATA DELETION" title="Account and Data Deletion" summary="English is the primary deletion-guide language. Complete Korean instructions are provided below.">
      <div className="policy-meta">
        <span>Operator: ToolsLab (툴스랩), Republic of Korea</span>
        <span>Effective date: August 23, 2026</span>
      </div>

      <div lang="en">
        <PolicySection title="Disconnect the optional Threads account">
          <ol>
            <li>Sign in to Trend Threads.</li>
            <li>Open <strong>Settings → Threads account connection</strong>.</li>
            <li>Select <strong>Disconnect</strong> and confirm.</li>
          </ol>
          <p>Disconnect deletes the encrypted Threads access token, app-scoped account binding, and any pending OAuth state from the service. It does not delete the user&apos;s Threads account or Threads content. Content-free request lifecycle receipts expire within 24 hours.</p>
          <p>Search-result content and the two live observations used by Rising are transient and are not retained in the server database or device cache.</p>
        </PolicySection>

        <PolicySection title="Delete the Trend Threads account and server data in the app">
          <ol>
            <li>Sign in to the Trend Threads account to be deleted.</li>
            <li>Open <strong>Settings</strong>.</li>
            <li>Select <strong>Delete account</strong> and confirm.</li>
          </ol>
          <p>Account deletion removes the Supabase authentication account, server preferences and consent records, Threads connection, encrypted access token, account binding, pending OAuth state, and lifecycle receipts owned by that user through the account-deletion process.</p>
        </PolicySection>

        <PolicySection title="Delete local activity on this device">
          <p>In <strong>Settings → Delete local activity data</strong>, remove saved categories, recent searches, and legacy local activity on this device.</p>
          <p>Live post-result content, usernames, permalinks, exact result counts, and Rising observations are never written to the device cache. Delete local preferences separately if they must be removed together with the server account.</p>
        </PolicySection>

        <PolicySection title="If sign-in is unavailable">
          <p>Email <a className="inline-link" href="mailto:allweek@naver.com?subject=Trend%20Threads%20Data%20Deletion%20Request">allweek@naver.com</a> with:</p>
          <ul>
            <li>Subject: Trend Threads Data Deletion Request</li>
            <li>The email address used for the Trend Threads account</li>
            <li>Whether the request covers the full account, Threads connection, or specified server data</li>
          </ul>
          <p>ToolsLab may reply to the registered email to verify ownership. Do not send a password, authentication code, or Threads access token. Receipt and completion will be confirmed by email.</p>
        </PolicySection>

        <PolicySection title="Content on Threads">
          <p>Trend Threads temporarily displays safety-filtered post text, usernames, publication time, and exact official permalinks for the current connected-user ranking. Post text, post IDs, usernames, permalinks, media, exact result counts, and the two live observations are not retained in the server database, device cache, analytics, or advertising systems. Media is not displayed, copied, or downloaded.</p>
          <p>Original content remains on Threads and cannot be deleted by ToolsLab. The account or content owner must manage the original Threads account and content through Threads.</p>
        </PolicySection>

        <PolicySection title="Related documents">
          <p><a className="inline-link" href="/privacy">Privacy Policy</a></p>
          <p><a className="inline-link" href="/terms">Terms of Service</a></p>
          <p><a className="inline-link" href="/support">Support</a></p>
        </PolicySection>
      </div>

      <div className="language-divider" lang="ko">
        <h2>한국어 계정 및 데이터 삭제 안내</h2>
      </div>

      <div lang="ko">
        <PolicySection title="선택적 Threads 계정 연결 해제">
          <ol>
            <li>Trend Threads에 로그인합니다.</li>
            <li><strong>설정 → Threads account connection</strong>을 엽니다.</li>
            <li><strong>Disconnect</strong>를 선택하고 확인합니다.</li>
          </ol>
          <p>연결 해제는 서비스에 저장된 암호화 Threads 액세스 토큰, 앱 범위 계정 연결과 대기 중 OAuth state를 삭제합니다. 사용자의 Threads 계정이나 Threads 콘텐츠는 삭제하지 않습니다. 콘텐츠가 없는 요청 lifecycle 기록은 24시간 이내 만료됩니다.</p>
          <p>검색 결과 콘텐츠와 급상승에 사용한 두 실제 관찰은 일시 처리되며 서버 DB나 기기 cache에 보관하지 않습니다.</p>
        </PolicySection>

        <PolicySection title="앱에서 Trend Threads 계정과 서버 데이터 삭제">
          <ol>
            <li>Trend Threads에서 삭제할 계정으로 로그인합니다.</li>
            <li><strong>설정</strong>을 엽니다.</li>
            <li><strong>계정 삭제</strong>를 누르고 확인합니다.</li>
          </ol>
          <p>계정 삭제는 계정 삭제 절차를 통해 Supabase 인증 계정, 서버 환경설정과 동의 기록, Threads 연결, 암호화 액세스 토큰, 계정 binding, 대기 중 OAuth state와 해당 사용자가 소유한 lifecycle 기록을 제거합니다.</p>
        </PolicySection>

        <PolicySection title="이 기기의 로컬 활동 삭제">
          <p><strong>설정 → 로컬 활동 데이터 삭제</strong>를 사용하면 이 기기의 저장한 분야, 최근 검색어와 이전 버전의 로컬 활동 기록을 지울 수 있습니다.</p>
          <p>실시간 게시물 결과 콘텐츠, 사용자 이름, permalink, 정확한 결과 수와 급상승 관찰은 기기 cache에 기록하지 않습니다. 서버 계정과 함께 환경설정도 지워야 하는 경우 로컬 활동 삭제를 별도로 실행하세요.</p>
        </PolicySection>

        <PolicySection title="앱에 로그인할 수 없는 경우">
          <p><a className="inline-link" href="mailto:allweek@naver.com?subject=Trend%20Threads%20데이터%20삭제%20요청">allweek@naver.com</a>으로 아래 정보를 보내 주세요.</p>
          <ul>
            <li>제목: Trend Threads 데이터 삭제 요청</li>
            <li>Trend Threads 가입에 사용한 이메일 주소</li>
            <li>계정 전체, Threads 연결 또는 특정 서버 데이터 중 원하는 삭제 범위</li>
          </ul>
          <p>계정 소유 확인을 위해 가입 이메일로 회신할 수 있습니다. 비밀번호, 인증 코드, Threads 액세스 토큰은 보내지 마세요. 접수와 처리 결과는 이메일로 안내합니다.</p>
        </PolicySection>

        <PolicySection title="Threads의 콘텐츠">
          <p>Trend Threads는 현재 연결 사용자 순위에서 안전 필터를 통과한 게시물 본문, 사용자 이름, 게시 시각과 정확한 공식 permalink를 일시 표시합니다. 게시물 본문, 게시물 ID, 사용자 이름, permalink, 미디어, 정확한 결과 수와 두 실제 관찰은 서버 DB, 기기 cache, analytics 또는 광고 시스템에 보관하지 않습니다. 미디어는 표시·복제·다운로드하지 않습니다.</p>
          <p>원본 콘텐츠는 Threads에 남아 있어 ToolsLab이 삭제할 수 없습니다. Threads 계정과 원본 콘텐츠는 계정 또는 콘텐츠 소유자가 Threads에서 관리해야 합니다.</p>
        </PolicySection>

        <PolicySection title="관련 문서">
          <p><a className="inline-link" href="/privacy">개인정보 처리방침 보기</a></p>
          <p><a className="inline-link" href="/terms">이용약관 보기</a></p>
          <p><a className="inline-link" href="/support">지원 페이지 보기</a></p>
        </PolicySection>
      </div>
    </LegalShell>
  );
}
