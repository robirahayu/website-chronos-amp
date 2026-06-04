function toggleMenu() {
  const menu = document.getElementById("menuList");
  menu.classList.toggle("show");
}

/* SIMPLE AUTO SLIDER */
let images = [
  "assets/slide.jpg",
  "assets/slide.jpg"
];

let index = 0;

setInterval(() => {
  index++;
  if (index >= images.length) index = 0;
  document.getElementById("slideImage").src = images[index];
}, 4000);
