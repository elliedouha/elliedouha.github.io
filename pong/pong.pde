float ypos1 = height/2;
float ypos2 = height/2;
float paddleX = 10;
float paddleY = 80;

float speedOfPaddle = 8;

float ballX = width/2;
float ballY = height/2;
float ballXSpeed = 3;
float ballYSpeed = 6;
float ballSize = 20;

boolean p1Up = false;
boolean p1Down = false;
boolean p2Up = false;
boolean p2Down = false;

void setup() {
  size(500, 500);
  background(0);

}

void draw() {
  
  color c = color(255, 3, 95); //from this color
  color c2 = color(3, 190, 255); //to this color
  float lerpAmount = map(mouseX, 0, width, 0, 1); //color interactive change
  
  
  stroke(255);
  strokeWeight(3);
  line(width/2, 0, width/2, 500);
  
  
  
  stroke(0);
  rectMode(CENTER);
  fill(0,255,255);
//left paddle
  rect(20, ypos1, paddleX, paddleY);

//right paddle
  rect(width-20, ypos2, paddleX, paddleY);

//paddle movement
  if (p1Up == true) {
    ypos1 -= speedOfPaddle;
  }
  if (p1Down == true) {
    ypos1 += speedOfPaddle;
  }

  if (p2Up == true) {
    ypos2 -= speedOfPaddle;
  }
  if (p2Down == true) {
    ypos2 += speedOfPaddle;
  }

//ball
  fill(lerpColor(c, c2, lerpAmount));
  ballX += ballXSpeed;
  ballY += ballYSpeed;
  rect(ballX, ballY, ballSize, ballSize);

  if ((ballY > height) || (ballY < 0)) {
    ballYSpeed *= -1;
  }
  
//collision detections
  if((ballX <= 20)
  &&(ballY >= ypos1 - paddleY/2)
  &&(ballY <= ypos1 + paddleY/2)){
    ballXSpeed *= -1;

  }
  if((ballX >= width-20)
  &&(ballY >= ypos2 - paddleY/2)
  &&(ballY <= ypos2 + paddleY/2)){
    ballXSpeed *= -1;

  }
}

void keyPressed() {
  if (key == 'w') {
    p1Up = true;
  }
  if (key == 's') {
    p1Down = true;
  }
  if (key == CODED) {
    if (keyCode == UP) {
      p2Up = true;
    }
    if (keyCode == DOWN) {
      p2Down = true;
    }
  }
}

void keyReleased() {
  if (key == 'w') {
    p1Up = false;
  }
  if (key == 's') {
    p1Down = false;
  }
  if (key == CODED) {
    if (keyCode == UP) {
      p2Up = false;
    }
    if (keyCode == DOWN) {
      p2Down = false;
    }
  }
}