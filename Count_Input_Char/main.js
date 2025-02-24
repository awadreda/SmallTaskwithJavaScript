



let  input = document.querySelector("input")

let  bar = document.querySelector(".real");

let count = document.querySelector(".count")
let maxlength = input.getAttribute("maxlength");

count.innerHTML=maxlength;


input.oninput =function () {

  count.innerHTML= maxlength - input.value.length 

  input.value.length == maxlength ? count.classList.add("red"):count.classList.remove("red");



  bar.style.width = `${(input.value.length /maxlength) * 100}%`;

}