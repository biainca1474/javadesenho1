function setup() {
  createCanvas(800,500);
  background("rgb(0,0,0)");
}

function draw() {
  fill("#00BCD4");
  stroke("lightblue");
  if (mouseIsPressed)
  rect (mouseX, mouseY,30,50);
}
