import React, { useEffect, useState } from 'react';

const staticFeatures = [
  '3 custom pages: Home, About & Contact',
  'Mobile-friendly responsive design',
  'Fast-loading experience',
  'Basic SEO setup',
];

const dynamicFeatures = [
  'Custom design & features',
  'CMS integration (WordPress or custom)',
  'Dynamic content & admin panel',
  'Database & backend setup',
  'Responsive across all devices',
  'Add-ons tailored to your needs',
];

function Icon({ name, size = 22 }) {
  const shared = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    code: <><path d="m8 17-5-5 5-5" /><path d="m16 7 5 5-5 5" /><path d="m14 4-4 16" /></>,
    laptop: <><rect x="4" y="4" width="16" height="12" rx="1.5" /><path d="M2 20h20l-2-4H4l-2 4Z" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    bolt: <path d="m13 2-3 8H5l6 12 3-8h5L13 2Z" />,
    headset: <><path d="M3 14v-3a9 9 0 0 1 18 0v3" /><path d="M5 14h2v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Zm14 0h-2v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2ZM17 20c-1 1-2.5 1.5-5 1.5" /></>,
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" /><path d="m19 14 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" /></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3.1a2 2 0 0 1-.6 1.7L7.2 10.3a16 16 0 0 0 6 6l1.8-1.8a2 2 0 0 1 1.7-.6l3.1.5a2 2 0 0 1 2.2 2.5Z" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
  };

  return <svg {...shared}>{paths[name]}</svg>;
}

function Brand({ compact = false }) {
  return (
    <a className={`brand${compact ? ' brand--compact' : ''}`} href="#top" aria-label="Novaspire Tech home">
      <img src="/novaspire-logo.jpg" alt="" />
      <span className="brand__name">NOVASPIRE<span>TECH</span></span>
    </a>
  );
}

