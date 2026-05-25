const body = document.body;

function setupMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (!toggle || !nav) {
    return;
  }

  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    if (!nav.contains(target) && !toggle.contains(target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}

function setupActiveNav() {
  const page = body.dataset.page;
  if (!page) {
    return;
  }

  const activeLink = document.querySelector(`[data-nav="${page}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
    activeLink.setAttribute('aria-current', 'page');
  }
}

function setupServiceFilter() {
  const grid = document.querySelector('#servicesGrid');
  if (!grid) {
    return;
  }

  const cards = [...grid.querySelectorAll('.service-card')];
  const filterButtons = [...document.querySelectorAll('.filter-btn')];
  const searchInput = document.querySelector('#serviceSearch');
  const noResults = document.querySelector('#noResults');

  let activeFilter = 'all';
  let searchTerm = '';

  const applyFilter = () => {
    let visibleCount = 0;

    cards.forEach((card) => {
      const category = card.dataset.category || '';
      const searchable = card.dataset.search || '';

      const categoryMatch = activeFilter === 'all' || activeFilter === category;
      const textMatch = searchable.includes(searchTerm);
      const show = categoryMatch && textMatch;

      card.hidden = !show;
      if (show) {
        visibleCount += 1;
      }
    });

    if (noResults) {
      noResults.hidden = visibleCount !== 0;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'all';
      filterButtons.forEach((btn) => btn.classList.remove('is-active'));
      button.classList.add('is-active');
      applyFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchTerm = searchInput.value.trim().toLowerCase();
      applyFilter();
    });
  }

  applyFilter();
}

function setupContactForm() {
  const form = document.querySelector('#contactForm');
  if (!form) {
    return;
  }

  const success = document.querySelector('#formSuccess');

  const setError = (name, message) => {
    const slot = document.querySelector(`[data-error-for="${name}"]`);
    if (slot) {
      slot.textContent = message;
    }
  };

  const validate = () => {
    let isValid = true;

    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const topic = form.querySelector('#topic');
    const message = form.querySelector('#message');
    const consent = form.querySelector('#consent');

    setError('name', '');
    setError('email', '');
    setError('topic', '');
    setError('message', '');
    setError('consent', '');

    if (!name.value.trim()) {
      setError('name', 'Vul je naam in.');
      isValid = false;
    }

    const emailValue = email.value.trim();
    if (!emailValue) {
      setError('email', 'Vul je e-mailadres in.');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setError('email', 'Vul een geldig e-mailadres in.');
      isValid = false;
    }

    if (!topic.value) {
      setError('topic', 'Kies een onderwerp.');
      isValid = false;
    }

    if (!message.value.trim()) {
      setError('message', 'Schrijf een kort bericht.');
      isValid = false;
    }

    if (!consent.checked) {
      setError('consent', 'Je moet akkoord gaan om te verzenden.');
      isValid = false;
    }

    return isValid;
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validate()) {
      if (success) {
        success.textContent = '';
      }
      return;
    }

    form.reset();
    if (success) {
      success.textContent = 'Bedankt! Je bericht is verzonden. We nemen zo snel mogelijk contact op.';
    }
  });
}

function setupRevealOnScroll() {
  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  if (!revealItems.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 70, 260)}ms`;
    observer.observe(item);
  });
}

function setupFooterYear() {
  const yearSlot = document.querySelector('#year');
  if (yearSlot) {
    yearSlot.textContent = String(new Date().getFullYear());
  }
}

setupMobileMenu();
setupActiveNav();
setupServiceFilter();
setupContactForm();
setupRevealOnScroll();
setupFooterYear();
