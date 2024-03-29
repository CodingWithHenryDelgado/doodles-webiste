// target = $('.browser-frame');
// Draggable.create(target, { trigger: "#drag-handle"});

// var handleResize = $("<div class='resize-handle'></div>").appendTo(target);

// Draggable.create(handleResize, {
// 	type:"top,left",
// 	onPress: function(e) {
// 		e.stopPropagation(); 
// 	},
// 	onDrag: function(e) {
// 		parent = this.target.parentNode
// 		TweenLite.set(parent, { width: this.x, height: this.y - 132 - 55});
// 	}
// });

const lengthSlides = document.querySelectorAll(".numbertext");
const lengthTabletSlides = document.querySelectorAll(".tablettext");

// GALLERY FUNCTIONS

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n <= 0) { slideIndex = 1 }
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    lengthSlides[i].innerHTML = `${i + 1}/${slides.length}`
  }
  slides[slideIndex - 1].style.display = "flex";
}