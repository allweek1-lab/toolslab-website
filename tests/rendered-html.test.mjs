import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("company homepage stays separate while the Trend Threads host redirects to support", async () => {
  const page = await source("app/page.tsx");
  assert.match(page, /trendthreads\.toolslab\.co\.kr/);
  assert.match(page, /redirect\("\/support"\)/);
  assert.doesNotMatch(page, /href="\/(?:support|privacy|terms|data-deletion)"/);
});

test("policy shell links back to the separate company homepage", async () => {
  const shell = await source("app/legal-shell.tsx");
  const matches = shell.match(/href="https:\/\/toolslab\.co\.kr\/"/g) ?? [];
  assert.equal(matches.length, 2);
  assert.match(shell, /Open the ToolsLab company website/);
  assert.match(shell, /Support \/ 지원/);
  assert.match(shell, /Privacy \/ 개인정보/);
});

test("all public pages receive baseline browser security headers", async () => {
  const config = await source("next.config.ts");
  for (const required of [
    "Content-Security-Policy",
    "Permissions-Policy",
    "Referrer-Policy",
    "X-Content-Type-Options",
    "X-Frame-Options",
  ]) {
    assert.match(config, new RegExp(required));
  }
  assert.match(config, /frame-ancestors 'none'/);
});

test("public app documents use the dedicated Trend Threads subdomain", async () => {
  const pages = await Promise.all([
    source("app/support/page.tsx"),
    source("app/privacy/page.tsx"),
    source("app/terms/page.tsx"),
    source("app/data-deletion/page.tsx"),
  ]);
  assert.match(pages[0], /https:\/\/trendthreads\.toolslab\.co\.kr\/support/);
  assert.match(pages[1], /https:\/\/trendthreads\.toolslab\.co\.kr\/privacy/);
  assert.match(pages[2], /https:\/\/trendthreads\.toolslab\.co\.kr\/terms/);
  assert.match(pages[3], /https:\/\/trendthreads\.toolslab\.co\.kr\/data-deletion/);
});

test("NihongoQ Android privacy policy is public on the company domain and matches the offline app", async () => {
  const privacy = await source("app/nihongoq/android/privacy/page.tsx");
  for (const required of [
    "https://toolslab.co.kr/nihongoq/android/privacy",
    "니혼고Q 개인정보 처리방침",
    "시행일: 2026년 8월 11일",
    "로그인, 자체 서버, 광고, 분석 도구 및 외부 AI를",
    "기기 안에서 처리하는 정보",
    "마이크와 임시 녹음",
    "해당 연습 화면을 나가면",
    "기기 밖으로 전송되지 않습니다",
    "JSON 파일",
    "인터넷 통신 기능이 없습니다",
    "Android 설정",
    "allweek1@gmail.com",
  ]) {
    assert.match(privacy, new RegExp(required));
  }
  assert.doesNotMatch(privacy, /YOUR_|PLACEHOLDER|TBD|미정/);
});

test("NihongoQ has a durable company-domain landing page and support path", async () => {
  const [page, shell, support] = await Promise.all([
    source("app/nihongoq/page.tsx"),
    source("app/nihongoq/nihongoq-shell.tsx"),
    source("app/nihongoq/support/page.tsx"),
  ]);
  for (const required of [
    "https://toolslab.co.kr/nihongoq",
    "Practical Japanese for Travel",
    "No account required",
    "Offline lesson audio",
    "https://apps.apple.com/kr/app/nihongoq/id6797822086",
    "한국어 학습자 안내",
  ]) assert.match(page + shell, new RegExp(required));
  assert.match(shell, /className="nq-site" lang="en"/);
  for (const required of [
    "https://toolslab.co.kr/nihongoq/support",
    "allweek1@gmail.com",
    "Settings &gt; Send Feedback",
    "Settings &gt; Privacy &amp; Ads",
    "iOS Settings &gt; Privacy &amp; Security &gt; Microphone",
    "unencrypted JSON",
    "Report Incorrect Content",
    "콘텐츠 수정 요청",
    "일본어 음성이 나오지 않을 때",
  ]) assert.match(support, new RegExp(required));
  assert.doesNotMatch(page + shell + support, /YOUR_|PLACEHOLDER|TBD|미정/);
});

