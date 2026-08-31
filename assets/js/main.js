(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");

  if (toggle && nav) {
    const closeNav = () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNav();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 960) closeNav();
    });
  }

  const search = document.querySelector("#publication-search");
  const year = document.querySelector("#publication-year");
  const items = [...document.querySelectorAll(".publication-item")];
  const count = document.querySelector("#publication-count");
  const empty = document.querySelector("#publication-empty");

  if (search && year && items.length && count && empty) {
    const filterPublications = () => {
      const query = search.value.trim().toLocaleLowerCase();
      const selectedYear = year.value;
      let visible = 0;

      items.forEach((item) => {
        const matchesText = !query || item.textContent.toLocaleLowerCase().includes(query);
        const matchesYear = !selectedYear || item.dataset.year === selectedYear;
        const show = matchesText && matchesYear;
        item.hidden = !show;
        if (show) visible += 1;
      });

      count.textContent = `${visible} publication${visible === 1 ? "" : "s"}`;
      empty.hidden = visible !== 0;
    };

    search.addEventListener("input", filterPublications);
    year.addEventListener("change", filterPublications);
  }
})();
