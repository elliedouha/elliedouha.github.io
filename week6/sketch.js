var sceneData;

var currentScene = 0;
var oldScene =0;
var scenes = [];
var r2 , g2, b2 ;

function preload() {
  sceneData = loadJSON('scenes.json');
}

function setup() {
  createCanvas(1250, 650);
  CreateScenesFromData(sceneData.scenes);
}

function draw() {

//changes the backgorund only once
  scenes[currentScene].display();
    if (currentScene != oldScene){
  	// console.log("old scene is" + oldScene) ;
  	// console.log("changing to scene" + currentScene) ;
  	background(r2,g2,b2);
  	oldScene = currentScene;
}
//curser white circle
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 80, 80);

//directions
  fill(0);
  textSize(15);
  text("Clear away the color, become zen", 50, 570);
  textSize(24);
  //text("press the option number to advance to the indicated scene", 50, 500);
  text("How are you feeling today? What emotion do you need to clear? Pick your zen world", 200, 20);
}

function CreateScenesFromData(data) {
  for (var i = 0; i < data.length; i++) {
    scenes.push(new Scene(data[i].sceneText, data[i].options, data[i].nextScenes, data[i].r, data[i].g, data[i].b))
  }
}

function Scene(sceneText, options, nextScenes, r, g, b) {
  this.sceneText = sceneText;
  this.options = options;
  this.nextScenes = nextScenes;
  this.r = r;
  this.g = g;
  this.b = b;

  this.display = function() {
  	//title format
    fill(0);
    textSize(40);
    //title location
    text(this.sceneText, 450, 80);
    //background colors
    r2 = this.r;
    g2 = this.g;
    b2 = this.b;
    console.log(r) ;
    console.log(g) ;
    console.log(this.b) ;
    //zen text
    textSize(20);
    fill(50);
    for (var i = 0; i < options.length; i++) {
      text('Zen Option ' + (i + 1) + ': ' + this.options[i], 480, 120 + i * 30);
    }
  }
}

function keyPressed() {
  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
  if (newScene !== undefined) {
  	oldScene = currentScene;
    currentScene = newScene;
  }
}


