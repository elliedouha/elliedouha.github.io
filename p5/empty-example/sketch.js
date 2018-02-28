function setup() {
  // put setup code here
  createCanvas(600,600);
  background(255);

  console.log('howdy');
}

function draw() {
  // put drawing code here


  
  translate(mouseX, mouseY);
  rotate(frameCount);
  triangle(-20, 20, 0, -20, 20, 20);
}