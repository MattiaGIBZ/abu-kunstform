// Tabs, PDF-Preview & Easter-Egg
document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------
  // Tabs wechseln
  // -----------------------------
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.tab;
      const targetSection = document.getElementById(targetId);
      if (!targetSection) return;

      // Aktiven Button setzen
      tabButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');

      // Inhalte ein-/ausblenden
      tabContents.forEach(section => {
        section.classList.toggle('active', section === targetSection);
      });

      // Leicht nach oben scrollen, damit der Header sichtbar bleibt
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  // -----------------------------
  // PDF-Vorschau togglen
  // -----------------------------
  const previewBlocks = document.querySelectorAll('.pdf-preview');
  previewBlocks.forEach(block => {
    const toggleBtn = block.querySelector('.preview-toggle');
    const frameWrap = block.querySelector('.pdf-frame-wrap');

    if (!toggleBtn || !frameWrap) return;

    toggleBtn.addEventListener('click', () => {
      const isOpen = block.classList.toggle('open');
      toggleBtn.textContent = isOpen
        ? 'PDF-Vorschau ausblenden'
        : 'PDF-Vorschau anzeigen';
    });
  });

  // -----------------------------
  // Easter Egg – Kunstmodus über Favicon
  // -----------------------------
  const faviconImg = document.querySelector('.favicon-preview');
  const overlay = document.getElementById('artOverlay');
  const closeBtn = document.getElementById('artOverlayClose');
  let clickCount = 0;
  let resetTimeout;

  // Falls die Elemente nicht existieren (z.B. andere Seite), abbrechen
  if (faviconImg && overlay && closeBtn) {
    const openOverlay = () => {
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
    };

    const closeOverlay = () => {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
    };

    faviconImg.addEventListener('click', () => {
      clickCount++;

      // nach kurzer Zeit resetten, damit man wirklich „schnell“ klickt
      clearTimeout(resetTimeout);
      resetTimeout = setTimeout(() => {
        clickCount = 0;
      }, 800);

      if (clickCount >= 5) {
        clickCount = 0;
        openOverlay();
      }
    });

    closeBtn.addEventListener('click', closeOverlay);

    // Overlay-Klick ausserhalb der Box schliesst es
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeOverlay();
      }
    });

    // ESC-Taste schliesst Overlay
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        closeOverlay();
      }
    });
  }
});
