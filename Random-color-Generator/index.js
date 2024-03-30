const containerEl = document.querySelector(".container")


for (let index = 0; index < 30; index++) {
    const colorcontainerEl = document.createElement("div")
    colorcontainerEl.classList.add("color-container")
    containerEl.appendChild(colorcontainerEl)
}

const colorcontainerEls = document.querySelectorAll(".color-container")
generatecolor()

function generatecolor() {
    colorcontainerEls.forEach((colorcontainerEl) => {
        const newcolorcode = randomcolor()
        colorcontainerEl.style.backgroundColor = "#" + newcolorcode
        colorcontainerEl.innerText = "#" + newcolorcode

    })
}

function randomcolor() {
    const char = "0123456789abcdef"
    const colorcodelength = 6
    let colorcode = ""
    for (let index = 0; index < colorcodelength; index++) {
        const randomnum = Math.floor(Math.random() * char.length)
        colorcode += char.substring(randomnum, randomnum + 1)
        
    }
    return colorcode

}