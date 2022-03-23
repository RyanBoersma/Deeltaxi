
const menu = document.getElementById("menu");
element.addEventListener("click", mobileMenuToggle);

let mobileMenuActive = false;
function mobileMenuToggle() {
    mobileMenuActive = !mobileMenuActive;
    if (mobileMenuActive) {
        document.getElementById("menu").classList.remove("is--active");
    } else {
        document.getElementById("menu").classList.add("is--active");
    }
}