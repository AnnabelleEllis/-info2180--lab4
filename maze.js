function changeRed(topLeft, display,start){
	//topLeft.setAttribute("class","boundary youloose");
	// topLeft.classList.add("youlose");
	// topLeft.className += " youloose";
	console.log(topLeft);
	for(var i = 0; i < topLeft.length;i++){
		console.log(topLeft[i]);
		console.log(topLeft[i].classList);
		//Why does theline above print out the class list but 
		//also gives an error?
		topLeft[i].addEventListener("mouseover",function(){
			// this.classList.add("youlose");

			for (var x = 0; x < topLeft.length; x++) {
				topLeft[x].classList.add("youlose");
			}
			console.log(this.classList);
		},false);
		// display.innerHTML ="You LOSE!!!";
	}
	// display.innerHTML ="You LOSE!!!";

}

function gameEnd(display){
	var end = document.querySelector("#end");
	end.addEventListener("mouseover", function(){
		display.innerHTML = "YOU WIN!!!";
	});
}

function gameStart(display){
	start = true;
	var start = document.getElementById('start');
	start.addEventListener("click",function(){
		display.innerHTML ="The Game Has Begun";
	});
}

function gameCheater(topLeft){
	topLeft.addEventListener("mouseout",function(){
		display.innerHTML ="You Lose";
	})

}

window.onload = function(){

	// var topLeft = document.getElementsByClassName('boundary');
	//console.log(topLeft);
	// topLeft.addEventListener("mouseover",changeRed, false);
	// topLeft.onmouseover = function{changeRed(topLeft)};
	var start = false;
	var topLeft = document.querySelectorAll('#maze .boundary');
	var display = document.getElementById("status");

	if (!start){
		gameStart(display);
		changeRed(topLeft, display,start);
		gameEnd(display);
	}else if(start){
		for (var x = 0; x < topLeft.length; x++) {
			//This feel wrong
				if (topLeft[x].classList.contains("youlose")){
					topLeft[x].classList.remove("youlose");
				}

		}			
	}



}