var positions = [];

function setup() {
	createCanvas(1300, 800);
}

function parseJson(data) {
	for (var i = 0; i < data.length; i++) {
		positions.push(new PaintMark(createVector(data[i].x, data[i].y)));
	}
}

function draw() {
  background(0);

  for (var i = 0; i < positions.length; i++) {
  	positions[i].display();
  }
  fill(255);
  textSize(30);
  text("Welcome to 2D drawing", 40, 50);
  fill(100,20,90);
  textSize(30);
  text("Click the key R to draw in red circles", 40, 100);
  fill(90,20,120);
  textSize(30);
  text("Click the key B to draw in blue squares", 40, 150);
}

function PaintMark(pos) {
	this.position = pos;

	this.display = function() {
		if (key === 'B'){
		noStroke();
		fill(0, 0, 255);
		rect(this.position.x, this.position.y, 20, 20);
	}if (key === 'R'){
		noStroke();
		fill(255, 0, 0);
		ellipse(this.position.x, this.position.y, 20, 20);
	}
	}
}

// function keyPressed() {
// 	if (key === ' ') {
// 		//savePaint();
// 		this.display = function() {
// 		noStroke();
// 		fill(255, 0, 0);
// 		ellipse(this.position.x, this.position.y, 60, 60);
// 	}
// 	}
// 	if (key === 'L') {
// 		//loadJSON('paint.json', parseJson);
// 	}
// }

function mouseDragged() {
	positions.push(new PaintMark(createVector(mouseX, mouseY)));
}

function savePaint() {
	paintMarkPositions = [];
	for (var i = 0; i < positions.length; i++) {
		paintMarkPositions.push(
		{
			x: positions[i].position.x,
			y: positions[i].position.y
		}
		);
	}
	saveJSON(paintMarkPositions, 'paint.json');
}