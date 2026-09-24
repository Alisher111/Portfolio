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

  const isHidden = more.classList.contains("hidden");

  if (isHidden) {
    more.classList.remove("hidden");
    dots.classList.add("hidden");
    btn.innerText = "Read less";
  } else {
    more.classList.add("hidden");
    dots.classList.remove("hidden");
    btn.innerText = "Read more";
  }
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
    "css/selfie1.jpeg",
    "css/me_o1.avif",
    "css/alisher.avif",
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

  setInterval(changeArtSlide, 3000);
});
//===============================
document.addEventListener("DOMContentLoaded", () => {

  const AiImages = [
    "css/ai_art_example.png",
    "css/ai_art_example1.png",
  ];

  let i = 0;
  const img = document.getElementById("ArtSlide");

  if (!img) {
    console.warn("ArtSlide not found");
    return;
  }

  function changeArtSlide() {
    img.style.opacity = 0;

    setTimeout(() => {
      i = (i + 1) % AiImages.length;
      img.src = AiImages[i];
      img.style.opacity = 1;
    }, 300);
  }

  setInterval(changeArtSlide, 3000);
});
