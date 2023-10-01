const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");

// show menu
navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("show-menu");
});

// apply shodow to header when scrolled
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);
