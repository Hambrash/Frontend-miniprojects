const btnEl = document.querySelector(".btn")
const inputEl = document.getElementById("input")
const copyiconEl = document.querySelector(".fa-copy")
const alertcontainerEl = document.querySelector(".alert-container")
btnEl.addEventListener("click",() => {
    createpassword()
})

copyiconEl.addEventListener("click", () => {
    copypassword()
   if(inputEl.value){
    alertcontainerEl.classList.remove("active")
    setTimeout(() => {
        alertcontainerEl.classList.add("active")
    },2000)
   }
})

function copypassword(){
    inputEl.select ()
    inputEl.setSelectionRange(0,9999)
    navigator.clipboard.writeText(inputEl.value)
   
}



function createpassword(){
    const char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passlength = 14
    let password = ""
    for (let index = 0; index < passlength; index++) {
        const randomnum = Math.floor(Math.random() * char.length)
        password += char.substring(randomnum , randomnum + 1)
        console.log(randomnum, password)
        
    }
    inputEl.value = password
    alertcontainerEl.innerHTML = password + " copied!"
}