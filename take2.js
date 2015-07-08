document.addEventListener("DOMContentLoaded", function(){
	var div = document.getElementById('header2');
	div.style.marginLeft = '1000px';
	div.style.marginTop = '-70px';

var ball = document.getElementsByClassName("ball")[0];
ball.style.marginLeft = "60px";
var ball = { xSpeed: 5, ySpeed : 4, element: ball}
console.log(ball.element.style.marginLeft)
var move = function(ball){
	var left = parseInt(ball.element.style.marginLeft)
	if (left >= 400){ ball.xSpeed = - ball.xSpeed}
	if (left <= 0){ball.xSpeed = - ball.xSpeed}

	ball.element.style.marginLeft = (left + ball.xSpeed)
}
setInterval(function(){
			move(ball)
		}, 20);

})