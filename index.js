const navList = Array.from(document.getElementsByClassName("nav-list-item"))
const navbar = document.getElementById("navbar")
const sticky = navbar.offsetTop;

function removeActive() {
    const alreadyActive = document.getElementById("active")

    if (alreadyActive !== null) {
        alreadyActive.removeAttribute("id")
    }
}

navList.forEach((item) => {
    item.addEventListener("click", (e) => {
        removeActive()
        e.target.parentElement.id = "active"
    })
})

console.log(sticky)
window.onscroll = function () {
    const i = Math.round(window.pageYOffset / window.innerHeight) - 1
    console.log(i)

    if (i>= 0) {
        const nav = Array.from(document.getElementsByClassName("nav-list-link"))
        nav[i].parentElement.id = "active"
    }

    if (window.pageYOffset + 40 >= sticky) {
        navbar.classList.add("sticky")

    } else {
        navbar.classList.remove("sticky")
        removeActive()
    }
}