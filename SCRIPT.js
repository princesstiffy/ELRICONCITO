// HOME PAGE SCROLL NAV COLOR CHANGE
    const foodSection = document.getElementById("foodpreview");
    const nav = document.querySelector("#homeheader nav"); 
    const navLinks = document.querySelectorAll(".main_nav a");

    function handleNavColor() {
      const sectionTop = foodSection.getBoundingClientRect().top;

      if (sectionTop <= 0 && sectionTop > -foodSection.offsetHeight) {
        navLinks.forEach(link => {
          link.style.transition = "color 0.5s ease";
          link.style.color = "#efe8cc";
        });

        nav.classList.add("red-header"); 
      } else {
        navLinks.forEach(link => {
          link.style.transition = "color 0.5s ease";
          link.style.color = "#be3a31";
        });

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

  // Check if it's visible in the viewport
  if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
    document.body.classList.add("food-preview-active");
  } else {
    document.body.classList.remove("food-preview-active");
  }
});

