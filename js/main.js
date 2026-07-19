(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const form = document.querySelector("#contact-form");
  const formNote = document.querySelector("#form-note");

  // Scroll state without reading layout in a scroll handler (avoids forced reflow)
  if (header) {
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText =
      "position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none;";
    document.body.prepend(sentinel);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(
        ([entry]) =>
          header.classList.toggle("is-scrolled", !entry.isIntersecting),
        { threshold: 0, rootMargin: "-12px 0px 0px 0px" }
      ).observe(sentinel);
    }
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("nav-open", open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      });
    });
  }

  const revealEls = [...document.querySelectorAll(".reveal")].filter(
    (el) => !el.closest(".hero")
  );

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const first = String(data.get("first_name") || "").trim();
      const last = String(data.get("last_name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const subject = String(data.get("subject") || "").trim();
      const message = String(data.get("message") || "").trim();

      const body = [
        `Име: ${first} ${last}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n");

      const mailto = `mailto:info@evodigital.bg?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      if (formNote) formNote.hidden = false;
      window.location.href = mailto;
    });
  }
})();
