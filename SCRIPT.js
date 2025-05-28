// HOME PAGE SCROLL NAV COLOR CHANGE
    const foodSection = document.getElementById("foodpreview");
    const nav = document.querySelector("#homeheader nav"); 
    const navLinks = document.querySelectorAll(".mainnav a");

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

