canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	 keyPressed = e.keyCode;
	console.log(keyPressed);

	if((keyPressed >= 97 && keyPressed <= 122)|| (keyPressed >= 65 && keyPressed <= 90)){
	alphabetkey();
	document.getElementById("d1").innerHTML = "You pressed an Alphabet key";
	console.log("alphabet key");
	}
	 
	else if(keyPressed >= 48 && keyPressed <= 57){
		numberkey();
		document.getElementById("d1").innerHTML = "You pressed a number key";
		console.log("number key");
	}

	else if(keyPressed >= 37 && keyPressed <= 40){
		arrowkey();
		document.getElementById("d1").innerHTML = "You pressed an arrow key" ;
		console.log("arrow key");
	}

	else if(keyPressed == 17)(keyPressed == 18)(keyPressed == 27)
	{
		spkey()
		document.getElementById("d1").innerHTML = "You pressed a special key" ;
		console.log("special key");
	}

	else{
		otherkey();
		document.getElementById("d1").innerHTML = "You pressed other key"
	}

}

function alphabetkey(){
document.getElementById("myCanvas").style.background = ('Alpkey.png');
}

function numberkey(){
	document.getElementById("myCanvas").style.background = ('numkey.png');
}

function arrowkey(){
	document.getElementById("myCanvas").style.background = ('Arkey.png');
}

function spkey(){
	document.getElementById("myCanvas").style.background = ('spkey.png');
}

function otherkey(){
	document.getElementById("myCanvas").style.background = ('otherkey.png');
}