test("NihongoQ iOS privacy policy matches local learning, temporary audio, feedback, and AdMob boundaries", async () => {
  const privacy = await source("app/nihongoq/privacy/page.tsx");
  for (const required of [
    "https://toolslab.co.kr/nihongoq/privacy",
    "Effective date: August 14, 2026",
    "without an account",
    "temporary file on your device",
    "built-in Japanese speech synthesiser",
    "Google Mobile Ads",
    "gad_has_consent_for_cookies=0",
    "forces every banner request into LTD",
    "invalid-traffic-detection-only cookies or local storage",
    "contextual programmatic demand",
    "does not use Google advertising processing to track you across",
    "모든 배너 요청을 LTD로 강제합니다",
    "무효 트래픽 탐지 전용 쿠키 또는 로컬 저장소",
    "사용자를 추적하는 목적으로 사용하지 않습니다",
    "iCloud Drive",
    "Nothing is sent to the developer until you review",
    "한국어 개인정보 처리방침",
    "allweek1@gmail.com",
  ]) assert.match(privacy, new RegExp(required));
  assert.doesNotMatch(privacy, /Non-personalised ads can still use identifiers|비개인 맞춤 광고도[^<]+식별자/);
  assert.doesNotMatch(privacy, /does not use (?:advertising|the internet)|인터넷 통신 기능이 없습니다/);
  assert.doesNotMatch(privacy, /YOUR_|PLACEHOLDER|TBD|미정/);
});

test("root app-ads file publishes exactly the NihongoQ AdMob seller relationship", async () => {
  const appAds = await source("public/app-ads.txt");
  assert.equal(appAds, "google.com, pub-8346658230857877, DIRECT, f08c47fec0942fa0\n");
});

test("privacy policy is English-primary, Korean-secondary, and names actual processors", async () => {
  const privacy = await source("app/privacy/page.tsx");
  for (const required of ["Trend Threads Privacy Policy", "English is the primary policy language", "한국어 개인정보 처리방침", "선택적 Threads 연결", "Supabase, Inc.", "Vercel Inc.", "Meta Threads API", "보관과 삭제", "계정 삭제", "allweek@naver.com"]) {
    assert.match(privacy, new RegExp(required));
  }
  assert.match(privacy, /requests <code>threads_basic<\/code> and <code>threads_keyword_search<\/code>/);
  assert.match(privacy, /encrypted separately for each Trend Threads user with AES-256-GCM/);
  assert.match(privacy, /performs exactly six reviewed RECENT keyword searches, waits 61 seconds, and repeats the same six searches/);
  assert.match(privacy, /ranks only individual posts whose search position or discovery across those terms increased/);
  assert.match(privacy, /Popular performs the six reviewed TOP searches once/);
  assert.match(privacy, /Each search is limited to 25 text posts/);
  assert.match(privacy, /temporarily displays individual text-post cards and opens the exact original permalink/);
  assert.match(privacy, /Post text, post IDs, usernames, permalinks, media, exact result counts, and the two observations are not retained/);
  assert.match(privacy, /lifecycle receipt[\s\S]+up to 24 hours/);
  assert.match(privacy, /does not fall back to an operator token, test data, public operator aggregates, or cached operator results/);
  assert.match(privacy, /does not send Meta Platform Data to OpenAI/);
  assert.doesNotMatch(privacy, /Cloudflare 및 OpenAI Sites/);
  assert.match(privacy, /사용자별로 AES-256-GCM 암호화/);
  assert.match(privacy, /RECENT 키워드 검색 6회를 실행하고 61초를 기다린 뒤 같은 6개 검색을 다시 실행/);
  assert.match(privacy, /검색 위치 또는 여러 검색어에서의 노출이 증가한 개별 게시물만 순위화/);
  assert.match(privacy, /TOP 검색 6회를 한 번 실행/);
  assert.match(privacy, /개별 텍스트 게시물 카드를 일시 표시하고 Threads의 정확한 원문 permalink/);
  assert.match(privacy, /운영자 토큰, 테스트 데이터, 공개 운영자 집계 또는 운영자 cache로 대체하지 않습니다/);
  assert.match(privacy, /최대 24시간/);
  assert.doesNotMatch(privacy, /current 1–6 activity ranking|현재 활동 1~6위|five-point activity bands|게시물[^\n]+표시하지 않습니다/);
  assert.doesNotMatch(privacy, /30 eligible RECENT posts|20 distinct authors|aggregate history|최대 8일|로그인 없이 이용/);
  assert.doesNotMatch(privacy, /Expo Push Service/);
  assert.doesNotMatch(privacy, /YOUR_|PLACEHOLDER|TBD|미정/);
});

