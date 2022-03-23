
const menu = document.getElementById("menu");
const button = document.getElementById("mobile-menubutton");

button.addEventListener("click", mobileMenuToggle);

let mobileMenuActive = false;
function mobileMenuToggle() {
    mobileMenuActive = !mobileMenuActive;
    if (mobileMenuActive) {
        menu.classList.remove("is--collapsed");
        button.classList.remove("is--collapsed");
        
    } else {
        menu.classList.add("is--collapsed");
        button.classList.add("is--collapsed");
    }
}