(() => {
  const navigator = document.querySelector("[data-section-navigation]");

  if (!navigator) return;

  const links = Array.from(navigator.querySelectorAll("[data-section-link]"));
  const sectionIds = [...new Set(links.map((link) => link.dataset.sectionLink))];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const currentLabel = navigator.querySelector("[data-section-current]");
  const mobileMenu = navigator.querySelector(".section-nav-mobile");
  let frameRequested = false;

  if (!sections.length) return;

  const setActiveSection = (id) => {
    links.forEach((link) => {
      const isActive = link.dataset.sectionLink === id;
      link.classList.toggle("is-active", isActive);
      link.parentElement.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    const activeLink = links.find((link) => link.dataset.sectionLink === id);
    if (activeLink && currentLabel) {
      currentLabel.textContent = activeLink.lastElementChild.textContent;
    }
  };

  const updateActiveSection = () => {
    const marker = window.scrollY + Math.min(window.innerHeight * 0.28, 180);
    const orderedSections = sections
      .map((section, index) => ({
        section,
        index,
        top: section.getBoundingClientRect().top + window.scrollY
      }))
      .sort((a, b) => a.top - b.top || a.index - b.index);
    let active = orderedSections[0];

    orderedSections.forEach((candidate) => {
      if (candidate.top <= marker && candidate.top > active.top + 12) {
        active = candidate;
      }
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      active = orderedSections[orderedSections.length - 1];
    }

    setActiveSection(active.section.id);
    frameRequested = false;
  };

  const requestUpdate = () => {
    if (!frameRequested) {
      window.requestAnimationFrame(updateActiveSection);
      frameRequested = true;
    }
  };

  links.forEach((link) => {
    link.addEventListener("click", () => {
      setActiveSection(link.dataset.sectionLink);
      if (mobileMenu) mobileMenu.open = false;
    });
  });

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  updateActiveSection();
})();
