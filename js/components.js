class SiteNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const currentPath = window.location.pathname;
    const isHome = currentPath.endsWith('index.html') || currentPath === '/';
    const isProjects = currentPath.includes('project');
    const isAbout = currentPath.includes('about');
    const isContact = currentPath.includes('contact');

    this.innerHTML = `
      <style>
        .navbar {
          padding: 1.5rem 0;
          background-color: rgba(21, 34, 36, 0.9);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid var(--border-color);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo span { color: var(--primary); }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-links a {
          color: var(--text-main);
          font-weight: 500;
          font-size: 0.95rem;
        }
        .nav-links a:hover, .nav-links a.active {
          color: var(--primary);
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          font-size: 1.5rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--bg-card);
            flex-direction: column;
            padding: 2rem;
            border-bottom: 1px solid var(--border-color);
          }
          .nav-links.show { display: flex; }
          .mobile-toggle { display: block; }
        }
      </style>
      <nav class="navbar">
        <div class="container nav-container">
          <a href="index.html" class="logo">Haneen<span>.</span></a>
          <button class="mobile-toggle" aria-label="Toggle menu">☰</button>
          <div class="nav-links">
            <a href="index.html" class="nav-link ${isHome ? 'active' : ''}">Home</a>
            <a href="projects.html" class="nav-link ${isProjects ? 'active' : ''}">Work</a>
            <a href="about.html" class="nav-link ${isAbout ? 'active' : ''}">About Me</a>
            <a href="contact.html" class="nav-link ${isContact ? 'active' : ''}">Contact</a>
            <a href="#" class="btn btn-primary" style="padding: 0.5rem 1.2rem;">Resume</a>
          </div>
        </div>
      </nav>
    `;

    const toggle = this.querySelector('.mobile-toggle');
    const links = this.querySelector('.nav-links');
    toggle.addEventListener('click', () => {
      links.classList.toggle('show');
      toggle.innerHTML = links.classList.contains('show') ? '✕' : '☰';
    });
  }
}

class SiteFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer {
          padding: 3rem 0;
          background-color: #0f181a;
          border-top: 1px solid var(--border-color);
          text-align: center;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          transition: all var(--transition-fast);
        }
        .social-link:hover {
          background-color: var(--primary);
          color: #152224;
          transform: translateY(-3px);
        }
      </style>
      <footer class="footer">
        <div class="container">
          <div class="social-links">
            <a href="#" class="social-link" aria-label="LinkedIn">in</a>
            <a href="#" class="social-link" aria-label="Behance">Be</a>
            <a href="#" class="social-link" aria-label="Dribbble">Dr</a>
            <a href="#" class="social-link" aria-label="Twitter">Tw</a>
          </div>
          <p>© ${new Date().getFullYear()} Haneen. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-navbar', SiteNavbar);
customElements.define('site-footer', SiteFooter);
