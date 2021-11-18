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

let sections = document.querySelectorAll("section");
let sectionContent = sections[0].innerHTML;
let addedSection = document.createElement("section");

let frag = document.createDocumentFragment();
let navBar = document.querySelector("nav");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/*
adding the fourth section by copying the content of a previously made section,
then altering the differences such as the id and the header content,
and finally adding the new element as the last section.
*/
function addSection() {
    sections = document.querySelectorAll("section");
    addedSection.id = "section" + (sections.length + 1);
    addedSection.setAttribute("data-nav", "Section " + (sections.length + 1));
    addedSection.innerHTML = sectionContent;
    addedSection.firstElementChild.firstElementChild.textContent =
        "Section " + (sections.length + 1);
    sections[sections.length - 1].insertAdjacentHTML(
        "afterend",
        addedSection.outerHTML
    );
}
addSection();
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

/**
 * creating navbar using a for loop that loops on all sections
 */

function navData(section) {
    let newElement = document.createElement("li");
    newElement.innerHTML = `<a href="#${section.id}">${section.getAttribute(
        "data-nav"
    )}</a>`;
    newElement.firstElementChild.className = "menu__link";
    newElement.addEventListener("click", scrolling);
    frag.appendChild(newElement);
}
navBar.style.float = "right";
sections = document.querySelectorAll("section");
sections.forEach(navData);
navBar.appendChild(frag);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
window.addEventListener("scroll", function () {
    sections.forEach((section) => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        let sectionEnd = sectionTop + sectionHeight;
        let ScreenYCoordinate = this.window.pageYOffset;
        console.log(sectionTop, sectionEnd, ScreenYCoordinate);
        if (ScreenYCoordinate >= sectionTop && ScreenYCoordinate < sectionEnd) {
            console.log(section.id);
        }
    });
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
/**
 * smoothly scroll when the item is clicked on navbar
 */
function scrolling(e) {
    e.preventDefault();
    let id = this.firstElementChild.getAttribute("href");
    let section = document.querySelector(id);

    scroll({
        top: section.offsetTop,
        behavior: "smooth",
    });
    toActive(section);
}
// Set sections as active
function toActive(section) {
    let oldActive = document.querySelector(".active");
    if (oldActive)
        oldActive.className = oldActive.className.replace("active", "");
    section.className += "active";
}
