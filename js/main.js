document.addEventListener('DOMContentLoaded', () => {

  /* ---------- footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- mobile nav toggle (drawer + backdrop) ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('primaryNav');
  const backdrop = document.getElementById('navBackdrop');

  const closeNav = () => {
    nav.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  const openNav = () => {
    nav.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
  };

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.contains('open') ? closeNav() : openNav();
    });
    nav.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', closeNav);
    });
    if (backdrop) backdrop.addEventListener('click', closeNav);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNav();
    });
  }

  /* ---------- scroll progress rail ---------- */
  const railFill = document.getElementById('railFill');
  const updateRail = () => {
    if (!railFill) return;
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const pct = height > 0 ? (scrollTop / height) * 100 : 0;
    railFill.style.height = pct + '%';
  };
  document.addEventListener('scroll', updateRail, { passive: true });
  updateRail();

  /* ---------- scroll-spy active nav tab ---------- */
  const tabs = Array.from(document.querySelectorAll('.tab[data-tab]'));
  const targets = tabs
    .map(t => document.querySelector(t.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && targets.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          tabs.forEach(t => t.classList.toggle('active', t.getAttribute('href') === id));
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    targets.forEach(t => spy.observe(t));
  }

  /* ---------- reveal on scroll ---------- */
  const revealTargets = document.querySelectorAll(
    '.section-head, .about-text, .stat-grid, .commit, .skill-card, .cert-card, .project-card, .award-card, .publication-card, .contact-grid'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(el => revealObserver.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in'));
  }

  /* ---------- skill meters fill on view ---------- */
  const meters = document.querySelectorAll('.meter span');
  if ('IntersectionObserver' in window && meters.length) {
    const meterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const span = entry.target;
          const target = span.style.width;
          span.style.width = '0%';
          requestAnimationFrame(() => { span.style.width = target; });
          meterObserver.unobserve(span);
        }
      });
    }, { threshold: 0.4 });
    meters.forEach(m => meterObserver.observe(m));
  }

  /* ---------- terminal typing effect ---------- */
  const typeOut = document.getElementById('typeOut');
  if (typeOut) {
    const line = 'Taha Basrawala — Senior Software Engineer, Full-Stack & Data';
    let i = 0;
    const type = () => {
      if (i <= line.length) {
        typeOut.textContent = line.slice(0, i);
        i++;
        setTimeout(type, 22);
      }
    };
    setTimeout(type, 400);
  }

  /* ---------- contact form (mailto) ---------- */
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !subject || !message) {
        if (note) note.textContent = 'Please fill in every field before sending.';
        return;
      }

      const mailSubject = encodeURIComponent(subject);
      const mailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:taha11092@outlook.com?subject=${mailSubject}&body=${mailBody}`;
      if (note) note.textContent = 'Opening your email client…';
    });
  }
});