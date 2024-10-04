var popoverlay=document.querySelector(".popup-overlay")
var addbtn=document.getElementById("add-popup-button")
var popupbox=document.querySelector(".popup-box")

function addbook(){
    popoverlay.style.display="block"
    popupbox.style.display="block"
    
}
var cancelpopup=document.getElementById("cancel-popups")

function cancelpop(event){
    event.preventDefault()
     popoverlay.style.display="none"
    popupbox.style.display="none"

}
//select book-title-input,book-author-input,book-description-input
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdesc=document.getElementById("book-description-input")
var cotanier=document.querySelector(".container")

function addcontent(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popupbox.style.display="none"

    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2 >${booktitle.value}</h2>  
    <h5>${bookauthor.value}</h5>
    <p >${bookdesc.value}</p>
    <button onclick="deletebook(event)">Delete</button>
    `
    cotanier.append(div)
    alert("The Book Details Was Added Successfully !")
   
}

function deletebook(event){
    event.target.parentElement.remove()
}