test("support page documents the connected-user Method 2 flow and reachable help paths", async () => {
  const support = await source("app/support/page.tsx");
  assert.match(support, /Trend Threads Support/);
  assert.match(support, /English is the primary support language/);
  assert.match(support, /한국어 지원 안내/);
  assert.match(support, /mailto:allweek@naver\.com/);
  assert.match(support, /tel:07043503571/);
  assert.match(support, /계정 삭제/);
  assert.match(support, /<code>threads_basic<\/code>/);
  assert.match(support, /<code>threads_keyword_search<\/code>/);
  assert.match(support, /Connect Threads and view post rankings/);
  assert.match(support, /Continue with Threads/);
  assert.match(support, /View Threads post rankings/);
  assert.match(support, /Start rising measurement/);
  assert.match(support, /first six RECENT searches, waits 61 seconds, and repeats the same six searches/);
  assert.match(support, /exact original post on Threads/);
  assert.match(support, /does not fall back to an operator token/);
  assert.match(support, /첫 RECENT 검색 6회, 61초 대기, 같은 RECENT 검색 6회/);
  assert.match(support, /Threads의 정확한 원문 게시물/);
  assert.match(support, /운영자 토큰/);
  assert.match(support, /급상승 결과가 비어 있으면 61초 구간/);
  assert.doesNotMatch(support, /게시물 신고|작성자 숨기기/);
  assert.doesNotMatch(support, /로그인 없이|minimum-sample|cached aggregate signals|실시간 피드를 준비하고 있습니다/);
  assert.match(support, /href="\/data-deletion"/);
});

test("data deletion page covers in-app, local-only, and no-access deletion paths", async () => {
  const deletion = await source("app/data-deletion/page.tsx");
  assert.match(deletion, /Account and Data Deletion/);
  assert.match(deletion, /English is the primary deletion-guide language/);
  assert.match(deletion, /한국어 계정 및 데이터 삭제 안내/);
  for (const required of [
    "설정",
    "계정 삭제",
    "로컬 활동 데이터 삭제",
    "로그인할 수 없는 경우",
    "가입에 사용한 이메일 주소",
    "allweek@naver.com",
    "비밀번호, 인증 코드, Threads 액세스 토큰은 보내지 마세요",
  ]) assert.match(deletion, new RegExp(required));
  assert.match(deletion, /Supabase 인증 계정/);
  assert.match(deletion, /Settings → Threads account connection/);
  assert.match(deletion, /encrypted Threads access token, app-scoped account binding, and any pending OAuth state/);
  assert.match(deletion, /lifecycle receipts expire within 24 hours/);
  assert.match(deletion, /Search-result content and the two live observations used by Rising are transient/);
  assert.match(deletion, /temporarily displays safety-filtered post text, usernames, publication time, and exact official permalinks/);
  assert.match(deletion, /암호화 Threads 액세스 토큰/);
  assert.match(deletion, /검색 결과 콘텐츠와 급상승에 사용한 두 실제 관찰은 일시 처리/);
  assert.doesNotMatch(deletion, /Clear cached aggregates|저장된 집계 비우기/);
  assert.doesNotMatch(deletion, /aggregate history|최대 8일/);
  assert.doesNotMatch(deletion, /YOUR_|PLACEHOLDER|TBD|미정/);
});

test("terms identify the service as unofficial and its scores as internal", async () => {
  const terms = await source("app/terms/page.tsx");
  assert.match(terms, /Trend Threads Terms of Service/);
  assert.match(terms, /English is the primary terms language/);
  assert.match(terms, /한국어 이용약관/);
  assert.match(terms, /비공식 발견 도구/);
  assert.match(terms, /내부 검색 가시성 추정/);
  assert.match(terms, /Meta 또는 Threads와 제휴/);
  assert.match(terms, /계정 삭제/);
  assert.match(terms, /플랫폼 전체 조회 수/);
  assert.match(terms, /RECENT 관찰을 61초 간격으로 비교/);
  assert.match(terms, /TOP 검색 6회의 내부 추정/);
  assert.match(terms, /Threads의 정확한 공식 permalink/);
  assert.match(terms, /<code>threads_basic<\/code>과 <code>threads_keyword_search<\/code>/);
  assert.match(terms, /운영자 토큰, 공개 운영자 집계, 운영자 cache, 임의 콘텐츠 또는 테스트 데이터로 대체하지 않습니다/);
  assert.doesNotMatch(terms, /로그인 없이 이용|30 eligible|최소 표본/);
});
