/**
 * Countdown Timer – Laufkultour Chemnitz
 * Event date: 27 September 2026
 */
(function () {
  const EVENT_DATE = new Date('2026-09-27T09:00:00');

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function update() {
    const now  = new Date();
    const diff = EVENT_DATE - now;

    if (diff <= 0) {
      document.querySelectorAll('.countdown .number').forEach(function (el) {
        el.textContent = '00';
      });
      const label = document.querySelector('.countdown-bar > p');
      if (label) label.textContent = '🎉 Das Laufevent hat begonnen!';
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    var dEl = document.getElementById('cd-days');
    var hEl = document.getElementById('cd-hours');
    var mEl = document.getElementById('cd-minutes');
    var sEl = document.getElementById('cd-seconds');

    if (dEl) dEl.textContent = pad(days);
    if (hEl) hEl.textContent = pad(hours);
    if (mEl) mEl.textContent = pad(minutes);
    if (sEl) sEl.textContent = pad(seconds);
  }

  document.addEventListener('DOMContentLoaded', function () {
    update();
    setInterval(update, 1000);
  });
})();
