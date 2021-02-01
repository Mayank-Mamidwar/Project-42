//
var hr;
var mn;
var sc;

var hrAngle;
var mnAngle;
var scAngle;






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hr = hour();
mn = minute();
sc = second();


}

function draw() {
  background(255,255,255);  

  angleMode(DEGREES);
  hrAngle = map(hr, 0, 60,0,360);
  mnAngle = map(mn, 0, 60,0,360);
  scAngle = map(sc, 0, 60,0,360);


  //seconds hand
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  //mn hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()


  //hour hands
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop()







  drawSprites();
}