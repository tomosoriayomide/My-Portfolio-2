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

function displayed() {
  ham.style.display = "none";
  display.classList.add("active");
}

function canceled() {
  ham.style.display = "flex";
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

// type();
let complete = "about";
let initial = 0;
function write() {
  if (initial < complete.length) {
    document.getElementById("abt").innerHTML += complete.charAt(initial);
    initial++;
  }
}
write();
function copyURL() {
  const url = "https://conference-ticket-generator-lite.vercel.app/";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("conference ticket generator URL copied!");
    })
    .catch((err) => {
      console.error("Failed to copy URL:", err);
    });
}
function copycrest() {
  const url = "https://profile-card-component-lite.vercel.app/";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Profile Card Component Lite URL copied!");
    })
    .catch((err) => {
      console.error("Failed to copy URL:", err);
    });
}
function copyloop() {
  const url = "https://loopstudios-landing-page-main-one.vercel.app/";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Loopstudio Landing Page Main  URL copied!");
    })
    .catch((err) => {
      console.error("Failed to copy URL:", err);
    });
}
function price() {
  const url = "https://pricing-component-with-toggle-master-lac.vercel.app/";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Pricing Componenent with  Toggle Master URL copied!");
    })
    .catch((err) => {
      console.error("Failed to copy URL:", err);
    });
}
function qrcode() {
  const url = "http://qr-code-component-main-nine-sigma.vercel.app/";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("QR Code main URL copied!");
    })
    .catch((err) => {
      console.error("Failed to copy URL:", err);
    });
}
function sociallinks() {
  const url = "https://lites-profile-card.vercel.app/";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Lites profile card URL copied!");
    })
    .catch((err) => {
      console.error("Failed to copy URL:", err);
    });
}
function grid() {
  const url = "https://testimonials-grid-section-lite.vercel.app/";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Testimonial Grid Section URL copied!");
    })
    .catch((err) => {
      console.error("Failed to copy URL:", err);
    });
}
function time() {
  const url = "https://time-tracking-dashboard-lite.vercel.app/";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Time Tracking Dashboard URL copied!");
    })
    .catch((err) => {
      console.error("Failed to copy URL:", err);
    });
}
function fund() {
  const url = "https://crowdfunding-product-page-main-silk.vercel.app/";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Crowdfundig Product Page URL copied!");
    })
    .catch((err) => {
      console.error("Failed to copy URL:", err);
    });
}