// Get the container element
var btnContainer = document.getElementById("navmenu");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// window.onload = function() {
//   const sections = document.querySelectorAll("section");
//   const navA = document.querySelectorAll(".navbar-collapse .navbar-nav a");

//   function updateActiveSection() {
//     let maxVisibleArea = 0;
//     let activeSection = null;

//     sections.forEach((section) => {
//       const visibleArea = getVisibleArea(section);

//       if (visibleArea > maxVisibleArea) {
//         maxVisibleArea = visibleArea;
//         activeSection = section.getAttribute("id");
//       }
//     });

// navA.forEach((a) => {
// a.classList.remove("active");
// if (a.classList.contains(activeSection)) {
// a.classList.add("active");
// }
// });
// }

// function getVisibleArea(element) {
// const rect = element.getBoundingClientRect();
// const windowHeight = window.innerHeight || document.documentElement.clientHeight;
// const windowWidth = window.innerWidth || document.documentElement.clientWidth;
// const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
// const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
// return visibleHeight * visibleWidth;
// }

// window.addEventListener("scroll", updateActiveSection);
// window.addEventListener("resize", updateActiveSection);
// };
// //





