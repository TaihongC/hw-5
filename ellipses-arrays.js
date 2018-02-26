var x2 = 45;
var y1 = 45;
var d1 = 10;

function setup() {
  createCanvas(400, 400);
  //colorMode(HSB)
}
  
function draw() {
  background(0);
  noStroke();

  for(var i = 0; i <10; i++) {
    stroke(255);
    fill(random(255), random(255), random(255));
    ellipse(x2 * i, y1*1, d1);
    ellipse(x2 * i + 30, y1*1  , d1);
    ellipse(x2 * i + 40, y1*1  , d1);
    ellipse(x2 * i + 60, y1*1  , d1);
    ellipse(x2 * i + 80, y1*1  , d1);
  }

  // 1% of the time
  if (random() < 0.02) {
    d1 = random(10, 50);
  }
  
  // 2% of the time…
  if (random() < 0.02) {
    d2 = random(10, 50);
  }
 
}
