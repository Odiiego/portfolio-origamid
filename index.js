const navList = Array.from(document.getElementsByClassName("nav-list-item"))

navList.forEach((item) => {
    item.addEventListener("click", (e) => {
        removeActive()
        e.target.parentElement.id = "active"
    })
})

function removeActive() {
    const alreadyActive = document.getElementById("active")

    if (alreadyActive !== null) {
        alreadyActive.removeAttribute("id")
    }
}

const navbar = document.getElementById("navbar");
const navbarOffset = navbar.offsetTop;
window.onscroll = function () {
    const nav = Array.from(document.getElementsByClassName("nav-list-link"))
    const projetos = document.getElementById("projetos").offsetTop;
    const cursos = document.getElementById("cursos").offsetTop;
    const contato = document.getElementById("contato").offsetTop;
    const yOffset = window.pageYOffset;

    removeActive()

    if (window.pageYOffset >= navbarOffset - 40) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }

    if (yOffset >= (contato * 0.7)) {
        nav[2].parentElement.id = "active"
    } else if (yOffset >= (cursos * 0.7)) {
        nav[1].parentElement.id = "active"
    } else if (yOffset >= (projetos * 0.7)) {
        nav[0].parentElement.id = "active"
    }
}