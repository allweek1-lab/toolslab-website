import type { Metadata } from "next";
import Link from "next/link";
import { NihongoQShell } from "./nihongoq-shell";

const pageUrl = "https://toolslab.co.kr/nihongoq";

export const metadata: Metadata = {
  title: "NihongoQ | Practical Japanese for Travel",
  description:
    "Learn practical Japanese for real trips with guided dialogues, offline reference audio, speaking practice, and Korean or English learner guidance.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "NihongoQ | Practical Japanese for Travel",
    description: "Japanese you can use from the moment your trip begins.",
    url: pageUrl,
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    siteName: "NihongoQ",
  },
};

const features = [
  {
    number: "01",
    title: "Travel-first lessons",
    body: "Practise the Japanese you are likely to use at airports, stations, hotels, restaurants, shops, ryokan, and onsen.",
  },
  {
    number: "02",
    title: "Hear every line clearly",
    body: "Listen to bundled Japanese reference audio at normal or slow speed, even without an internet connection.",
  },
  {
    number: "03",
    title: "Take both sides of a conversation",
    body: "Follow guided dialogues, switch roles, record yourself, and compare your voice with the reference audio on your device.",
  },
  {
    number: "04",
    title: "Keep what matters to you",
    body: "Save useful words and phrases, add your own entries, review missed questions, and search the included offline JMdict dictionary.",
  },
];

const tripSteps = ["Airport", "Train", "Hotel", "Dining", "Shopping", "Ryokan"];

export default function NihongoQPage() {
  return (
    <NihongoQShell>
      <main lang="en">
        <section className="nq-hero">
          <div className="nq-hero-copy">
            <p className="nq-kicker">JAPANESE FOR REAL TRIPS</p>
            <h1>Know what to say<br />when your trip begins.</h1>
            <p className="nq-lead">
              NihongoQ turns real travel situations into approachable Japanese lessons,
              with clear audio, guided conversations, and learner guidance in English or Korean.
            </p>
            <div className="nq-actions">
              <a className="nq-button nq-button-primary" href="https://apps.apple.com/kr/app/nihongoq/id6797822086">
                Download on the App Store <span aria-hidden="true">↗</span>
              </a>
              <a className="nq-button nq-button-secondary" href="#learn-more">Explore the lessons</a>
            </div>
            <ul className="nq-badges" aria-label="App highlights">
              <li>No account required</li>
              <li>Korean &amp; English</li>
              <li>Offline lesson audio</li>
            </ul>
          </div>

          <div className="nq-phone" aria-label="Illustration of a NihongoQ travel dialogue">
            <div className="nq-phone-bar"><span>9:41</span><b>あ</b><span>●●●</span></div>
            <div className="nq-phone-title"><small>AT THE STATION</small><strong>Shinkansen</strong><span>Lesson 2 of 5</span></div>
            <div className="nq-dialogue nq-dialogue-staff">
              <small>STATION STAFF</small>
              <b>どちらまでですか？</b>
              <span>Where are you travelling to?</span>
              <i>Normal&nbsp;&nbsp;▶ &nbsp;&nbsp;Slow&nbsp;&nbsp;▶</i>
            </div>
            <div className="nq-dialogue nq-dialogue-traveller">
              <small>YOU</small>
              <b>東京までお願いします。</b>
              <span>To Tokyo, please.</span>
            </div>
            <div className="nq-phone-progress"><span /><span /><span /><span /><span /></div>
          </div>
        </section>

        <section className="nq-journey" aria-label="Travel lesson categories">
          {tripSteps.map((step, index) => <span key={step}><b>{String(index + 1).padStart(2, "0")}</b>{step}</span>)}
        </section>

        <section className="nq-section" id="learn-more">
          <div className="nq-section-heading">
            <p className="nq-kicker">LEARN WITH CONTEXT</p>
            <h2>Useful Japanese,<br />organised around your journey.</h2>
            <p>Start with a situation, hear how the exchange sounds, then practise the part you will actually say.</p>
          </div>
          <div className="nq-feature-grid">
            {features.map((feature) => (
              <article key={feature.number}>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="nq-offline">
          <div>
            <p className="nq-kicker">READY WHEN YOU TRAVEL</p>
            <h2>Core learning stays with you.</h2>
            <p>
              Lessons, Japanese reference audio, and JMdict search data are included with the app.
              Your saved learning records stay on your device. An internet connection may be used
              for the optional Home banner, policy pages, or sending feedback through your mail app.
            </p>
          </div>
          <div className="nq-offline-card">
            <span>あ</span>
            <p><strong>Normal</strong><i>▶</i></p>
            <p><strong>Slow</strong><i>▶</i></p>
            <small>Bundled Japanese audio</small>
          </div>
        </section>

        <section className="nq-korean" lang="ko">
          <p className="nq-kicker">한국어 학습자 안내</p>
          <h2>일본 여행에서 바로 쓸 표현을<br />상황과 대화로 익혀 보세요.</h2>
          <p>
            NihongoQ는 공항, 교통, 숙소, 식당, 쇼핑과 료칸·온천까지 여행 흐름에 맞춰
            일본어를 연습하는 앱입니다. 일반·느린 기준 음성, 역할 연습, 개인 단어장과
            오답 복습을 제공하며 계정 없이 시작할 수 있습니다.
          </p>
          <a className="nq-text-link" href="https://apps.apple.com/kr/app/id6797822086">App Store에서 보기 →</a>
        </section>

        <section className="nq-help-strip">
          <div><p className="nq-kicker">QUESTIONS OR FEEDBACK?</p><h2>We are here to help.</h2></div>
          <div>
            <Link className="nq-button nq-button-secondary" href="/nihongoq/support">Visit Support</Link>
            <Link className="nq-text-link" href="/nihongoq/privacy">Read the Privacy Policy →</Link>
          </div>
        </section>
      </main>
    </NihongoQShell>
  );
}
