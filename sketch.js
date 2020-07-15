const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var agam,ground,stand,standc;
var engine,world;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;

var block9;
var gameState = "onSling";
function setup(){
createCanvas(1000, 500);
engine = Engine.create();
world = engine.world;
ground = new Ground(500,450,1000,10);
stand = new Ground(607,270,120,10);

block1 = new Box(590,235,30,40);
block2 = new Box(620,235,30,40);
block3 = new Box(605,205,30,40);
block6 = new Box(650,235,30,40);
block7 = new Box(635,205,30,40);
block8 = new Box(575,205,30,40);
block9 = new Box(620,175,30,40);
block4 = new Box(560,235,30,40);
block5 = new Box(590,175,30,40);
block10 = new Box(605,145,30,40);
stone = new Stone(100,200,35);
point1 = new Ground(200,100,0,0);
slingshot = new SlingShot(stone.body,point1.body);
}

function draw() {
  background("green"); 
  Engine.update(engine) 
  ground.display();
  stand.display();
  
  block1.display();
  block2.display();
  block3.display();
 block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  stone.display();
  
 slingshot.display();
}
function mouseDragged() {
  if (gameState !== "launched") {
      Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
  }
}
function mouseReleased() {
 gameState = "launched";
  fly();
}