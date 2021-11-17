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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/*
adding the fourth section by copying the content of a previously made section,
then altering the differences such as the id and the header content,
and finally adding the new element as the last section.
*/

let sections = document.querySelectorAll("section");
let sectionContent = sections[0].innerHTML;
let section4 = document.createElement("section");
section4.id = "section4";
section4.setAttribute("data-nav", "Section 4");
section4.innerHTML = sectionContent;
section4.firstElementChild.firstElementChild.textContent = "Section 4";
sections[sections.length - 1].insertAdjacentHTML(
    "afterend",
    section4.outerHTML
);

/**
 * creating navbar using a for loop that loops on all sections
 * and when clicked scrolls to the section
 */
function scrolling(e) {
    e.preventDefault();

    let item = this.firstElementChild.getAttribute("href");
    let top = document.querySelector(item).offsetTop;

    scroll({
        top: top,
        behavior: "smooth",
    });
}
function navData(section) {
    let newElement = document.createElement("li");
    newElement.innerHTML = `<a href="#${section.id}">${section.getAttribute(
        "data-nav"
    )}</a>`;
    newElement.firstElementChild.className = "menu__link";
    newElement.addEventListener("click", scrolling);
    frag.appendChild(newElement);
}

let frag = document.createDocumentFragment();
let navBar = document.querySelector("nav");
navBar.style.float = "right";
sections = document.querySelectorAll("section");
sections.forEach(navData);
navBar.appendChild(frag);

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

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
