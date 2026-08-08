import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("homepage exposes the public support and policy routes", async () => {
  const page = await source("app/page.tsx");
  assert.match(page, /href="\/support"/);
  assert.match(page, /href="\/privacy"/);
  assert.match(page, /href="\/terms"/);
});

test("privacy policy describes collection, providers, retention, deletion, and contact", async () => {
  const privacy = await source("app/privacy/page.tsx");
  for (const required of ["처리하는 정보", "Supabase", "Expo Push Service", "보관 기간과 삭제", "계정 삭제", "allweek@naver.com"]) {
    assert.match(privacy, new RegExp(required));
  }
  assert.doesNotMatch(privacy, /YOUR_|PLACEHOLDER|TBD|미정/);
});

test("support page publishes reachable contact and in-app safety paths", async () => {
  const support = await source("app/support/page.tsx");
  assert.match(support, /mailto:allweek@naver\.com/);
  assert.match(support, /tel:07043503571/);
  assert.match(support, /계정 삭제/);
  assert.match(support, /게시물 신고/);
  assert.match(support, /작성자 숨기기/);
});

test("terms identify the service as unofficial and its scores as internal", async () => {
  const terms = await source("app/terms/page.tsx");
  assert.match(terms, /비공식 탐색 도구/);
  assert.match(terms, /자체 지표/);
  assert.match(terms, /Meta 또는 Threads와 제휴/);
  assert.match(terms, /계정 삭제/);
});
