
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world,engine;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
    
	var roof_options ={
		 isStatic:true
	}
	roofObject=Bodies.rectangle(400,100,230,20,roof_options);
	World.add(world,roofObject)

var bob_options ={
   isStatic:false,
   restitution:1,
   friction:0,
   density:0.8
	}
	
	bob1 = Bodies.circle(320,380,20,bob_options)
    World.add(world,bob1)
	bob2 = Bodies.circle(340,380,20,bob_options)
    World.add(world,bob2)
	bob3 = Bodies.circle(360,380,20,bob_options)
	World.add(world,bob3)
	bob4 = Bodies.circle(380,380,20,bob_options)
	World.add(world,bob4)
	bob5 = Bodies.circle(400,380,20,bob_options)
	World.add(world,bob5)
	
	rope1=new Rope(bob1,roofObject,-80,0)
	rope2=new Rope(bob2,roofObject,-40,0)
	rope3=new Rope(bob3,roofObject,0,0)
	rope4=new Rope(bob4,roofObject,40,0)
	rope5=new Rope(bob5,roofObject,80,0)
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  rect(roofObject.position.x,roofObject.position.y,230,20)

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
   
  ellipse(bob1.position.x,bob1.position.y,40,40)
  ellipse(bob2.position.x,bob2.position.y,40,40)
  ellipse(bob3.position.x,bob3.position.y,40,40)
  ellipse(bob4.position.x,bob4.position.y,40,40)
  ellipse(bob5.position.x,bob5.position.y,40,40)
}


//CHOOSE THE CORRECT OPTION TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED

// function keyPressed() {
// 	if (keyCode === DOWN_ARROW) {
// 		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
// 	}
// }

 function keyPressed() {
 	if (keyCode === UP_ARROW) {
 		Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});
 	}
 }

// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
// 		Matter.Body.applyForce(bob1.body,{x:-50,y:-45});
// 	}
// }

// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
// 		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
// 	}
// }
