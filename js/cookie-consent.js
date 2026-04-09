/**
 * Cookie Consent – Blue Moon Wuppertal
 * Handles DSGVO-compliant consent for Google Fonts (external US transfer).
 * Stores decision in localStorage. Shows modal on first visit.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'bm-consent';
  var FONTS_URL =
    'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600' +
    '&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600' +
    '&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap';

  /* ── Helpers ─────────────────────────────────── */

  function loadGoogleFonts() {
    if (document.getElementById('gfonts')) return;

    var pc1 = document.createElement('link');
    pc1.rel = 'preconnect';
    pc1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(pc1);

    var pc2 = document.createElement('link');
    pc2.rel = 'preconnect';
    pc2.href = 'https://fonts.gstatic.com';
    pc2.crossOrigin = 'anonymous';
    document.head.appendChild(pc2);

    var link = document.createElement('link');
    link.id = 'gfonts';
    link.rel = 'stylesheet';
    link.href = FONTS_URL;
    document.head.appendChild(link);
  }

  function getConsent() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (e) {
      return null;
    }
  }

  function saveConsent(external) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        necessary: true,
        external: !!external,
        timestamp: Date.now()
      }));
    } catch (e) {}
  }

  /* ── Banner logic ────────────────────────────── */

  function hideBanner() {
    var overlay = document.getElementById('cookie-overlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(function () {
      overlay.style.display = 'none';
    }, 450);
  }

  function acceptAll() {
    saveConsent(true);
    loadGoogleFonts();
    hideBanner();
  }

  function acceptNecessary() {
    saveConsent(false);
    hideBanner();
  }

  function showBanner() {
    var overlay = document.getElementById('cookie-overlay');
    if (!overlay) return;

    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.classList.add('active');
      });
    });

    var btnAll = document.getElementById('cookie-accept-all');
    var btnNec = document.getElementById('cookie-accept-necessary');

    if (btnAll) btnAll.addEventListener('click', acceptAll);
    if (btnNec) btnNec.addEventListener('click', acceptNecessary);

    function onKey(e) {
      if (e.key === 'Escape') {
        acceptNecessary();
        document.removeEventListener('keydown', onKey);
      }
    }
    document.addEventListener('keydown', onKey);

    if (btnAll) btnAll.focus();
  }

  /* ── Init ────────────────────────────────────── */

  var consent = getConsent();

  if (consent) {
    if (consent.external) loadGoogleFonts();
  } else {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showBanner);
    } else {
      showBanner();
    }
  }

}());
