type IconName = "app" | "web" | "brand" | "video" | "arrow" | "mail" | "check" | "code" | "clock";

const services = [
  {
    id: "app",
    title: "앱 개발",
    english: "Mobile App Development",
    description: "아이디어 검증용 MVP부터 iOS·Android 앱까지, 사용 흐름을 중심으로 설계하고 개발합니다.",
    icon: "app" as IconName,
    className: "app-card",
  },
  {
    id: "web",
    title: "웹페이지 개발",
    english: "Web Development",
    description: "랜딩 페이지, 쇼핑몰, 기업 홈페이지까지 목적에 맞는 반응형 웹을 만듭니다.",
    icon: "web" as IconName,
    className: "web-card",
  },
  {
    id: "brand",
    title: "로고 개발",
    english: "Brand Identity",
    description: "브랜드의 가치를 알아보기 쉽게 보여주는 로고와 시각 언어를 설계합니다.",
    icon: "brand" as IconName,
    className: "brand-card",
  },
  {
    id: "video",
    title: "AI 광고 영상 제작",
    english: "AI Advertising Film",
    description: "AI 기술과 기획력을 결합해 제품과 브랜드를 위한 짧고 선명한 영상을 만듭니다.",
    icon: "video" as IconName,
    className: "video-card",
  },
];

const process = [
  ["1", "상담", "목표와 필요한 범위를 함께 정리합니다."],
  ["2", "기획", "기능, 화면, 제작 방향을 설계합니다."],
  ["3", "제작", "디자인과 개발을 정교하게 진행합니다."],
  ["4", "최종 검수", "품질을 확인하고 런칭을 준비합니다."],
  ["5", "사후 관리", "필요한 유지보수와 다음 단계를 지원합니다."],
];

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "app") return <svg {...common}><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></svg>;
  if (name === "web") return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></svg>;
  if (name === "brand") return <svg {...common}><path d="m14.5 4.5 5 5M4 20l4.1-1 10.4-10.4a2.1 2.1 0 0 0-3-3L5.1 16z" /><path d="m13 7 4 4" /></svg>;
  if (name === "video") return <svg {...common}><rect x="3" y="5" width="13" height="14" rx="2" /><path d="m16 10 5-3v10l-5-3z" /></svg>;
  if (name === "arrow") return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
  if (name === "mail") return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
  if (name === "check") return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
  if (name === "code") return <svg {...common}><path d="m8 8-4 4 4 4M16 8l4 4-4 4" /></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></svg>;
}

