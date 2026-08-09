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
