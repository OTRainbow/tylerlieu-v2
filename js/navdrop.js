let hamburger = document.getElementById("hamburger");
let navdrop = document.getElementById("navdrop");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navdrop.classList.toggle("active");
});