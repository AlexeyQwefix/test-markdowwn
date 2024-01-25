function detectScroll() {
  let header = document.querySelector(".website-header");
  if (window.scrollY == 0) {
    header.classList.add("website-header_on-top");
  } else {
    header.classList.remove("website-header_on-top");
  }
}

window.addEventListener("scroll", detectScroll);

const mobileMenuButton = document.querySelector(".website-header__mobile-menu");
const mobileNav = document.querySelector(".website-header__links-list");

const menuToggle = () => {
  console.log(mobileMenuButton);
  console.log(mobileNav);
  mobileNav.classList.toggle("website-header__links-list_opened");
};

mobileMenuButton.addEventListener("click", menuToggle);

