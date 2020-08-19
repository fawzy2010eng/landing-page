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
const virDiv = document.createElement('div');
for(let i = 0; i < sections.length; i++){
	list = document.createElement('li');
	link = document.createElement('a');
	link.setAttribute('data-nav',sections[i].getAttribute('data-nav'));
	link.textContent = sections[i].getAttribute('data-nav');
	list.appendChild(link);
	virDiv.appendChild(list);
}
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

//for(nav of listOfNav){
//	nav.addEventListener('click',function(){
//		const data-nav = this.getAttribute('data-nav');		
//		for(section of sections){
//			if(section.getAttribute('data-nav') == data-nav){
//				section.classList.add('your-active-class');				
//			}else{
//				section.classList.remove('your-active-class');				
//			}
//		}
//	})
//}


window.addEventListener('scroll',()=>{
	for(sec of sections){
		
		var rect = sec.getBoundingClientRect();
		y = Math.floor(rect.top);
		h = Math.floor(rect.height);
		console.log(`${sec.getAttribute('data-nav')} ${y},${h},${sec.offsetTop}`)
	}
	
	
	
	
	
//	const sec1 = document.getElementById("section1");
//	const sec2 = document.getElementById("section2");
//	const sec3 = document.getElementById("section3");
//	
//	if(window.pageYOffset <= sec2.offsetTop){
//		for(section of sections){
//			section.classList.remove('your-active-class')
//		}
//		sec1.classList.add('your-active-class');
//		for(nav of listOfNav){
//			if( nav.getAttribute('data-nav') == sec1.getAttribute('data-nav')){
//				nav.style.color = 'red'
//			}else{
//				nav.style.color = 'white'
//			}
//		}
//		
//	}
//	else if(window.pageYOffset <= sec3.offsetTop){
//		for(section of sections){
//			section.classList.remove('your-active-class')
//		}
//		sec2.classList.add('your-active-class');
//		for(nav of listOfNav){
//			if( nav.getAttribute('data-nav') == sec2.getAttribute('data-nav')){
//				nav.style.color = 'red'
//			}else{
//				nav.style.color = 'white'
//			}
//		}
//	}
//	else{
//		for(section of sections){
//			section.classList.remove('your-active-class')
//		}
//		sec3.classList.add('your-active-class')
//		for(nav of listOfNav){
//			if( nav.getAttribute('data-nav') == sec3.getAttribute('data-nav')){
//				nav.style.color = 'red'
//			}else{
//				nav.style.color = 'white'
//			}
//		}
//	}
	
})










