function toggleMenu(){

document.getElementById("menu").classList.toggle("show");

}


/* HERO SLIDER */

let slides = document.querySelectorAll(".slide");

let index = 0;

function slider(){

slides.forEach(slide => slide.classList.remove("active"));

index++;

if(index == slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(slider,4000);
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}
