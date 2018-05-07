var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Prague';
var apiKey = '&APPID=5e0f8c3ab04304042cdd7ac164757d2c';

var sceneData;

var currentScene = 0;
var oldScene =0;
var scenes = [];

function preload() {
  sceneData = loadJSON('scenes.json');
}

function setup() {
  createCanvas(1000,1000);
  var url = api + city + apiKey + units;
  loadJSON(url, gotData, 'jsonp');

}


function draw() {
  

    scenes[currentScene].display();
    if (currentScene != oldScene){
    oldScene = currentScene;
}
fill(0);
  textSize(24);
  //text("press the option number to advance to the indicated scene", 50, 500);
  text("Throwing away a new plastic bottle everyday leads to this:", 200, 20);

  
}

function CreateScenesFromData(data) {
  for (var i = 0; i < data.length; i++) {
    scenes.push(new Scene(data[i].sceneText, data[i].options, data[i].nextScenes, data[i], data[i], data[i]))
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

function mousePressed() {
  
  var s = createSprite(mouseX, mouseY, 30, 30);
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}