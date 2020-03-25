(function() {
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector("nav ul");
  const navbarLinks = document.querySelectorAll("nav ul li");
  const burgerLines = document.querySelectorAll(".burger .lines");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("toggle-navbar");
    burger.classList.toggle("toggle");

    navbarLinks.forEach((link, index) => {
      // Handmade toggle :)
      if (!link.style.animation) {
        link.style.animation = `smoothTranslate ease ${(index + 1) *
          0.2}s forwards`;
      } else link.style.animation = "";
    });
  });
})();
