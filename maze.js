function setUpEvents(){

}
function changeBackground(){
	var backColor = document.getElementsByClassName("boundary");

	for(var i = 0; i < backColor.length - 1; i++ ){
		backColor[i].classList.add('youlose');
		//style.backgroundColor = 'red';

	}
}

/*function backToNormal(){
	var backColor = document.getElementsByClassName("boundary");

	for(var i = 0; i < backColor.length - 1; i++ ){
		backColor[i]..classList.remove('youlose');
		//style.backgroundColor = '';

	}
}*/

function win(){
	//console.log(winner);
	//var winner = document.getElementById('end');
	var winner = document.querySelector('#maze');
	winner.innerHTML = ('<h2>You WIN</h2>');

}


	
	
window.onload = function(){
	setUpEvents()
}