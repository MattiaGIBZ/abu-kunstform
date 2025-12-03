document.addEventListener("DOMContentLoaded", () => {
  // Tabs
  const buttons = document.querySelectorAll(".tab-button");
  const tabs = document.querySelectorAll(".tab-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");

      // Buttons
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Inhalte
      tabs.forEach((tab) => {
        if (tab.id === targetId) {
          tab.classList.add("active");
          tab.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          tab.classList.remove("active");
        }
      });
    });
  });

  // PDF-Preview Toggle
  const previews = document.querySelectorAll(".pdf-preview");

  previews.forEach((preview) => {
    const btn = preview.querySelector(".preview-toggle");
    const frameWrap = preview.querySelector(".pdf-frame-wrap");

    if (!btn || !frameWrap) return;

    btn.addEventListener("click", () => {
      const isOpen = preview.classList.toggle("open");
      btn.textContent = isOpen ? "PDF-Vorschau ausblenden" : "PDF-Vorschau anzeigen";
      // Emoji wieder vorne dran
      btn.insertAdjacentText("afterbegin", "👁 ");
    });
  });
});
