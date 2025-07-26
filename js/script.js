// js ex
// ex1
function contentChange(){
	document.getElementById('cc').innerHTML = "Hello";  
}

// ex2
function showDate(){
	document.getElementById('sd').innerHTML = Date();
}

// ex3
function showDateTime(){
	document.getElementById('sdt').innerHTML = Date();
}

// BulbOn/off
function bulbOn(){
	document.getElementById('img').src="images/bulbon.gif";
}

function bulbOff(){
	document.getElementById('img').src="images/bulboff.gif";
}

// ex5
function changeCSS(){
	document.getElementById('css').style.color = "red";
}

// ex6
function changeCSSFont(){
	document.getElementById('cssf').style.fontSize = "60px";
}

// ex7
function textShow(){
	document.getElementById('sh').style.display = "block";
}
function textHide(){
	document.getElementById('sh').style.display = "none";
}

// ex8

var number1 = 5;
var number2 = 2;
var result = number1 + number2;

function showResult(){
	document.getElementById('sr').innerHTML = result;
}