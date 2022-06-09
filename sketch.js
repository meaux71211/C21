const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  Btn1 = createImg("right.png");
  Btn1.position(220,30);
  Btn1.size(50,50);
  Btn1.mouseClicked(hForce);
  Btn2 = createImg("up.png");
  Btn2.position(20,30);
  Btn2.size(50,50);
  Btn2.mouseClicked(vForce);
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var ball_options = {
    restitution: 0.95,
  }
  ball = Bodies.circle(200,100,20,ball_options);

  World.add(world, ball);

 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  ellipse(ball.position.x,ball.position.y,20);
  right.show();
  Engine.update(engine);
}
function hForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function vForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

