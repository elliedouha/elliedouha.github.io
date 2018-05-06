var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Prague';
var apiKey = '&APPID=5e0f8c3ab04304042cdd7ac164757d2c';
var units =  '&units=metric';

function setup() {
  createCanvas(1000,1000);
  var url = api + city + apiKey + units;
  loadJSON(url, gotData, 'jsonp');

}

function gotData(data){
  weather = data;
}

function draw() {
  

  if(weather){

    noFill();

    strokeWeight(1);
    stroke(255, 50);
    arc(250, 300, 400, 400, PI, TWO_PI);
    arc(250, 300, 350, 350, PI, TWO_PI);
    

    strokeWeight(7);
    stroke(200,0,100);
    arc(250, 300, 400, 400, PI, PI - (weather.main.temp*2));
    stroke(0,255,255);
    arc(250, 300, 350, 350, PI, - weather.main.humidity);
    

  }
}