// function setup() {
// 	createCanvas(1300, 800);
// }

// function preload(){
// 	oBackground = loadImage('assets/chaoticColor.jpg');
	
// }

// function draw()  {
// 	fill(0);
// 	ellipse(mouseX, mouseY, 100, 100);
// }

// var sceneData;

// var currentScene = 0;
// var scenes = [];

// function preload() {
//   sceneData = loadJSON('scenes.json');
// }

// function setup() {
//   createCanvas(800, 800);
//   CreateScenesFromData(sceneData.scenes);
// }

// function draw() {
//   background(255);
//   scenes[currentScene].display();

//   fill(0);
//   textSize(24);
//   text("press the option number to advance to the indicated scene", 50, 700);
// }

// function CreateScenesFromData(data) {
//   for (var i = 0; i < data.length; i++) {
//     scenes.push(new Scene(data[i].sceneText, data[i].options, data[i].nextScenes))
//   }
// }

// function Scene(sceneText, options, nextScenes) {
//   this.sceneText = sceneText;
//   this.options = options;
//   this.nextScenes = nextScenes;

//   this.display = function() {
//     fill(0);
//     textSize(32);
//     text(this.sceneText, 100, 100);

//     for (var i = 0; i < options.length; i++) {
//       text('OPTION ' + (i + 1) + ': ' + this.options[i], 150, 200 + i * 50);
//     }
//   }
// }

// function keyPressed() {
//   var numberPressed = parseInt(key);
//   var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
//   if (newScene !== undefined) {
//     currentScene = newScene;
//   }
// }

////////////////////////////////////////////////////////////////

var sceneState = {
  INTRO: 0,
  SAD: 1,
  ANGRY: 2,
  OVERWHELMED: 3
};

var currentState = sceneState.INTRO;

var oBackgroundImg;

var sceneData;

var currentScene = 0;
var scenes = [];




function setup() {
  createCanvas(400,600);

  oBackgroundImg = loadImage("assets/chaoticColor.png");


}

function draw() {
  drawScene(currentState);
  checkTransition(currentState);
}



//SCENES


  function drawScene(whichScene) {
  switch (currentState) {
    case sceneState.INTRO:
      background(255);
      textSize(20);
      textAlign(CENTER, CENTER);
      text("Find\nYour\n\"Zen\"", width/2, height/2);
      break;
    case sceneState.SAD:
        background(0, 0, 255);
        
    case sceneState.ANGRY:
        background(255, 0, 0);
           
    case sceneState.OVERWHELMED:
       
        background(0, 255, 0);

    }
      break;
      default:
      break;

    }

  }


//TRANSITIONS


  function checkTransition(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      if (key == 'H') {
        currentState = sceneState.SAD;
        setUpScene(currentState);
      }
      break;
    case sceneState.SAD:
      if (key == 'S') {
        
          currentState++;
          setUpScene(currentState);      
        
      }
      break;
    case sceneState.ANGRY:
      if (key == 'A') {
         {
          currentState = sceneState.INTRO;      
        setUpScene(currentState);
      }
    }
      break;
    case sceneState.OVERWHELMED:
      if (key == 'O') {
        
          currentState++;
          setUpScene(currentState);      
        
      }
      break;
    default:
      break;
  }
}


function setUpScene(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      break;
    case sceneState.SAD:
      break;
    case sceneState.ANGRY:
      break;
      case sceneState.OVERWHELMED:
      break;
    default:
      break;
  }
}


function keyPressed() {
  keyOn = true;
}

