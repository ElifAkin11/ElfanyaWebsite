const mobileNavButton = document.querySelector("#mobile-menu > button");
const mobileCloseButton = document.querySelector("#mobile-nav-menu .mobile-menu-io-buttons");
const mobileNavMenu = document.getElementById("mobile-nav-menu");

mobileNavButton.addEventListener("click", () => {
    mobileNavMenu.style.transform = "translateY(0%)";
});

mobileCloseButton.addEventListener("click", () => {
    mobileNavMenu.style.transform = "translateY(-100%)";
});