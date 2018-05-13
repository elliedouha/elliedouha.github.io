function setup() {
  noLoop();
  // var url =
  //  'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
  //   'summary/all_day.geojson';
  loadJSON("scenes.json", gotData);
}

function gotData(data) {
	console.log(data);
}

function draw() {
  background(200);
}

function drawEarthquake(earthquakes) {
  
  var earthquakeMag = earthquakes.features[0].properties.mag;
  var earthquakeName = earthquakes.features[0].properties.place;
  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  textAlign(CENTER);
  text(earthquakeName, 0, height - 30, width, 30);
}