let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
let mijnStylesheet = document.querySelectorAll("link")[1];
let knopZon = document.querySelector(".lightmode");
let knopMaan = document.querySelector(".darkmode");

function toonMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
}
menuKnop.addEventListener("click",toonMenu);

let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
}
mainGedeelte.addEventListener("click",verbergMenu);

function lightmode() {
	mijnStylesheet.setAttribute("href", "Light-stijl.css")
	knopZon.setAttribute("src", "sun_negatief.svg")
	knopMaan.setAttribute("src", "moon_negatief.svg")
}

function darkmode() {
	mijnStylesheet.setAttribute("href", "Dark-stijl.css")
	knopZon.setAttribute("src", "sun.svg")
	knopMaan.setAttribute("src", "moon.svg")
}

knopMaan.addEventListener("click",darkmode);
knopZon.addEventListener("click",lightmode);
