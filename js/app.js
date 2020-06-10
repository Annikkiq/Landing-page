/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Define Global Variables
const sections = document.querySelectorAll("section");
const navbar = document.getElementById("navbar__list");

// Build the nav
for (let i = 0; i < sections.length; i++) {

    const li = document.createElement("li");

    li.innerHTML = `<a href="#${sections[i].id}"> ${sections[i].id}</a>`;

    navbar.appendChild(li);
};

// Scroll back to top
// reference: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
const button = document.getElementById("go__back");

window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

function goBack() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


