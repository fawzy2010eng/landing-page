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
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
//console.log(sections[0]);
const unOrderedList = document.querySelector('ul');
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
let list ;
let link;
//creating virtual div
const virDiv = document.createElement('div');
for(let i = 0; i < sections.length; i++){
	//creaing li item
	list = document.createElement('li');
	//adding link to li item
	link = document.createElement('a');
	//adding attribute to the link
	link.setAttribute('data-nav',sections[i].getAttribute('data-nav'));
	link.textContent = sections[i].getAttribute('data-nav');
	//appending link to the list
	list.appendChild(link);
	//appending the list to the virtual div to improve performance 
	virDiv.appendChild(list);
}
	//appending the virtual div to the unordered list once 
	unOrderedList.appendChild(virDiv);






// Scroll to section on link click"use strict";

const listOfNav = document.querySelectorAll('li a');

for (nav of listOfNav) {
  nav.addEventListener('click', function () {
    const navitem = parseInt(this.getAttribute('data-nav').slice(7)) - 1;
    window.scrollTo(0, sections[navitem].offsetTop + 10);
  });
}

// Set sections as active

let arrOfSpace= [];
window.addEventListener('scroll',()=>{
	arrOfSpace = [];
	for(let i = 0; i < sections.length; i++){
		
		var rect = sections[i].getBoundingClientRect();
		y = Math.floor(rect.top);
		h = Math.floor(rect.height);
		//adding the absolute space between the view and the section to array
		arrOfSpace.push(Math.abs(y));
		
	}
	//get the min value in the array and this should be the active section 
	let item = arrOfSpace.indexOf(Math.min(...arrOfSpace));
	//looping through the navs and sections to remove and add active class 
	for(let i = 0; i < sections.length; i++){
		if(i == item){				
			sections[i].classList.add('your-active-class');
			listOfNav[i].classList.add('active');												 	
		}else{
			sections[i].classList.remove('your-active-class');
			listOfNav[i].classList.remove('active')
		}
	}
})
