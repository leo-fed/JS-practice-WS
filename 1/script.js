const btn = document.querySelector(".btn");
const icons = [...document.querySelectorAll(".arrow")];

btn.addEventListener("click", replacement)
function replacement() {
    icons.forEach( (icon) => {
        icon.classList.toggle("arrow_hidden")
    })
}