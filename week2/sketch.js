var speedX = 2;
var speedY = 2;
var paddleSpeed = 2;

var p1Up = false;
var p1Down = false;
var p2Up = false;
var p2Down = false;

var paddleLeft = {
	xPos : 20,
	yPos : 20,
	width : 20;
	height : 100;

}

var paddleRight = {
	xPos : 480,
	yPos : 20,
	width : 20;
	height : 100;

}

var ball = {
 	x = 50;
  	y = 50;
  	d = 50;
  	speedY = 2;
  	speedX = 2;

}

function setup() {
  createCanvas(500, 500);
  background(0);

}

function draw() {
 	ball.move();
  	ball.display();

  	if (p1Up) {
    ypos1 -= speedOfPaddle;
  }
  if (p1Down) {
    ypos1 += speedOfPaddle;
  }
  if (p2Up) {
    ypos2 -= speedOfPaddle;
  }
  if (p2Down) {
    ypos2 += speedOfPaddle;
  }
  
}

function Ball(){

  	fill(0);
  	
    ellipse(ball.x, ball.y, ball.diameter, ball.diameter);

    ball.x = ball.x + speedX;
    ball.y = ball.y + speedY;

    if ((ballY > height) || (ballY < 0)) {
    ballYSpeed *= -1;
    if((ballX <= 20) &&(ballY >= ypos1 - paddleY/2) &&(ballY <= ypos1 + paddleY/2)){
    ballXSpeed *= -1;1

  }
  if((ballX >= width-20) &&(ballY >= ypos2 - paddleY/2) &&(ballY <= ypos2 + paddleY/2)){
    ballXSpeed *= -1;

  }


  }

  function keyPressed() {
  if (key === 'W') {
    p1Up = true;
  }
  if (key === 'S') {
    p1Down = true;
  }

  if (keyCode === UP_ARROW) {
    p2Up = true;
  }
  if (keyCode === DOWN_ARROW) {
    p2Down = true;
  }
}

function keyReleased() {
  if (key === 'W') {
    p1Up = false;
  }
  if (key === 'S') {
    p1Down = false;
  }

  if (keyCode === UP_ARROW) {
    p2Up = false;
  }
  if (keyCode === DOWN_ARROW) {
    p2Down = false;
  }
}

