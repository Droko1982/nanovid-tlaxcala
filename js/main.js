// Nanovid — interacciones del sitio
(function () {
  'use strict';

  // ============================================================
  // THEME (light/dark)
  // ============================================================
  const root = document.documentElement;
  const themeBtn = document.querySelector('.theme-btn');
  const storedTheme = localStorage.getItem('nv-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('nv-theme', theme);
    if (themeBtn) {
      const t = window.NANOVID_I18N[currentLang]?.theme || {};
      themeBtn.setAttribute('aria-label', theme === 'dark' ? t.light : t.dark);
    }
  }
  themeBtn?.addEventListener('click', () => {
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  // ============================================================
  // I18N
  // ============================================================
  const SUPPORTED = ['es', 'en', 'na'];
  const urlLang = new URLSearchParams(location.search).get('lang');
  const storedLang = localStorage.getItem('nv-lang');
  let currentLang =
    (urlLang && SUPPORTED.includes(urlLang)) ? urlLang :
    (storedLang && SUPPORTED.includes(storedLang)) ? storedLang :
    (navigator.language?.startsWith('en') ? 'en' : 'es');

  const HTML_LANG = { es: 'es-MX', en: 'en', na: 'nah' };

  function t(path) {
    const dict = window.NANOVID_I18N[currentLang] || window.NANOVID_I18N.es;
    const fallback = window.NANOVID_I18N.es;
    const get = (obj, p) => p.split('.').reduce((o, k) => (o == null ? null : o[k]), obj);
    return get(dict, path) ?? get(fallback, path) ?? '';
  }

  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val == null) return;
      const attr = el.getAttribute('data-i18n-attr');
      if (attr) el.setAttribute(attr, String(val).replace(/<[^>]*>/g, ''));
      else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = String(val).replace(/<[^>]*>/g, '');
      else if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
      else el.textContent = val;
    });
    // Update <html lang>, <title>, meta description
    document.documentElement.lang = HTML_LANG[currentLang] || 'es-MX';
    const titleEl = document.querySelector('title');
    if (titleEl) titleEl.textContent = t('meta.title');
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', t('meta.description'));
    // Refresh theme aria label
    if (themeBtn) {
      const theme = root.getAttribute('data-theme');
      const labels = window.NANOVID_I18N[currentLang]?.theme || {};
      themeBtn.setAttribute('aria-label', theme === 'dark' ? labels.light : labels.dark);
    }
    // Update language buttons
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-set-lang') === currentLang);
    });
    const cur = document.querySelector('.lang-current');
    if (cur) cur.textContent = (window.NANOVID_I18N[currentLang]?.lang?.current) || 'ES';
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem('nv-lang', lang);
    applyI18n();
    // Reflejar en URL sin recargar
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  }

  document.querySelectorAll('[data-set-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.getAttribute('data-set-lang'));
      document.querySelector('.lang-menu')?.classList.remove('open');
    });
  });

  const langBtn = document.querySelector('.lang-btn');
  const langMenu = document.querySelector('.lang-menu');
  langBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu?.classList.toggle('open');
  });
  document.addEventListener('click', () => langMenu?.classList.remove('open'));

  // Apply initial translation
  if (window.NANOVID_I18N) applyI18n();

  // ============================================================
  // MOBILE MENU
  // ============================================================
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ============================================================
  // YEAR
  // ============================================================
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ============================================================
  // CALCULADORA DE HIDRATACIÓN
  //   ml/día = peso(kg) × factor_actividad
  //   factor_actividad: low=33, med=38, high=45
  //   Garrafones (20L) por mes ≈ (litros_día × 30) / 20
  // ============================================================
  const calcWeight = document.getElementById('calc-weight');
  const calcActivity = document.getElementById('calc-activity');
  const calcLiters = document.getElementById('calc-liters');
  const calcGarrafones = document.getElementById('calc-garrafones');
  function recalc() {
    const w = parseFloat(calcWeight?.value);
    const factors = { low: 33, med: 38, high: 45 };
    const f = factors[calcActivity?.value] ?? 33;
    if (!w || w < 20 || w > 250) {
      if (calcLiters) calcLiters.textContent = '—';
      if (calcGarrafones) calcGarrafones.textContent = '—';
      return;
    }
    const liters = (w * f) / 1000;
    const garrafones = (liters * 30) / 20;
    if (calcLiters) calcLiters.textContent = liters.toFixed(1);
    if (calcGarrafones) calcGarrafones.textContent = Math.ceil(garrafones);
  }
  calcWeight?.addEventListener('input', recalc);
  calcActivity?.addEventListener('change', recalc);
  if (calcWeight) recalc();

  // ============================================================
  // FORMULARIO DE PEDIDO (FormSubmit AJAX)
  // ============================================================
  const form = document.getElementById('pedido-form');
  if (form) {
    const msg = form.querySelector('.form-msg');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      msg.className = 'form-msg';
      msg.textContent = '';
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = '…';
      const data = Object.fromEntries(new FormData(form));
      const endpoint = form.dataset.endpoint;
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            ...data,
            _subject: 'Nuevo pedido — Nanovid web',
            _template: 'table',
            _idioma: currentLang,
          })
        });
        if (res.ok) {
          msg.classList.add('ok');
          msg.textContent = t('form.ok');
          form.reset();
        } else throw new Error('FormSubmit ' + res.status);
      } catch {
        msg.classList.add('err');
        msg.textContent = t('form.err');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    });
  }

  // ============================================================
  // NEWSLETTER
  // ============================================================
  const news = document.getElementById('news-form');
  if (news) {
    const newsMsg = news.querySelector('.news-msg');
    news.addEventListener('submit', async (e) => {
      e.preventDefault();
      newsMsg.className = 'news-msg';
      newsMsg.textContent = '';
      const data = Object.fromEntries(new FormData(news));
      try {
        const res = await fetch(news.dataset.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ ...data, _subject: 'Newsletter — Nanovid', _template: 'table' })
        });
        if (res.ok) {
          newsMsg.style.color = '#fff';
          newsMsg.textContent = t('newsletter.ok');
          news.reset();
        } else throw new Error();
      } catch {
        newsMsg.style.color = '#fff';
        newsMsg.textContent = t('newsletter.err');
      }
    });
  }
})();
