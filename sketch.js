const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(400, 400);

  sl = new SL(200, 100, 125, 30);

  circle = new Circle(200, 300, 50);

}

function draw() {
  background(0, 0, 0);

  Engine.update(engine);

  sl.display();

  circle.display();

  // work();

}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    circle.x = mouseX;
    circle.y = mouseY;
    circle.display();
  }
}

function work() {

}
