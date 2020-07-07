var numSquares = 6;
var colors = [];
colors = generateRandomColors(numSquares);
   
var squares = document.querySelectorAll(".square");
var pickedColor = generateColor();
var display = document.querySelector("#display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
display.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = generateColor();
	display.textContent = pickedColor;
	for(var i=0; i < squares.length; i++){
		if(i<3){
			squares[i].style.display = "block";
		   squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = generateColor();
	display.textContent = pickedColor;
	for(var i=0; i < squares.length; i++){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}
});

resetButton.addEventListener("click", function(){
		colors = generateRandomColors(numSquares);
		pickedColor = generateColor();
		display.textContent = pickedColor;	
		this.textContent = "New Colors";
		for(var i=0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
		}
		h1.style.backgroundColor = "steelblue";
		messageDisplay.textContent = "";
});

for(var i=0; i < squares.length; i++){
	//give colors to the squares
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(pickedColor === clickedColor){
			messageDisplay.textContent = "Correct!!";
			changeColor(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}		
	});
}

function changeColor(color){
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
function generateColor(){
	var color = Math.floor(Math.random() * colors.length);
	return colors[color];
}
function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(RandomColor());
	}
	return arr;
}
function RandomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}