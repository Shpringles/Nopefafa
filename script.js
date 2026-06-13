// Scroll-reveal: stagger elements into view as they enter the viewport.
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !items.length) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        // Light stagger for grouped siblings.
        el.style.transitionDelay = `${Math.min(i * 70, 280)}ms`;
        el.classList.add('is-visible');
        obs.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  items.forEach((el) => io.observe(el));
})();

// Compte à rebours jusqu'à l'inauguration — 27 juin 2026, 17h (heure de Lomé, UTC+0).
(function () {
  const root = document.getElementById('countdown');
  if (!root) return;

  const target = new Date('2026-06-27T17:00:00+00:00').getTime();
  const out = {
    days: root.querySelector('[data-days]'),
    hours: root.querySelector('[data-hours]'),
    mins: root.querySelector('[data-mins]'),
    secs: root.querySelector('[data-secs]'),
  };
  const done = document.querySelector('.countdown__done');
  const pad = (n) => String(n).padStart(2, '0');

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      root.hidden = true;
      if (done) done.hidden = false;
      clearInterval(timer);
      return;
    }
    const s = Math.floor(diff / 1000);
    out.days.textContent = pad(Math.floor(s / 86400));
    out.hours.textContent = pad(Math.floor((s % 86400) / 3600));
    out.mins.textContent = pad(Math.floor((s % 3600) / 60));
    out.secs.textContent = pad(s % 60);
  }

  tick();
  const timer = setInterval(tick, 1000);
})();
