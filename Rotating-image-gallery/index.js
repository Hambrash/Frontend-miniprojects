const imageContainerEl = document.querySelector(".image-container")

const prevEl = document.getElementById("prev")
const nextEl = document.getElementById("next")


let x = 0
let timer
prevEl.addEventListener('click', () => {
    x = x + 45
    clearTimeout(timer)
    update()
})

function update(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer =  setTimeout(() => {
        x = x - 45
        update()

    },3000)
}

nextEl.addEventListener('click',() => {
    x = x - 45
    clearTimeout(timer)
    update()

    
})