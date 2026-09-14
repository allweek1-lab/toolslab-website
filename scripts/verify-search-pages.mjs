import assert from 'node:assert/strict';

const base = process.argv[2] || 'http://localhost:3127';
const paths = ['/', '/automation', '/automation/demo', '/automation/excel-csv-merge-guide'];
const titles = new Set();
for (const path of paths) {
  const response = await fetch(new URL(path, base), { headers: { 'User-Agent': 'Googlebot' } });
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title && !titles.has(title), `Unique title: ${path}`);
  titles.add(title);
  const canonical = `https://toolslab.co.kr${path === '/' ? '/' : path}`;
  const actualCanonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  const actualOgUrl = html.match(/property="og:url" content="([^"]+)"/)?.[1];
  assert.equal(new URL(actualCanonical).href, canonical, `Canonical: ${path}`);
  assert.equal(new URL(actualOgUrl).href, canonical, `OG URL: ${path}`);
  assert.ok(html.includes('property="og:image" content="https://toolslab.co.kr/og.png"'), `OG image: ${path}`);
  assert.ok(html.includes('name="twitter:image" content="https://toolslab.co.kr/og.png"'), `Twitter image: ${path}`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `One H1: ${path}`);
  assert.doesNotMatch(html, /<meta[^>]+content="[^"]*noindex/);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m => JSON.parse(m[1]));
  if (path === '/') assert.ok(schemas.some(s => s['@type'] === 'Organization'));
  if (path === '/automation') assert.ok(schemas.some(s => s['@type'] === 'Service'));
  if (path.endsWith('merge-guide')) {
    assert.ok(schemas.some(s => s['@type'] === 'Article'));
    assert.ok(html.includes('href="/automation/demo"'));
    assert.ok(html.includes('href="/automation#contact"'));
    assert.ok(html.includes('href="/automation#pricing"'));
    assert.equal((html.match(/<tbody>(.*?)<\/tbody>/s)?.[1].match(/<tr>/g) || []).length, 6);
    assert.ok(html.includes('가상 예시'));
  }
  if (path === '/automation') {
    assert.ok(html.includes('id="contact"'));
    assert.ok(html.includes('id="pricing"'));
  }
  console.log(`PASS ${path}: title, canonical, social metadata, H1, indexability, content`);
}
const sitemap = await (await fetch(new URL('/sitemap.xml', base))).text();
for (const path of paths) assert.ok(sitemap.includes(`https://toolslab.co.kr${path}`));
for (const path of ['/agency-partner', '/insights/listing-source-audit', '/passwordq/support']) assert.ok(sitemap.includes(path));
const robots = await (await fetch(new URL('/robots.txt', base))).text();
assert.ok(robots.includes('Sitemap: https://toolslab.co.kr/sitemap.xml'));
assert.doesNotMatch(robots, /Disallow: \/\s*(?:\n|$)/);
console.log('PASS sitemap includes new guide and existing products; robots permits discovery');
