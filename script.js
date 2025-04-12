let text = "-It's tomosori Ayomide a passionate web developer ";
let current = 0;
let target = document.getElementById("below");

// let ham = document.getElementById("ham");
// let display = document.getElementById("navmobile");
// function displayed() {
//   ham.style.display = "none";
//   display.style.display='flex'
//   display.classList.add("active")

// }
// function canceled() {
//   ham.style.display = "flex";
//   display.style.display='none'
//   display.classList.remove("active")
//   // console.log("clicked")
//   // nav.style.display = "flex";
// }
let ham = document.getElementById("ham");
let display = document.getElementById("navmobile");
let background = document.getElementById("bgt");

function displayed() {
  ham.style.display = "none";
  background.style.display = "block";
  display.classList.add("active");
}

function canceled() {
  ham.style.display = "flex";
  background.style.display = "none";
  display.classList.remove("active");
}

function tried() {
  function type() {
    if (current < text.length) {
      document.getElementById("below").innerHTML += text.charAt(current);
      current++;
      setTimeout(type, 200);
    }
  }
  type();
}
function timed() {
  setTimeout(tried, 5000);
}
timed();
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (window.scrollY === 0 && lastScrollY !== 0) {
    tried(text, target);
  }
  lastScrollY = window.scrollY;
});
tried();
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("main-content");

  setTimeout(() => {
    preloader.style.display = "none";
    content.style.display = "block";
  }, 5000);
});
{
}

const form = document.getElementById("form");
const loader = document.getElementById("form-preloader");

form.addEventListener("submit", function (e) {
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
    form.reset();
  }, 7000);
});
