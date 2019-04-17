var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ "," 
	+ color2.value
	+")";

	css.textContent = body.style.background + ";";
	//Previously used innerHTML, createtextNode
	//css.textContent adds this to the DOM
	//React will be easier as it streamlines this stuff like juery
	// console.log(color1.value);
}

function startGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ "," 
	+ color2.value
	+")";

	css.textContent = "Initial" + " " + body.style.background + ";";
//1. Write code so that the colour inputs match the background generated on the first page load. 
// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);
// click, mouse, keypress
// body.style.background = "red"; Changes to red
}

function colorGen() {
  color1.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  color2.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  //From https://stackoverflow.com/questions/1484506/random-color-generator

setGradient();
  // color2.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}



color1.addEventListener("input", setGradient);
//color1.addEventListener("input", setGradient()); 
// This will call the event even without the input being changed.

color2.addEventListener("input", setGradient);

// Instead of the 2 above addEventListenerIn in html file:
// <input oninput="setGradient()" class etc. etc.>\
// Same for the other input with color2

startGradient();
//2. Display the initial CSS linear gradient property on page load.

button.addEventListener("click", colorGen)