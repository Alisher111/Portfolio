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

  // =======================
  // ABOUT ME SLIDER
  // =======================

  const aboutImages = [
    "css/selfie1.jpeg",
    "css/me_o1.avif",
    "css/alisher.avif",
    "css/eleph.avif"
  ];

  let aboutIndex = 0;
  const aboutImg = document.getElementById("aboutSlide");

  if (aboutImg) {

    setInterval(() => {

      aboutImg.style.opacity = 0;

      setTimeout(() => {

        aboutIndex = (aboutIndex + 1) % aboutImages.length;
        aboutImg.src = aboutImages[aboutIndex];

        aboutImg.style.opacity = 1;

      }, 300);

    }, 3000);
  }


  // =======================
  // AI ART SLIDER
  // =======================

  const aiImages = [
    "css/ai_art_example.png",
    "css/ai_art_example1.png"
  ];

  let aiIndex = 0;
  const aiImg = document.getElementById("ArtSlide");

  if (aiImg) {

    setInterval(() => {

      aiImg.style.opacity = 0;

      setTimeout(() => {

        aiIndex = (aiIndex + 1) % aiImages.length;
        aiImg.src = aiImages[aiIndex];

        aiImg.style.opacity = 1;

      }, 300);

    }, 3000);
  }

});
