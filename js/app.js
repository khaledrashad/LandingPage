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
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
const elements = [
    {
        position: document.getElementById('section1').getBoundingClientRect(),
        name: "section1"
    }, {
        position: document.getElementById('section2').getBoundingClientRect(),
        name: "section2"
    }, {
        position: document.getElementById('section3').getBoundingClientRect(),
        name: "section3"
    }, {
        position: document.getElementById('section4').getBoundingClientRect(),
        name: "section4"
    }
]
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    for (element of elements) {
        if (element.position.y - element.position.height<= scroll && element.position.y >= scroll) {
            document.getElementById(`${
                element.name
            }`).classList.add('your-active-class')
        } else {
            document.getElementById(`${
                element.name
            }`).classList.remove('your-active-class')
        }
    }
});


// Scroll to anchor ID using scrollTO event
const buttons = document.getElementsByClassName("scrollable-section")
const sections = document.getElementsByClassName("section-scroll")
for (let i = 0; i < sections.length; i++){
    let element = buttons[i]
    let section = sections[i]
    element.addEventListener("click", (event) => {
        event.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
        
    });
};



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu

// Scroll to section on link click

// Set sections as active
