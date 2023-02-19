let elementsAnimations = {
	"title" : ["title", 0],
	"cars-item1" : ["cars", 0],
	"cars-item2" : ["cars", 0],
	"cars-item3" : ["cars", 0],
	"cars-item4" : ["cars", 0],
	"cars-item5" : ["cars", 0],
	"cars-item6" : ["cars", 0],
	"about-item1" : ["about", 100], 
	"about-item2" : ["about", 200],
	"about-item3" : ["about", 300],
	"about-item4" : ["about", 400],
	"cars-title" : ["title", 0],
	"about-title" : ["title", 0],
	"documents" : ["documents", 0]
}
let burgerMenuStyle = document.getElementById("menu").style;
function inUsersView(element){
	let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
	let rect = element.getBoundingClientRect();
	return rect.top >= 0 && rect.bottom <= viewportHeight ;
}
function changingElementsAnimations(){
	if ( document.documentElement.clientWidth <= 900  ) {
		for (let i = 1; i <= 7; i++) {
			elementsAnimations["cars-item" + 1][1] = 0
		}
	}
	else {
		elementsAnimations = {
			"title" : ["title", 0],
			"cars-item1" : ["cars", 0],
			"cars-item2" : ["cars", 400],
			"cars-item3" : ["cars", 800],
			"cars-item4" : ["cars", 0],
			"cars-item5" : ["cars", 400],
			"cars-item6" : ["cars", 800],
			"about-item1" : ["about", 100], 
			"about-item2" : ["about", 200],
			"about-item3" : ["about", 300],
			"about-item4" : ["about", 400],
			"cars-title" : ["title", 0],
			"about-title" : ["title", 0],
			"documents" : ["documents", 0]
		}
	}
}
function makePlayingAnimations() {
	let animIsInProcess = false;
	return function() {
		if( animIsInProcess ){
			return
		}
		this.animIsInProcess = true;
		 for( let key in elementsAnimations ){
		 	let element = document.getElementById(key);
		 	if ( inUsersView( element ) ) {
		 		setTimeout( () => document.getElementById( key ).style.animationName = elementsAnimations[ key ][0], elementsAnimations[ key ][1]);
		 	}
			else{
				continue
			}
		}
		animIsInProcess = false;
	};
	
}
function toggleBurgerMenu() {
	console.log("hello");
	if ( burgerMenuStyle.visibility == "hidden" ) { burgerMenuStyle.visibility = "visible" }
	else{ burgerMenuStyle.visibility = "hidden" }
}
changingElementsAnimations()
let playingAnimations = makePlayingAnimations();
playingAnimations()
window.addEventListener("resize", changingElementsAnimations );
window.addEventListener("resize", () => { 
	if( document.getElementsByTagName('body')[0].clientWidth >= 1060 )  burgerMenuStyle.visibility = "visible"; 
	else burgerMenuStyle.visibility = "hidden"
} );
document.addEventListener("scroll", playingAnimations );