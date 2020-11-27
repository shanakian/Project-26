const Engine=Matter.Engine;

const World=Matter.World;

const Bodies=Matter.Bodies;

var engine, world, bodies;

function setup() {
  createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;

  
  //restitution 1 makes object bounce a few times;
  //add ball_options as fourth parameter Bodies.circle() to make it bounce;
  //method i.e. ball = Bodies.circle(200,100,20ball_options);
  var bodies_options={ isStatic: true};
  // can be any shape
  bodies=Bodies.rectangle(200,100,50,50);

  World.add(world, bodies);
    
  console.log(bodies.position.x);
}

function draw() {
  background("black");  

  Engine.update(engine);
  rectMode(CENTER);
  rect(bodies.position.x,bodies.position.y,50,50);

}