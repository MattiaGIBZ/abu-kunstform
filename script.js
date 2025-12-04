// Tabs & PDF-Preview
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  // Tabs wechseln
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

  // PDF-Vorschau togglen
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
});
