const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const imagePath = (project, file) => `assets/images/projects/${project.id}/${file}`;
const pad = (n) => String(n).padStart(2, '0');

/* ---------- Footer year ---------- */
const year = $('#year');
if (year) year.textContent = new Date().getFullYear();

/* ---------- Dark / light toggle ---------- */
$('#theme-toggle')?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch {}
});

/* ---------- Mobile menu ---------- */
const menuButton = $('#menu-toggle');
const navLinks = $('#nav-links');

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  menuButton.classList.toggle('active', open);
  menuButton.setAttribute('aria-expanded', open);
}

menuButton?.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
navLinks?.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});

/* ---------- Project cards (home shows data-limit, projects page shows all) ---------- */
const projectCard = (p, i) => `
  <li class="project-item">
    <a href="project.html?id=${p.id}" class="project-image">
      <img src="${imagePath(p, p.images[0].file)}" alt="${p.title}" loading="lazy">
      <span class="project-number">${pad(i + 1)}</span>
    </a>
    <div class="project-info">
      <span class="project-category">${p.category}</span>
      <h3><a href="project.html?id=${p.id}">${p.title}</a></h3>
      <p>${p.summary}</p>
      <a href="project.html?id=${p.id}" class="view-more">View more →</a>
    </div>
  </li>`;

const projectList = $('#project-list');
if (projectList) {
  const limit = Number(projectList.dataset.limit) || projects.length;
  projectList.innerHTML = projects.slice(0, limit).map(projectCard).join('');
}

/* ---------- Project detail page ---------- */
const detail = $('#project-detail');
if (detail) renderProject(detail);

function renderProject(root) {
  const id = new URLSearchParams(location.search).get('id');
  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) {
    root.innerHTML = `
      <div class="not-found">
        <h1>Project not found</h1>
        <a href="projects.html" class="btn btn-outline">Back to projects</a>
      </div>`;
    return;
  }

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const meta = [project.category, project.year, project.location].filter(Boolean);

  document.title = `${project.title} | Nolawit Abera`;

  root.innerHTML = `
    <header class="project-hero">
      <a href="projects.html" class="back-link">← All projects</a>
      <span class="project-count">${pad(index + 1)} / ${pad(projects.length)}</span>
      <h1>${project.title}</h1>
      <ul class="project-meta">${meta.map((m) => `<li>${m}</li>`).join('')}</ul>
    </header>

    <section class="project-intro">
      ${project.description.map((text) => `<p>${text}</p>`).join('')}
    </section>

    <section class="shots">
      ${project.images.map((img, i) => `
        <figure class="shot">
          <button class="shot-image" data-index="${i}" aria-label="View image ${i + 1} full screen">
            <img src="${imagePath(project, img.file)}" alt="${project.title}, image ${i + 1}" loading="lazy">
          </button>
          <figcaption>
            <span class="shot-number">${pad(i + 1)}</span>
            <p>${img.caption}</p>
          </figcaption>
        </figure>`).join('')}
    </section>

    <a href="project.html?id=${next.id}" class="next-project">
      <span>Next project</span>
      <strong>${next.title} →</strong>
    </a>`;

  initLightbox(
    project.images.map((img) => ({ src: imagePath(project, img.file), caption: img.caption })),
    root
  );
}

/* ---------- Full-screen image viewer ---------- */
function initLightbox(items, root) {
  const box = $('#lightbox');
  const image = $('img', box);
  const caption = $('.lightbox-caption', box);
  const counter = $('.lightbox-counter', box);
  let current = 0;

  const show = (n) => {
    current = (n + items.length) % items.length;
    image.src = items[current].src;
    caption.textContent = items[current].caption;
    counter.textContent = `${current + 1} / ${items.length}`;
  };
  const open = (n) => {
    show(n);
    box.classList.add('open');
    document.body.classList.add('no-scroll');
  };
  const close = () => {
    box.classList.remove('open');
    document.body.classList.remove('no-scroll');
  };

  root.addEventListener('click', (e) => {
    const button = e.target.closest('.shot-image');
    if (button) open(Number(button.dataset.index));
  });
  $('.lightbox-close', box).addEventListener('click', close);
  $('.lightbox-prev', box).addEventListener('click', () => show(current - 1));
  $('.lightbox-next', box).addEventListener('click', () => show(current + 1));
  box.addEventListener('click', (e) => { if (e.target === box) close(); });

  document.addEventListener('keydown', (e) => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
}

/* ---------- Fade-in on scroll ---------- */
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  $$('.section-header, .project-item, .award-card, .shot, .project-intro').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}
/* ---------- Contact form (Formspree) ---------- */
const contactForm = $('#contact-form');

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const status = $('.form-status', contactForm);
  const button = $('button[type="submit"]', contactForm);

  button.disabled = true;
  status.textContent = 'Sending…';

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error();

    contactForm.reset();
    status.textContent = 'Thank you! Your message has been sent.';
  } catch {
    status.textContent = 'Something went wrong. Please email me directly.';
  } finally {
    button.disabled = false;
  }
});