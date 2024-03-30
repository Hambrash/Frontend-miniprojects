const searchbarcontainerEl = document.querySelector(".search-bar-container")
const img1 = document.querySelector(".magnifier")
const img2 = document.querySelector(".mic-icon")

img1.addEventListener("click", () => {
    searchbarcontainerEl.classList.toggle("active")
})