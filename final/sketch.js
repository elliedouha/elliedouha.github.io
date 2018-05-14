
var currentScene = -1;
var scenes = [];
var sceneSprites = [];
var showingText = false;
var finished = false;

var spriteSize = 60;

function setup() {
  var test = loadJSON('scenes.json', gotSceneData);
  bgImg = loadImage("assets/ocean.png");
  createCanvas(1200,600);
}

function gotSceneData(data) {
  scenes = data.scenes;
  console.log(scenes);
  currentScene = 0;
  loadScene();
}

function loadScene(){
  console.log("LOADING!!");
  sceneSprites = [];
  showingText = false;
  var scene = scenes[currentScene];
  for(var i=0; i<scene.num; i++){
    var sprite = createSprite(0, 0, 70, 50);
    sprite.addImage(loadImage(scene.img));
    sprite.position.x = random(width);
    sprite.position.y = random(height);
    sceneSprites.push(sprite);

    console.log("Adding sprite " + scene.img + " X: " + sprite.position.x + " Y: " + sprite.position.y);
  } 
}

function mouseCollision(){
  for(var i=0; i<sceneSprites.length; i++){
    var sprite = sceneSprites[i];

    if(mouseX > sprite.position.x - spriteSize/2 && mouseX < sprite.position.x + spriteSize/2 && mouseY > sprite.position.y - spriteSize/2 && mouseY < sprite.position.y + spriteSize/2){
      sprite.remove();
      sceneSprites.splice(i, 1);
      console.log("Collision");


    }

  }
}

function draw() {
  background (bgImg);
  fill(255);
  textSize(35);

  if (currentScene >= 0) {
    drawSprites();
    mouseCollision();
    if(sceneSprites.length == 0 && currentScene == scenes.length -1){
      finished = true;

      
    }else if(sceneSprites.length == 0){
      showingText = true;
    }
  }
  if(showingText == true){
    textAlign(CENTER, CENTER);
    text(scenes[currentScene].text, 280, 20, 800, 600);

  }
  if(finished == true){
    textSize(40);
    fill(128 + sin(frameCount*0.1) * 128);
    textAlign(CENTER, CENTER);
    text("Tadaa!! Congratulations, you've cleaned up this virtual ocean, now clean up your real ocean by recycling your upcoming waste! And use a resuable water bottle!", 460, 130, 410, 450);
  }
}

function keyPressed() {
  var numberPressed = parseInt(key);
  currentScene = numberPressed;
}

function mousePressed() {
  if(showingText == true){
    currentScene += 1;
      loadScene();
  }
  if(finished == true){
    currentScene = 0;
    finished = false;
    loadScene();
  }
}