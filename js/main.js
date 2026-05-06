// Nanovid — interacciones del sitio
(function () {
  'use strict';

  // Mobile menu toggle
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

  // Año dinámico en footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Formulario de pedido vía FormSubmit AJAX
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
      submitBtn.textContent = 'Enviando…';

      const data = Object.fromEntries(new FormData(form));
      const endpoint = form.dataset.endpoint;

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            ...data,
            _subject: 'Nuevo pedido desde nanovid-tlaxcala.web',
            _template: 'table'
          })
        });
        if (res.ok) {
          msg.classList.add('ok');
          msg.textContent = '¡Pedido enviado! Te contactamos por WhatsApp en breve.';
          form.reset();
        } else {
          throw new Error('FormSubmit respondió ' + res.status);
        }
      } catch (err) {
        msg.classList.add('err');
        msg.textContent = 'No se pudo enviar. Escríbenos directo por WhatsApp.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    });
  }
})();
