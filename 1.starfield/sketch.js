let stars = [];

let speed = 30;

function setup() {
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 500; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}