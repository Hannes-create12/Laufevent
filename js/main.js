/**
 * Main JS – Navigation toggle, forms, lightbox
 */
document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile Nav ---- */
  var ham   = document.querySelector('.hamburger');
  var links = document.querySelector('.nav-links');
  if (ham && links) {
    ham.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  /* ---- Form submission (simulated) ---- */
  document.querySelectorAll('form[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.success-msg');
      if (msg) {
        msg.style.display = 'block';
        form.reset();
        msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  /* ---- Gallery Lightbox ---- */
  var lb      = document.getElementById('lightbox');
  var lbImg   = lb && lb.querySelector('img');
  var lbClose = lb && lb.querySelector('.close-lb');

  document.querySelectorAll('.gallery-item[data-src]').forEach(function (item) {
    item.addEventListener('click', function () {
      if (!lb || !lbImg) return;
      lbImg.src = item.dataset.src;
      lbImg.alt = item.dataset.alt || '';
      lb.classList.add('active');
    });
  });

  if (lbClose) {
    lbClose.addEventListener('click', function () { lb.classList.remove('active'); });
  }

  if (lb) {
    lb.addEventListener('click', function (e) {
      if (e.target === lb) lb.classList.remove('active');
    });
  }

  /* ---- Active nav link highlight ---- */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
