document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Run once
      }
    });
  }, observerOptions);

  // Observe all elements with .animate-on-scroll
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });

  // Page Transitions
  const links = document.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"])');
  links.forEach(link => {
    link.addEventListener('click', e => {
      // Ignore component links if they aren't fully resolved or standard
      if (link.hostname !== window.location.hostname) return;
      if (link.getAttribute('href') === '#') return;

      e.preventDefault();
      const target = link.href;

      document.body.classList.add('page-transitioning');
      
      setTimeout(() => {
        window.location.href = target;
      }, 300); // Matches CSS fadeOutPage animation duration
    });
  });

  // Optional parallax effect on hero
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      if (scrollPos < window.innerHeight) {
        const heroImg = document.querySelector('.hero-image');
        if (heroImg) {
          heroImg.style.transform = `translateY(${scrollPos * 0.2}px)`;
        }
      }
    });
  }

  /* ── Mouse glow effect on cards ── */
  document.querySelectorAll('.wid-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top)  / rect.height) * 100;
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });
});

