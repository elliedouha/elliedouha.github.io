var natue, people;


function preload() {
	nature = loadAnimation("assets/1.jpg", "assets/2.png");
	people = loadAnimation("assets/3.jpg", "assets/4.jpg");
}

function setup() {
	createCanvas(800,400);
}

function draw() {
	background(255,255,255);  

  animation(nature, 600, 200);
  animation(people, 600, 200);
}