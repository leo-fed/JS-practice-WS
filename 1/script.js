const btn = document.querySelector(".btn");
const icons = [...document.querySelectorAll(".arrow")];

btn.addEventListener("click", replacement)
function replacement() {
    icons.forEach( (e) => {
        if (e.classList.contains("arrow_hidden")) {
            e.classList.remove("arrow_hidden")
        } else {
            e.classList.add("arrow_hidden")
        }
    })
}