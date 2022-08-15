
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var square1, square2;

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var ball_options = {
        restitution:0.9,
		friction:1,
		frictionAir:0.02
	}
    
	var square1_options = {
		restitution:0.3,
		friction:0.5,
	}

	var square2_options = {
		restitution:0.7,
		friction:1.5,
	}

	var floor_options = {
        isStatic : true
	}

	floor = Bodies.rectangle(380,600,800,20,floor_options);
    World.add(world,floor);

	ball = Bodies.circle(300,0,20,ball_options);
	World.add(world,ball);

	square1 = Bodies.rectangle(450,100,30,30,square1_options);
    World.add(world,square1);

    square2 = Bodies.rectangle(150,100,30,30,square2_options);
    World.add(world,square2);
	
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  
  background(0);

  Engine.update(engine);

  rect(floor.position.x,floor.position.y,800,20);
  ellipse(ball.position.x, ball.position.y,20);
  rect(square1.position.x, square1.position.y,30,30);
  rect(square2.position.x, square2.position.y,30,30);
}