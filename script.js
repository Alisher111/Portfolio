const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });
}
// =======================
const dots = document.getElementById("dots");
const moreText = document.getElementById("more");
const btnText = document.getElementById("myBtn");

function readmoreless() {
  if (!dots || !moreText || !btnText) return;

  const isHidden = moreText.style.display === "none" || moreText.style.display === "";

  if (isHidden) {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btnText.innerText = "Read less";
  } else {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.innerText = "Read more";
  }
}
// =======================
function myMail() {
  const email = "akhmedyarovalisher@gmail.com";

  // better than alert for portfolio
  navigator.clipboard.writeText(email);

  alert("Email copied to clipboard:\n" + email);
}
// =======================
const aboutImages = [
  "css/alisher.avif",
  "css/me_o1.avif",
  "css/eleph.avif"
];

let i = 0;

function changeAboutSlide() {
  const img = document.getElementById("aboutSlide");
  if (!img) return;

  img.style.opacity = "0";

  setTimeout(() => {
    i = (i + 1) % aboutImages.length;
    img.src = aboutImages[i];
    img.style.opacity = "1";
  }, 300);
}

setInterval(changeAboutSlide, 4000);
