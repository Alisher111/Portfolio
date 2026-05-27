const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });
}
// =======================
function readmoreless() {
  const dots = document.getElementById("dots");
  const more = document.getElementById("more");
  const btn = document.getElementById("myBtn");

  dots.classList.toggle("hidden");
  more.classList.toggle("hidden");

  btn.innerText = more.classList.contains("hidden")
    ? "Read more"
    : "Read less";
}
// =======================
function myMail() {
  const email = "akhmedyarovalisher@gmail.com";

  navigator.clipboard.writeText(email);

  alert("Email copied to clipboard:\n" + email);
}
// =======================
document.addEventListener("DOMContentLoaded", () => {

  const aboutImages = [
    "css/alisher.avif",
    "css/me_o1.avif",
    "css/eleph.avif"
  ];

  let i = 0;
  const img = document.getElementById("aboutSlide");

  if (!img) {
    console.warn("aboutSlide not found");
    return;
  }

  function changeAboutSlide() {
    img.style.opacity = 0;

    setTimeout(() => {
      i = (i + 1) % aboutImages.length;
      img.src = aboutImages[i];
      img.style.opacity = 1;
    }, 300);
  }

  setInterval(changeAboutSlide, 3000);
});
