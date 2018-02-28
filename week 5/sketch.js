var positions = [];

function setup() {
	createCanvas(800, 800);
}

function parseJson(data) {
	for (var i = 0; i < data.length; i++) {
		positions.push(new PaintMark(createVector(data[i].x, data[i].y)));
	}
}

function draw() {
  background(255,255,255);

  for (var i = 0; i < positions.length; i++) {
  	positions[i].display();
  }
}

function PaintMark(pos) {
	this.position = pos;

	this.display = function() {
		noStroke();
		fill(255, 0, 255);
		ellipse(this.position.x, this.position.y, 10, 10);
	}
}

function keyPressed() {
	if (key === ' ') {
		savePaint();
	}
	if (key === 'L') {
		loadJSON('paint.json', parseJson);
	}
}

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