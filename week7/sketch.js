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


}

