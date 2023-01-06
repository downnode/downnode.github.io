// title
let logo = document.getElementById('logo');
let hexagon1 = document.getElementById('hexagon1');
let hexagon2 = document.getElementById('hexagon2');
let point1 = document.getElementById('point1');
let point2 = document.getElementById('point2');
let leaf1 = document.getElementById('leaf1');
let leaf2 = document.getElementById('leaf2');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  var header = document.getElementById("header");
  header.classList.toggle("sticky", window.scrollY > 0);

  hexagon1.style.left = value * -1.5 + 'px';
  hexagon2.style.right = value * -1.5 + 'px';
  point1.style.left = value * -1.0 + 'px';
  point2.style.right = value * -1.0 + 'px';
  leaf1.style.left = value * -2.5 + 'px';
  leaf2.style.right = value * -2.5 + 'px';
});

//slider
let i = -1;
let time = 3000;
let slideTimer;
let slides = document.getElementsByClassName('slide');
let slideDots = document.getElementsByClassName('dot');

function clickChangeSlide(n){
  clearTimeout(slideTimer);
  console.log(n);
  changeSlide(n, true);
}

function changeSlide(n = i, manual = false){
  
  for(let j = 0; j < slides.length; j++){
    if(j == i) {
      slides[j].classList.add('prev-slide');
      slides[j].classList.remove('active-slide');
      slideDots[j].classList.remove('active-dot');
      continue; 
    }
    slideDots[j].classList.remove('active-dot');
    slides[j].classList.remove('prev-slide'); 
    slides[j].classList.remove('active-slide');
  }
  if(manual){
    if(n < 0) i = slides.length - 1
    else if(n > slides.length - 1) i = 0
    else i = n
  }else i = i < slides.length - 1 ? i+1 : 0;
  
  slides[i].classList.add('active-slide');
  slideDots[i].classList.add('active-dot');
  
  slideTimer = setTimeout('changeSlide()', time);
}

window.onload = changeSlide();

// skills show
const image_slider = document.querySelector('.image-slider');

let isDragStart = false, prevPageX, prevScrollLeft;

const DragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = image_slider.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  image_slider.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
}

image_slider.addEventListener("mousedown", DragStart);
image_slider.addEventListener("mousemove", dragging);
image_slider.addEventListener("mouseup", dragStop);