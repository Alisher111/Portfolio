let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

function readmoreless() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myMail() {
  alert("Email me to: akhmedyarovalisher@gmail.com");
}

const aboutImages = [
  "css/alisher.avif",
  "css/me_o1.avif",
  "css/eleph.avif"
];

let i = 0;

function changeAboutSlide() {
  const img = document.getElementById("aboutSlide");

  img.style.opacity = 0;

  setTimeout(() => {
    i = (i + 1) % aboutImages.length;
    img.src = aboutImages[i];
    img.style.opacity = 1;
  }, 300);
}

setInterval(changeAboutSlide, 3000);