var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelpopup = document.getElementById("cancel-book")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container = document.querySelector(".container")
var Addbook = document.getElementById("add-book")
var Booktitle = document.getElementById("booktitle")
var Bookauthor = document.getElementById("bookauthor")
var Bookdescriptioninput = document.getElementById("bookdescriptioninput")

Addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${Booktitle.value}</h2>
    <h3>${Bookauthor.value}</h3>
    <p>${Bookdescriptioninput.value}</p>
    <button onclick="delbook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function delbook(event){
    event.target.parentElement.remove()
}