import { useState } from 'react'
import './App.css'

const currentYear = new Date().getFullYear()

const services = [
  {
    number: '01',
    title: 'IT support & repairs',
    description:
      'Practical help for computers that need a little care, a fresh setup, or a closer look.',
    items: ['Hardware repairs', 'Troubleshooting', 'Software installation' , 'Screen replacement'],
    icon: 'tools',
  },
  {
    number: '02',
    title: 'Website design & development',
    description:
      'Clear, modern websites designed to help your business show up and make a great first impression.',
    items: ['Responsive websites', 'Design & development', 'Website updates' ,'free hosting '],
    icon: 'window',
  },
  {
    number: '03',
    title: 'Graphic design & branding',
    description:
      'Thoughtful visuals that bring your business to life and keep your brand looking consistent.',
    items: ['Posters & flyers', 'Business cards', 'Logos & branding'],
    icon: 'spark',
  },
]

const projects = [
  {
    id: 'multi-device-showcase',
    category: 'WEB DESIGN',
    title: 'Multi-device website showcase',
    image: '/projects/website-showcase.png',
    alt: 'Website designs displayed across desktop, tablet, and phone screens',
    artwork: 'website',
  },
  {
    id: 'creative-web-design',
    category: 'WEB DESIGN',
    title: 'Creative web design',
    image: '/projects/web-design.jpg',
    alt: 'Creative web design displayed on a desktop computer',
    artwork: 'website',
  },
  {
    id: 'morning-restaurant-branding',
    category: 'BRANDING',
    title: 'The Morning Restaurant identity',
    image: '/projects/Branding.jpg',
    alt: 'The Morning Restaurant logo featuring a bird and blue lettering',
    artwork: 'branding',
  },
  {
    id: 'health-and-safety-branding',
    category: 'BRANDING',
    title: 'Health & Safety identity',
    image: '/projects/Health.png',
    alt: 'Health & Safety logo with the tagline Commit to Care',
    artwork: 'branding',
  },
  {
    id: 'makaras-restaurant-campaign',
    category: 'GRAPHIC DESIGN',
    title: 'Makara’s Restaurant campaign',
    image: '/projects/food-poster.png',
    alt: 'Bright burger promotion poster created for Makara’s Restaurant',
    artwork: 'campaign',
  },
  {
    id: 'silk-temptations-poster',
    category: 'GRAPHIC DESIGN',
    title: 'Fashion Design Poster',
    image: '/projects/Silk.png',
    alt: 'Silk Temtations Fashion Design Poster',
    artwork: 'campaign',
  },
]

