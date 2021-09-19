const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector("ul.nav-list");
let ariaExpanded = true
const mobileMenu = () => {
    hamburger.classList.toggle("active");
    mainNav.classList.toggle("active");
    mainNav.setAttribute('aria-expanded', ariaExpanded)
    ariaExpanded = !ariaExpanded
}

hamburger.addEventListener("click", mobileMenu);



