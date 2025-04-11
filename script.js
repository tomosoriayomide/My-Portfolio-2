let text = "-It's tomosori Ayomide a passionate web developer ";
let current = 0;
let target = document.getElementById("below");
function tried() {
  function type() {
    if (current < text.length) {
      document.getElementById("below").innerHTML += text.charAt(current);
      current++;
      setTimeout(type, 200);
    }
  }
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (window.scrollY === 0 && lastScrollY !== 0) {
      tried(text, target);
    }
    lastScrollY = window.scrollY;
  });
  type();
}
tried();

type();
let complete = "about";
let initial = 0;
function write() {
  if (initial < complete.length) {
    document.getElementById("abt").innerHTML += complete.charAt(initial);
    initial++;
  }
}
write();
// let lastScrollY = window.scrollY;
// window.addEventListener("scroll", () => {
//   if (window.scrollY === 0 && lastScrollY !== 0) {
//     typeEffect(target, full);
//   }
//   lastScrollY = window.scrollY;
// // });
// let full = "-It's tomosori Ayomide a passionate web developer";
// let target = document.getElementById("below");

// function typeEffect(text, element, speed = 150) {
//   let i = 0;
//   element.innerHTML = ""; // Clear previous content
//   function type() {
//     if (i < text.length) {
//       element.innerHTML += text.charAt(i);
//       i++;
//       setTimeout(type, speed);
//     }
//   }
//   type();
// }

// // Initial load
// typeEffect(full, target);

// // Trigger again when scroll reaches the top
// let lastScrollY = window.scrollY;
// window.addEventListener("scroll", () => {
//   if (window.scrollY === 3 && lastScrollY !== 3) {
//     typeEffect(full, target);
//   }
//   lastScrollY = window.scrollY;
// });
// typeEffect(full, target);
