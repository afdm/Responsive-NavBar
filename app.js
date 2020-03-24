(function() {
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector("nav ul");
  const navbarLinks = document.querySelectorAll("nav ul li");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("toggle-navbar");

    navbarLinks.forEach((link, index) => {
      // Handmade toggle :)
      if (!link.style.animation) {
        link.style.animation = `smoothTranslate ${(index + 1) *
          0.3}s ease-in-out forwards`;
      } else link.style.animation = "";
    });
  });
})();
