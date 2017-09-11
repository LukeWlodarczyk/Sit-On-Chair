document.addEventListener("DOMContentLoaded", function(){


  //IMAGES SLIDER
  
  const prev = document.querySelector(".leftArrow");
  const next = document.querySelector(".rightArrow");
  const images = document.querySelectorAll(".chair");

  prev.addEventListener('click', prevSlide)
  next.addEventListener('click', nextSlide)

  let index = 0;
  images[index].classList.add("visible");

  function prevSlide(e){
    images[index].classList.remove("visible");
    index--;
    if(index < 0){
      index = 2;
    };
    images[index].classList.add("visible");

  };

  function nextSlide(e){
    images[index].classList.remove("visible");
    index++;
    if(index > 2 ){
      index = 0;
    };
    images[index].classList.add("visible");

  };





});