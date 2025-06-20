// HOME PAGE SCROLL NAV COLOR CHANGE
const foodSection = document.getElementById("foodpreview");
const nav = document.querySelector("#homeheader nav");

function handleNavColor() {
  const sectionTop = foodSection.getBoundingClientRect().top;

  if (sectionTop <= window.innerHeight * 0.5 && sectionTop > -foodSection.offsetHeight) {
    document.body.classList.add("food-preview-active");
    nav.classList.add("red-header");
  } else {
    document.body.classList.remove("food-preview-active");
    nav.classList.remove("red-header");
  }
}

window.addEventListener("scroll", handleNavColor);
window.addEventListener("load", handleNavColor);
window.addEventListener("resize", handleNavColor);






// HAMBURG NAV BAR

function toggleNav() {
  const nav = document.getElementById("myTopnav");
  nav.classList.contains("responsive")
    ? nav.classList.remove("responsive")
    : nav.classList.add("responsive");
}



// HAMBURG NAV BAR ANIMATIONS

function toggleNav() {
  const nav = document.getElementById("myTopnav");
  const icon = document.querySelector(".icon i");

  nav.classList.toggle("responsive");
  icon.classList.toggle("active"); // add this line
}



// HOME PAGE FOOD PREVIEW BG

window.addEventListener("scroll", () => {
  const foodSection = document.querySelector("#foodpreview-section");
  const rect = foodSection.getBoundingClientRect();

  if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
    document.body.classList.add("food-preview-active");
  } else {
    document.body.classList.remove("food-preview-active");
  }
});





  // PAGE TRANSITIONS 

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });

  const links = document.querySelectorAll("a:not([target]):not([href^='#'])");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.href;

      // Fade out the body itself
      document.body.classList.remove("loaded");

      setTimeout(() => {
        window.location.href = href;
      }, 600); // match CSS transition duration
    });
  });
});




