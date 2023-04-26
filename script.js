var takeMeBack = document.querySelector(".back")


takeMeBack.addEventListener("click", function(){
   // takeMeBack.classList.add("")
   console.log(document.querySelector(".container-2").classList.add("hide"));
   document.querySelector(".container").classList.remove("hide");
})



var submit = document.querySelector(".submit button")
var returnMe = document.querySelector(".return")

// var btn = document.querySelector("#btn-1")
// document.getElementById("btn-1").textContent = "You have selected + " btn " +

// var select = document.querySelector(".select p").textContent = "You have selected + " btn-1 "

submit.addEventListener("click", collapse)
// returnMe.addEventListener("click", returnME)


////////////////////////////////
// anonymous function
// submit.addEventListener("click", function(){
//    document.querySelector(".container").classList.add("hide")
//    document.querySelector(".container-2").classList.remove("hide")
// })
//////////////////////////


function collapse() {
    document.querySelector(".container").classList.add("hide")
    document.querySelector(".container-2").classList.remove("hide")
}

// function returnME() {
//     document.querySelector(".container-2").classList.add("hide")
//     document.querySelector(".container").classList.remove("hide")
// }

var btn1 = document.querySelector("#btn-1")
var btn2 = document.querySelector("#btn-2")
var btn3 = document.querySelector("#btn-3")
var btn4 = document.querySelector("#btn-4")
var btn5 = document.querySelector("#btn-5")

//////////////
// long hand
// btn1.addEventListener("click", thickMe) 

// function thickMe() {
//    document.querySelector(".replace").textContent = "1"
// }
////////////////

// shorthand
btn1.addEventListener("click", function(){
   document.querySelector(".replace").textContent = "1"
})

btn2.addEventListener("click", function(){
    document.querySelector(".replace").textContent = "2"
 })

 btn3.addEventListener("click", function(){
    console.log(document.querySelector(".replace").textContent = "3")
 })

 btn4.addEventListener("click", function(){
    document.querySelector(".replace").textContent = "4"
 })

 btn5.addEventListener("click", function(){
    document.querySelector(".replace").textContent = "5"
 })

