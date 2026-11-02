document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const nav = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (nav) nav.classList.toggle("navbar-scrolled", window.scrollY > 30);
  });

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
      const recipient = "your.email@example.com"; // Replace with your real email address
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;
    });
  }

  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navMenu");
      if (menu && menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
