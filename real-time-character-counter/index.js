const textareaEl = document.getElementById("textarea")
const totalcounter = document.getElementById("total-counter")
const remainingcounter = document.getElementById("remaining-counter")

textareaEl.addEventListener("keyup", () => {
    update()
})

update()

function update(){
    totalcounter.innerHTML = textareaEl.value.length
    remainingcounter.innerHTML = textareaEl.getAttribute("maxlength") - textareaEl.value.length
}
