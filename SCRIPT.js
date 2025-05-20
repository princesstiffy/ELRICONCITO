// HOME PAGE SCROLL NAV COLOR CHANGE
const foodSection = document.getElementById("foodpreview");
const navLinks = document.querySelectorAll(".mainnav a");

function handleNavColor() {
  const sectionTop = foodSection.getBoundingClientRect().top;

  // Trigger color change when the top of the section hits the top of the viewport
  if (sectionTop <= 0 && sectionTop > -foodSection.offsetHeight) {
    navLinks.forEach(link => {
      link.style.transition = "color 0.5s ease";
      link.style.color = "#efe8cc"; // new color in food section
    });
  } else {
    navLinks.forEach(link => {
      link.style.transition = "color 0.5s ease";
      link.style.color = "#be3a31"; // original color
    });
  }
}

window.addEventListener("scroll", handleNavColor);
window.addEventListener("load", handleNavColor);

