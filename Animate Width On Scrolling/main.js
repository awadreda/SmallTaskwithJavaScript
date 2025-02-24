
let section =document.querySelector(".three");

let spans = document.querySelectorAll(".progress span");




window.onscroll =function () {


  if(window.scrollY >= section.offsetTop -300) {
    console.log(" finsth")
    spans.forEach((span) => {
      span.style.width =span.dataset.width;
    })
  }
}