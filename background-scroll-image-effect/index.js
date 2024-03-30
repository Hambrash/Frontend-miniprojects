const bgimagEl = document.getElementById("bg-image")

window.addEventListener("scroll",() => {
    update()
})

function update(){ 
    bgimagEl.style.opacity = 1 - window.pageYOffset / 900
    
}