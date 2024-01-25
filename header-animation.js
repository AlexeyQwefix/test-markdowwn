function detectScroll() {
  let header = document.querySelector(".website-header");
  if (window.scrollY == 0) {
    header.classList.add("website-header_on-top");
  } else {
    header.classList.remove("website-header_on-top");
  }
}

window.addEventListener("scroll", detectScroll);
