document.addEventListener("DOMContentLoaded", function(){


  //IMAGES SLIDER

  const prev = document.querySelector(".leftArrow");
  const next = document.querySelector(".rightArrow");
  const imagesSlider = document.querySelectorAll(".chairSlider");

  prev.addEventListener('click', prevSlide)
  next.addEventListener('click', nextSlide)

  let index = 0;
  imagesSlider[index].classList.add("visible");

  function prevSlide(e){
    imagesSlider[index].classList.remove("visible");
    index--;
    if(index < 0){
      index = 2;
    };
    imagesSlider[index].classList.add("visible");

  };

  function nextSlide(e){
    imagesSlider[index].classList.remove("visible");
    index++;
    if(index > 2 ){
      index = 0;
    };
    imagesSlider[index].classList.add("visible");

  };



  // ORDER CHAIR SECTION

  // SHOW SELECT MENU
  const listArrows = document.querySelectorAll(".list_arrow");

  listArrows.forEach( function(listArrow){
    listArrow.addEventListener('click', showSelectMenu)
  });

  function showSelectMenu(e) {
     this.nextElementSibling.classList.toggle('visible')
  }

  //CHECK EVENT

  const lis = document.querySelectorAll(".list_panel li");
  const check = document.querySelector("#transport");
  const checkVal = document.querySelector("#transport").dataset.transportPrice;
  const sum = document.querySelector(".sum");
  let transportPrc = 0;

  check.addEventListener("click", transport);

  function transport(e){
    if(check.checked === true){
      document.querySelector(".panel_left .transport").innerHTML = "Transport";
      transportPrc = document.querySelector(".panel_right .transport").innerHTML = checkVal;
    } else{
      document.querySelector(".panel_left .transport").innerHTML = "Transport";
      transportPrc = document.querySelector(".panel_right .transport").innerHTML = 0;
    };

    totalPrice();
  };


  //SELECT EVENTS

  let colorPrc = 0;
  let typePrc = 0;
  let patternPrc = 0;

  lis.forEach(function(elem){
		elem.addEventListener("click", select);
	});


	function select(e){
    const imageOrder = document.querySelector('.chairOrder');
		const typePrice = this.dataset.typePrice;
		const materialPrice = this.dataset.materialPrice;
    const colorPrice = this.dataset.colorPrice
		const text = this.innerHTML;
		const listLabel = this.parentElement.parentElement.firstElementChild;

		listLabel.textContent = text;
		listLabel.style.color = "#00c4aa";
		this.parentElement.classList.toggle("visible");

		if(typePrice != undefined){
			document.querySelector(".panel_left .title").innerHTML = text;
			typePrc = document.querySelector(".panel_right .title").innerHTML = typePrice;
      imageOrder.src = `image/${text}.png`
		}else if(colorPrice != undefined){
			document.querySelector(".panel_left .color").innerHTML = text;
			colorPrc = document.querySelector(".panel_right .color").innerHTML = colorPrice;
		}else if(materialPrice != undefined){
			document.querySelector(".panel_left .pattern").innerHTML = text;
			patternPrc = document.querySelector(".panel_right .pattern").innerHTML = materialPrice;
		};

		totalPrice();

	};

  function totalPrice() {
    sum.innerHTML = (parseInt(typePrc) + parseInt(transportPrc) + parseInt(colorPrc) + parseInt(patternPrc))+ " zł";
  }


});
