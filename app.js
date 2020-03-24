(function() {
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector("nav ul");
  const navbarLinks = document.querySelectorAll("nav ul li");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("toggle-navbar");

    navbarLinks.forEach((link, index) => {
      // Handmade toggle :)
      if (!link.style.animation) {
        link.style.animation = `smoothTranslate ease-out ${(index + 3) *
          0.3}s forwards`;
      } else link.style.animation = "";
    });
  });
})();