function Icon({ name, size = 22 }) {
  const paths = {
    tools: (
      <>
        <path d="m14.7 6.3 3-3a5 5 0 0 1-6.8 6.8l-7.5 7.5a2.1 2.1 0 0 1-3-3l7.5-7.5a5 5 0 0 1 6.8-6.8l-3 3 3 3Z" />
      </>
    ),
    window: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 4v5" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
        <path d="m19 14 1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" />
      </>
    ),
    arrow: <path d="M5 12h14m-7-7 7 7-7 7" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m18 6-12 12M6 6l12 12" />,
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M21 16.4v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.6 2 2 0 0 1 3.1 1.4h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7 9.4a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2.1Z" />
    ),
  }

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function BrandLogo() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" role="img" aria-label="Coda Fix logo">
        <circle cx="24" cy="24" r="18.5" />
        <path d="M31 13.5a12.5 12.5 0 0 1 0 21l-1.8 1.9A15.7 15.7 0 0 0 31 9.5l1.8 4Z" />
        <path d="M26.5 16.5h-7.5A7.5 7.5 0 0 0 11.5 24a7.5 7.5 0 0 0 7.5 7.5h7.5" />
        <path d="M29 18.8 34 24l-5 5.2" />
      </svg>
    </span>
  )
}

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('ALL')
  const filters = ['ALL', 'WEB DESIGN', 'BRANDING', 'GRAPHIC DESIGN']
  const visibleProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" onClick={closeMenu} aria-label="Coda Fix home">
          <BrandLogo />
          <span className="brand-name">CODA FIX <small>& DESIGN HUB</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="/#services" onClick={closeMenu}>Services</a>
          <a href="/portfolio" aria-current="page" onClick={closeMenu}>My work</a>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="/#contact" onClick={closeMenu}>
            Let&apos;s talk <Icon name="arrow" size={16} />
          </a>
        </nav>
      </header>

      <main className="portfolio-page section-wrap section-pad">
        <div className="portfolio-page-heading">
          <p className="eyebrow">SELECTED PROJECTS</p>
          <h1>My portfolio.<br /><span>Design made to stand out.</span></h1>
          <p>Websites, brand identities and graphic design made with care for real-world ideas.</p>
        </div>

        <div className="portfolio-filters" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? 'portfolio-filter is-active' : 'portfolio-filter'}
              type="button"
              key={filter}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'ALL' ? 'All projects' : filter}
            </button>
          ))}
        </div>

        <div className="work-grid portfolio-grid" aria-live="polite">
          {visibleProjects.map((project) => (
            <article className="work-card" key={project.id}>
              <div className={`work-image work-image-${project.artwork}`}>
                <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
              </div>
              <div className="work-caption">
                <div><span>{project.category}</span><h2>{project.title}</h2></div>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-contact">
          <p>Have an idea you&apos;d like to bring to life?</p>
          <a className="button button-dark" href="/#contact">
            Let&apos;s work together <Icon name="arrow" size={18} />
          </a>
        </div>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="/">
          <BrandLogo />
          <span className="brand-name">CODA FIX <small>& DESIGN HUB</small></span>
        </a>
        <p>IT support & creative design, made personal.</p>
        <span className="copyright">© {currentYear} Coda Fix & Design Hub</span>
      </footer>
    </>
  )
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Coda Fix home">
          <BrandLogo />
          <span className="brand-name">CODA FIX <small>& DESIGN HUB</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="/portfolio" onClick={closeMenu}>My work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <Icon name="arrow" size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> YOUR LOCAL TECH & CREATIVE PARTNER</p>
            <h1>Good ideas deserve <span>great design.</span></h1>
            <p className="hero-intro">
              From a computer that needs fixing to a brand ready to be seen, I make
              technology work better for you.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Start a project <Icon name="arrow" size={18} />
              </a>
              <a className="text-link" href="#services">Explore services <span>↓</span></a>
            </div>
            <div className="hero-proof">
              <span className="proof-icon"><Icon name="pin" size={17} /></span>
              <span>Based in Maseru, Lesotho <i>·</i> Available on the move</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of creative design work">
            <div className="art-glow" />
            <div className="art-backdrop" />
            <div className="art-label"><span /> DESIGN THAT WORKS FOR YOU</div>
            <div className="art-card art-card-main">
              <div className="art-browser">
                <span /><span /><span />
                <div className="browser-line" />
              </div>
              <div className="art-page">
                <div className="art-page-top"><span>YOUR BRAND</span><span>MENU&nbsp; ☰</span></div>
                <div className="art-page-title">Make your<br /><em>mark.</em></div>
                <div className="art-page-line" />
                <div className="art-page-cta">LET&apos;S BUILD SOMETHING</div>
                <div className="art-page-circle">C<span>+</span></div>
              </div>
            </div>
            <div className="art-card art-card-note">
              <span className="note-star">✳</span>
              <span>CREATIVE<br />MEETS<br /><b>TECH.</b></span>
            </div>
            <div className="art-sticker"><span>IDEAS<br />INTO<br /><b>IMPACT</b></span><i>↗</i></div>
            <div className="art-dots" />
          </div>
        </section>

        <div className="ticker" aria-label="Services">
          <div className="ticker-track">
            {['IT SUPPORT', 'WEB DESIGN', 'GRAPHIC DESIGN', 'BRANDING', 'IT SUPPORT', 'WEB DESIGN', 'GRAPHIC DESIGN', 'BRANDING'].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<i>✳</i></span>
            ))}
          </div>
        </div>

        <section className="services section-wrap section-pad" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOW I CAN HELP</p>
              <h2>One hub. <span>Lots of possibilities.</span></h2>
            </div>
            <p className="heading-note">Thoughtful tech support and creative services, all in one place.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-icon"><Icon name={service.icon} size={23} /></span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => <li key={item}><span>↗</span>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-wrap">
            <div className="section-heading work-heading">
              <div>
                <p className="eyebrow">SELECTED PROJECTS</p>
                <h2>My portfolio.<br /><span>Design made to stand out.</span></h2>
              </div>
              <p className="heading-note">A collection of website, branding and graphic design work created for real-world ideas.</p>
            </div>
            <div className="work-grid">
              {projects.map((project) => (
                <article className="work-card" key={project.id}>
                  <div className={`work-image work-image-${project.artwork}`}>
                    {project.image ? (
                      <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
                    ) : (
                      <div className={`art-placeholder placeholder-${project.artwork}`}>
                        <span className="placeholder-tag">YOUR PROJECT IMAGE</span>
                        {project.artwork === 'website' && (
                          <div className="mini-site">
                            <div className="mini-site-nav"><b>STUDIO</b><span>ABOUT&nbsp;&nbsp; WORK&nbsp;&nbsp; CONTACT</span></div>
                            <div className="mini-site-title">A better<br /><i>digital</i> space.</div>
                            <div className="mini-site-circle">↗</div>
                            <div className="mini-site-footer">DESIGNED TO MAKE AN IMPRESSION</div>
                          </div>
                        )}
                        {project.artwork === 'branding' && (
                          <div className="brand-board">
                            <div className="brand-board-main"><span>YOUR</span><b>Brand</b><i>MAKE IT MEMORABLE</i></div>
                            <div className="brand-swatches"><i /><i /><i /><i /></div>
                          </div>
                        )}
                        {project.artwork === 'campaign' && (
                          <div className="poster-art">
                            <span className="poster-small">A LITTLE BIT OF</span>
                            <b>GOOD<br />ENERGY</b>
                            <span className="poster-oval">MAKE IT<br />HAPPEN</span>
                            <span className="poster-bottom">YOUR MESSAGE, BEAUTIFULLY MADE.</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="work-caption">
                    <div><span>{project.category}</span><h3>{project.title}</h3></div>
                    <span className="work-arrow"><Icon name="arrow" size={17} /></span>
                  </div>
                </article>
              ))}
            </div>
            <p className="gallery-note">Have a project in mind? <a href="#contact">Let&apos;s make it happen.</a></p>
            <div className="home-portfolio-link">
              <a className="button button-dark" href="/portfolio">
                View full portfolio <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="about-stamp" aria-hidden="true"><span>TECH WITH A<br />CREATIVE TOUCH</span><b>✳</b></div>
          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Hi, I&apos;m <span>Retselisitsoe.</span></h2>
            <p>
              I&apos;m an IT professional and creative problem-solver who enjoys making
              technology feel a little less complicated and design a lot more meaningful.
            </p>
            <p>
              I hold a Diploma in Information Technology from IBC College and am
              currently pursuing a BSc in Information Technology at Limkokwing
              University of Creative Technology and doing year 3. I&apos;ve worked on a range of projects,
              with more ideas and builds on the way.
            </p>
            <div className="about-location"><Icon name="pin" size={18} /><span>Maseru Upper Thamae · Limkokwing University</span></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner section-wrap">
            <div className="contact-copy">
              <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
              <h2>Let&apos;s make it <span>happen.</span></h2>
              <p>Tell me what you need, and we&apos;ll figure out the next step together.</p>
              <a
                className="button button-light"
                href="https://wa.me/26651850220?text=Hi%20Coda%20Fix%20%26%20Design%20Hub%2C%20I%27d%20like%20to%20ask%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="contact-details">
              <a href="tel:+26651850220"><span><Icon name="phone" size={19} /></span><div><small>CALL OR WHATSAPP</small><b>+266 5185 0220</b></div></a>
              <a href="tel:+26663186688"><span><Icon name="phone" size={19} /></span><div><small>ALSO REACH ME ON</small><b>+266 6318 6688</b></div></a>
              <a href="mailto:retselisitsoemokhele737@gmail.com"><span><Icon name="mail" size={19} /></span><div><small>SEND AN EMAIL</small><b>retselisitsoemokhele737@gmail.com</b></div></a>
              <div className="contact-location"><span><Icon name="pin" size={19} /></span><div><small>WHERE I WORK</small><b>Maseru · Upper Thamae & · Limkokwing</b><em>Mobile service available</em></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <BrandLogo />
          <span className="brand-name">CODA FIX <small>& DESIGN HUB</small></span>
        </a>
        <p>IT support & creative design, made personal.</p>
        <span className="copyright">© {currentYear} Coda Fix & Design Hub</span>
      </footer>
    </>
  )
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  return path === '/portfolio' ? <PortfolioPage /> : <HomePage />
}

export default App
