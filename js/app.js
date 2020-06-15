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
const lis = document.getElementsByTagName("a");
let activeNav = null;

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
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
        for (let nav of lis) {
            nav.classList.remove('active');
        };
    };

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
    for (let nav of lis) {
        nav.classList.remove('active');
    };
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

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", () => {
        if (lis[i] !== activeNav) {
            lis[i].classList.add("active");
        } else {
            return
        }
        if (activeNav) {
            activeNav.classList.remove('active');
        }
        activeNav = lis[i];
    })
};