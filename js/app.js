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
const sectionsArray = Array.from(sections);
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
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
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

// Activate nav items while scrolling using Intersection Observer API
// references: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API, https://codepen.io/SWBennett06/pen/bLEjJR, https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/

const target = document.querySelectorAll('nav li');

// Add and remove active class from list items
function addActiveClass(index) {
    if (sections[index].classList.contains('active'))
        return;

    const navActive = document.querySelectorAll('nav .active');
    for (let i = navActive.length - 1; i >= 0; i--) {
        navActive[i].classList.remove('active');
    }
    target[index].classList.add('active');
};

// The degree of intersection between the sections and root is the intersection ratio.
let callback = (entries) => {
    if (entries[0].intersectionRatio <= 0) {
        return;
    }
    if (entries[0].intersectionRatio > 0.75) {
        addActiveClass(sectionsArray.indexOf(entries[0].target))
    }
};

// Options: 
//root = element that is used as the viewport,
//margin around the root, 
//percentage of the target's visibility that observer callback should run, 1.0 = every pixel is visible.
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};

//Create new observer and invoke callback
let observer = new IntersectionObserver(callback, options);

// Build the array of threshold ratios
for (let i = 0; i < sections.length; i++) {
    observer.observe(sections[i]);
};