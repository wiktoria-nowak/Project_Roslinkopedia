menuBtn.addEventListener("click", toggleMenu)
window.addEventListener("scroll", hideMenu)

const input = document.querySelector("input")
const names = document.querySelectorAll(".name")

const closeBtn = document.querySelector(".close-btn")
const popup = document.querySelector(".popup")
const plantInfo = document.querySelectorAll(".plant-info")
const plantBox = document.querySelectorAll(".plant-box")
const popupContainer = document.querySelector(".popup-container")

const searchPlant = (e) => {
    const text = e.target.value.toLowerCase();

    names.forEach((name) => {
        if (name.textContent.toLowerCase().indexOf(text) !== -1) {
            name.closest("div").style.display = "block"
        } else {
            name.closest("div").style.display = "none"
        }
    })
}

input.addEventListener("keyup", searchPlant)

const showPopup = (e) => {
    const plant = e.target

    console.log(plant);

    const popupContent = document.createElement("div")

    if (e.target.nextElementSibling.classList.contains("plant-info")) {
        popupContent.innerHTML = e.target.nextElementSibling.innerHTML
    } else if (e.target.childElementCount > 2) {
        const lastChild = document.querySelector(".plant-info")
        popupContent.innerHTML = lastChild.innerHTML
    } else {
        const middleChild = e.target.nextElementSibling
        popupContent.innerHTML = middleChild.nextElementSibling.innerHTML
    }

    popup.appendChild(popupContent)
    popup.style.display = "block"
    popupContainer.style.display = "flex"
}

plantBox.forEach((box) => {
    box.addEventListener("click", showPopup)
})

const closePopup = () => {
    popup.style.display = "none"
    popup.removeChild(popup.lastChild)
    popupContainer.style.display = "none"
}

closeBtn.addEventListener("click", closePopup)