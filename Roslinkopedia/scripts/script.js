const menuBtn = document.querySelector(".fa-bars")
const menuList = document.querySelector("nav ul")

const toggleMenu = () => {
    menuList.classList.toggle("active")
}

const hideMenu = () => {
    menuList.classList.remove("active")
}

menuBtn.addEventListener("click", toggleMenu)
window.addEventListener("scroll", hideMenu)