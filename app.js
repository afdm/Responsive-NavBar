window.addEventListener("load", () => {
  const burger = document.querySelector(".nav__burger");
  const menu = document.querySelector(".nav__menu");
  const menuItems = document.querySelectorAll(".menu__items");

  burger.addEventListener("click", () => {
    menu.classList.toggle("toggle-navbar");
    burger.classList.toggle("toggle");

    menuItems.forEach((menuItem, index) => {
      // Handmade toggle :)
      if (!menuItem.style.animation) {
        menuItem.style.animation = `smoothTranslate ease ${
          (index + 1) * 0.2
        }s forwards`;
      } else menuItem.style.animation = "";
    });
  });
});
