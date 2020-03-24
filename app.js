(function() {
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector("nav ul");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("toggle-navbar");
  });
})();
