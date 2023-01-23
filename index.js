const navList = Array.from(document.getElementsByClassName("nav-list-item"))
navList.forEach((item) => {
    item.addEventListener("click", (e) => {
        const alreadyActive = document.getElementById("active")
        if (alreadyActive !== null) {
            alreadyActive.removeAttribute("id")
        }

        e.target.parentElement.id = "active"
    })
})