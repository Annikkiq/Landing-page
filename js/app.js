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
**/

// Define Global Variables
const sections = document.querySelectorAll("section");
const navbar = document.getElementById("navbar__list");
const button = document.getElementById("go__back");

// Build the nav
for (let i = 0; i < sections.length; i++) {

    const li = document.createElement("li");

    li.innerHTML = `<a href="#${sections[i].id}"> ${sections[i].id}</a>`;
    navbar.appendChild(li);
};

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    // Hide button
    // reference: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    };

    // Hide nav bar
    // reference: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-10vh";
    };
    prevScrollPos = currentScrollPos;

    // Activate section
    for (let section of sections) {
        if (isActive(section)) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    };
};

// Scroll back to top
function goBack() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Check if element is in viewport
// reference: https://gist.github.com/davidtheclark/5515733
function isActive(el) {

    let act = el.getBoundingClientRect();

    return (
        act.top >= 0 &&
        act.left >= 0 &&
        act.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        act.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};