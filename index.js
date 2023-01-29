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
    const i = Math.floor(window.pageYOffset / window.innerHeight)

    Array.from(document.getElementsByClassName("nav-list-link")).forEach((child, index) => {
        if (index + 1 == i) {
            child.parentElement.id = "active"
        }
    })

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
        removeActive()
    }
}