function Brand() {
  return <span className="brand"><span className="brand-mark">✺</span><span>ToolsLab</span></span>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a href="#top" aria-label="툴스랩 홈으로"><Brand /></a>
        <nav aria-label="주요 메뉴">
          <a href="#top">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <a className="contact-icon" href="mailto:contact@toolslab.co.kr" aria-label="이메일로 문의하기"><Icon name="mail" size={18} /></a>
      </header>

      <section className="hero">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-copy">
          <p className="hero-chip"><i /> 디지털 혁신과 장인정신의 만남</p>
          <h1>기술과 예술의 경계를 허무는<br /><strong>크리에이티브 랩, 툴스랩</strong></h1>
          <p>비즈니스의 디지털 혁신부터 브랜드의 감성까지, 툴스랩이 완성합니다.</p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:contact@toolslab.co.kr">프로젝트 문의하기 <Icon name="arrow" size={17} /></a>
            <a className="button soft" href="#services">서비스 보기</a>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">OUR EXPERTISE</p>
            <h2>아이디어를 실제 결과로 만드는<br />통합 크리에이티브 솔루션</h2>
          </div>
          <div className="bento-grid">
            {services.map((service) => (
              <article className={`service-card ${service.className}`} id={service.id} key={service.id}>
                <span className="service-icon"><Icon name={service.icon} /></span>
                <div>
                  <p className="service-title">{service.title}</p>
                  <small>{service.english}</small>
                </div>
                <p className="service-description">{service.description}</p>
                {service.id === "app" && <div className="app-visual" aria-hidden="true"><span>APP</span><b>01</b><i /></div>}
                {service.id === "web" && <div className="web-visual" aria-hidden="true"><Icon name="code" size={31} /></div>}
                {service.id === "video" && <div className="video-stroke" aria-hidden="true" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="portfolio-heading">
            <div>
              <p className="eyebrow">CONCEPT PORTFOLIO</p>
              <h2>보여주고 싶은 이야기를<br />각각의 방식으로 만듭니다.</h2>
            </div>
            <p>툴스랩의 제작 방향을 보여드리기 위한 콘셉트 작업입니다.</p>
          </div>
          <div className="portfolio-grid">
            <article className="portfolio-card logo-project">
              <div className="project-art logo-art" aria-label="NORI 로고 콘셉트">
                <span className="logo-orbit" />
                <b>NORI</b>
                <small>NORTHERN RITUAL</small>
              </div>
              <div className="project-copy"><p>01 · BRAND IDENTITY</p><h3>NORI 브랜드 로고</h3><span>로고 · 컬러 시스템 · 패키지 방향</span></div>
            </article>
            <article className="portfolio-card landing-project">
              <div className="project-art"><img src="/portfolio-landing.png" alt="스킨케어 브랜드 랜딩 페이지 콘셉트" /></div>
              <div className="project-copy"><p>02 · WEB EXPERIENCE</p><h3>스킨케어 랜딩 페이지</h3><span>웹 기획 · UI/UX · 반응형 개발</span></div>
            </article>
            <article className="portfolio-card film-project">
              <div className="project-art"><img src="/portfolio-ai-film.png" alt="향수 AI 광고 영상 콘셉트" /><span className="play-mark">▶</span></div>
              <div className="project-copy"><p>03 · AI ADVERTISING FILM</p><h3>향수 브랜드 필름</h3><span>콘셉트 · AI 비주얼 · 영상 연출</span></div>
            </article>
          </div>
        </div>
      </section>

      <section className="workflow" id="process">
        <div className="container">
          <div className="workflow-heading">
            <p className="eyebrow">WORKFLOW</p>
            <h2>워크플로우</h2>
            <p>투명하고 체계적인 프로세스로 좋은 결과물을 만듭니다.</p>
          </div>
          <ol>
            {process.map(([number, title, description]) => (
              <li className={number === "3" ? "active" : ""} key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <small>{description}</small>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="qualities">
        <div className="container">
          <div className="quality-grid">
            <article><Icon name="check" size={31} /><b>명확한 소통</b><p>필요한 일과 일정, 결과를 투명하게 공유합니다.</p></article>
            <article><Icon name="brand" size={31} /><b>통합 제작</b><p>앱·웹·브랜드·영상까지 하나의 흐름으로 만듭니다.</p></article>
            <article><Icon name="code" size={31} /><b>실용적인 기술</b><p>실제로 쓰기 쉽고 유지하기 좋은 구조를 선택합니다.</p></article>
            <article><Icon name="clock" size={31} /><b>지속적인 지원</b><p>런칭 이후에도 다음 개선을 함께 고민합니다.</p></article>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-inner">
          <p className="eyebrow">START A PROJECT</p>
          <h2>만들고 싶은 것을<br />편하게 알려주세요.</h2>
          <p>아직 구체적이지 않아도 괜찮습니다. 목표와 일정, 필요한 결과를 함께 정리해 현실적인 방법을 제안하겠습니다.</p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:contact@toolslab.co.kr">프로젝트 문의하기 <Icon name="arrow" size={17} /></a>
            <a className="phone-link" href="tel:07043503571">070-4350-3571</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div><Brand /><p>Digital innovation, thoughtfully made.</p></div>
          <div className="footer-contact"><a href="tel:07043503571">070-4350-3571</a><a href="mailto:contact@toolslab.co.kr">contact@toolslab.co.kr</a></div>
          <p>© {new Date().getFullYear()} ToolsLab. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
