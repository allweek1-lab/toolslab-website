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
  for (const required of ["Trend Threads Privacy Policy", "English is the primary policy language", "한국어 개인정보 처리방침", "앱에 전달되는 정보", "Supabase, Inc.", "Vercel Inc.", "Meta Threads API", "보관, 삭제", "계정 삭제", "allweek@naver.com"]) {
    assert.match(privacy, new RegExp(required));
  }
  assert.match(privacy, /does not receive Threads post text, usernames, profiles/);
  assert.match(privacy, /normalized post, author, and observation evidence is deleted within a rolling maximum of 24 hours/i);
  assert.match(privacy, /does not send Meta Platform Data to OpenAI/);
  assert.doesNotMatch(privacy, /Cloudflare 및 OpenAI Sites/);
  assert.match(privacy, /적격 게시물 30개/);
  assert.match(privacy, /성공적으로 완료된 공식 RECENT 수집 2회/);
  assert.match(privacy, /최소 15분/);
  assert.match(privacy, /partial·실패·진행 중인 수집/);
  assert.match(privacy, /15분 미만 간격으로 이어진 재시도·중복 요청과 TOP-only 근거는 별도 수집으로 인정하지 않습니다/);
  assert.match(privacy, /최대 24시간/);
  assert.match(privacy, /최대 8일/);
  assert.doesNotMatch(privacy, /게시물 본문, 사용자명[^\n]+전달됩니다/);
  assert.doesNotMatch(privacy, /Expo Push Service/);
  assert.doesNotMatch(privacy, /YOUR_|PLACEHOLDER|TBD|미정/);
});

test("support page publishes reachable contact and aggregate-topic help paths", async () => {
  const support = await source("app/support/page.tsx");
  assert.match(support, /Trend Threads Support/);
  assert.match(support, /English is the primary support language/);
  assert.match(support, /한국어 지원 안내/);
  assert.match(support, /mailto:allweek@naver\.com/);
  assert.match(support, /tel:07043503571/);
  assert.match(support, /계정 삭제/);
  assert.match(support, /주제 저장·해제/);
  assert.match(support, /실시간 피드를 준비하고 있습니다/);
  assert.match(support, /실제 콘텐츠는[^\n]+Threads/);
  assert.doesNotMatch(support, /게시물 신고|작성자 숨기기/);
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
  assert.match(deletion, /개별 Threads 게시물 사본을 제공하거나 보관하지 않습니다/);
  assert.match(deletion, /최대 24시간/);
  assert.match(deletion, /최대 8일/);
  assert.doesNotMatch(deletion, /YOUR_|PLACEHOLDER|TBD|미정/);
});

test("terms identify the service as unofficial and its scores as internal", async () => {
  const terms = await source("app/terms/page.tsx");
  assert.match(terms, /Trend Threads Terms of Service/);
  assert.match(terms, /English is the primary terms language/);
  assert.match(terms, /한국어 이용약관/);
  assert.match(terms, /비공식 탐색 도구/);
  assert.match(terms, /자체 지표/);
  assert.match(terms, /Meta 또는 Threads와 제휴/);
  assert.match(terms, /계정 삭제/);
  assert.match(terms, /조회수/);
  assert.match(terms, /게시물·계정·미디어를 복제하거나 재배포하지 않으며/);
});
