const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var engine,world
var ground
var box1,box2,box3,box4
var pig,pig2
var log1,log2

function setup() {
  
 var canvas= createCanvas(1200,400);
 engine=Engine.create();
 world=engine.world;
 
 
 // ground=Bodies.rectangle(200,390,200,20,options)
 //ball=Bodies.circle(200,100,20,balloptions)
 // World.add(world,ground)
  //World.add(world,ball);
  box1=new Box(700,320,70,70)
  box2=new Box(920,320,70,70)
  box3=new Box (700,240,70,70)
  box4=new Box(920,240,70,70)
  ground=new Ground(600,height,1200,20)
  pig=new Pig(810,350)
  pig2=new Pig(810,220)
  log1=new Logs(810,260,300,PI/7)
  log2=new Logs(810,180,300,PI/7)
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
 // rectMode(CENTER);
  //fill("brown")
  //rect(ground.position.x,ground.position.y,400,20)
 //ellipseMode(RADIUS);
 //ellipse(ball.position.x,ball.position.y,20,20);
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 ground.display();
 pig.display();
 pig2.display();
 log1.display();
 log2.display();
}