function FeatureList({ features, tone }) {
  return (
    <ul className={`feature-list feature-list--${tone}`}>
      {features.map((feature) => (
        <li key={feature}>
          <Icon name="check" size={17} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function WebsitePreview() {
  return (
    <div className="preview-wrap" aria-label="Example website displayed on a laptop and phone">
      <div className="preview-glow" />
      <div className="preview-browser">
        <div className="browser-bar"><span /><span /><span /><div>yourbusiness.com</div></div>
        <div className="preview-site">
          <div className="preview-nav"><b>YOUR BRAND</b><span>Home&nbsp;&nbsp; About&nbsp;&nbsp; Services&nbsp;&nbsp; Contact</span></div>
          <div className="preview-copy">
            <small>WELCOME TO YOUR NEXT CHAPTER</small>
            <strong>Build your<br />dream business.</strong>
            <span>Thoughtful design. Real results.</span>
            <i>Get started&nbsp; →</i>
          </div>
          <div className="preview-hill preview-hill--back" />
          <div className="preview-hill preview-hill--front" />
        </div>
      </div>
      <div className="preview-phone">
        <div className="phone-notch" />
        <span className="phone-brand">YOUR BRAND</span>
        <b>Big ideas.<br />Made digital.</b>
        <div className="phone-button">Let's talk&nbsp; →</div>
        <div className="phone-art" />
      </div>
      <div className="preview-caption"><span className="caption-dot" /> DESIGNED FOR EVERY SCREEN</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }

    document.documentElement.classList.add('has-scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -48px 0px', threshold: 0.12 });

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('has-scroll-reveal');
    };
  }, []);

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#why-us" onClick={closeMenu}>Why Novaspire</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <Icon name="arrow" size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow"><span /> WEBSITE & APPLICATION DEVELOPMENT</div>
            <h1>Turn your ideas into <span>powerful digital solutions.</span></h1>
            <p className="hero-description">
              Modern websites, web and mobile applications, and custom software—built to move your business forward.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#services">Explore our services <Icon name="arrow" size={18} /></a>
              <a className="text-link" href="#contact">Have a project in mind?</a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars" aria-hidden="true"><span>N</span><span>+</span></div>
              <p><strong>Small business friendly</strong><br />Personal support from idea to launch</p>
            </div>
          </div>
          <div className="hero-visual" data-reveal>
            <div className="hero-visual-label"><span>01</span> YOUR BUSINESS. ONLINE.</div>
            <WebsitePreview />
            <div className="floating-note"><Icon name="spark" size={19} /><span>Built for<br /><strong>growth.</strong></span></div>
          </div>
        </section>

        <section id="services" className="services-section section-pad">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <div className="eyebrow"><span /> SIMPLE, TRANSPARENT PACKAGES</div>
                <h2>Everything you need to<br /><span>get online.</span></h2>
              </div>
              <p>Start with the essentials or build something completely custom. We’ll help you find the right fit.</p>
            </div>
            <div className="pricing-grid">
              <article className="price-card price-card--static" data-reveal>
                <div className="card-topline"><span className="service-icon"><Icon name="laptop" size={25} /></span><span className="package-tag">STARTER PACKAGE</span></div>
                <h3>Static Website</h3>
                <p className="card-intro">A professional online home for your business, portfolio, or personal brand.</p>
                <div className="price"><span className="currency">₹</span>499<span className="price-note"> / starting at</span></div>
                <div className="card-rule" />
                <p className="includes-label">Your package includes</p>
                <FeatureList features={staticFeatures} tone="cyan" />
                <a className="button button--outline button--cyan" href="#contact">Get started <Icon name="arrow" size={17} /></a>
              </article>

              <article className="price-card price-card--dynamic" data-reveal>
                <div className="card-topline"><span className="service-icon"><Icon name="code" size={25} /></span><span className="package-tag">GROWTH PACKAGE</span></div>
                <h3>Dynamic Website</h3>
                <p className="card-intro">A tailored, feature-rich experience for growing businesses and ambitious ideas.</p>
                <div className="price"><span className="currency">₹</span>2,000 <span className="price-dash">—</span> ₹6,000</div>
                <div className="card-rule" />
                <p className="includes-label">Built around your needs</p>
                <FeatureList features={dynamicFeatures} tone="purple" />
                <a className="button button--outline button--purple" href="#contact">Let's build yours <Icon name="arrow" size={17} /></a>
              </article>
            </div>
            <p className="pricing-note" data-reveal>Every project is different. Get in touch for a custom quote and a friendly chat about your idea.</p>
          </div>
        </section>

        <section id="why-us" className="benefits-section section-pad">
          <div className="container benefits-layout">
            <div className="benefits-heading" data-reveal>
              <div className="eyebrow"><span /> A BETTER WAY TO BUILD</div>
              <h2>Good tech.<br /><span>Good people.</span></h2>
              <p>We make the digital side of your business feel a little less complicated—and a lot more exciting.</p>
              <a className="text-link" href="#contact">Get to know us <Icon name="arrow" size={16} /></a>
            </div>
            <div className="benefit-grid">
              <article className="benefit" data-reveal><span className="benefit-icon"><Icon name="shield" /></span><h3>Secure & reliable</h3><p>Built with care, so your website is ready for the real world.</p></article>
              <article className="benefit" data-reveal><span className="benefit-icon"><Icon name="bolt" /></span><h3>Fast by design</h3><p>Thoughtful, lightweight experiences that get people where they need to go.</p></article>
              <article className="benefit" data-reveal><span className="benefit-icon"><Icon name="headset" /></span><h3>Here after launch</h3><p>Friendly, ongoing support when you need a hand or have a new idea.</p></article>
              <article className="benefit" data-reveal><span className="benefit-icon"><Icon name="spark" /></span><h3>Made for your budget</h3><p>Flexible options and clear pricing, without the unnecessary extras.</p></article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-panel">
            <div className="contact-copy" data-reveal>
              <div className="eyebrow"><span /> YOUR NEXT BIG IDEA STARTS HERE</div>
              <h2>Let’s build<br /><span>something great.</span></h2>
              <p>Tell us what you’re dreaming up. We’d love to help bring it to life.</p>
              <a className="button button--primary" href="https://wa.me/918805442778" target="_blank" rel="noreferrer">
                Start a conversation <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="contact-details" data-reveal>
              <a className="contact-method" href="tel:+918805442778">
                <span className="contact-icon"><Icon name="phone" /></span>
                <span><small>GIVE US A CALL</small><strong>88054 42778</strong></span>
                <Icon name="arrow" size={17} />
              </a>
              <div className="contact-method">
                <span className="contact-icon"><Icon name="pin" /></span>
                <span><small>FIND US</small><strong>Malkapur, India</strong></span>
              </div>
              <div className="contact-note">No pressure. Just good ideas and a friendly chat.</div>
            </div>
            <div className="contact-decoration" aria-hidden="true">N<span>.</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Brand compact />
          <p>We build your digital future.</p>
          <span className="founder-credit">Founder &amp; Owner: Ashraf Jamadar</span>
          <span>© {new Date().getFullYear()} Novaspire Tech. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
