
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObj1 , bobObj2 , bobObj3 , bobObj4  ;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bobObj1 = new Bob(40,300,20,PI/2)

	Engine.run(engine);
  
}


function draw() {
 
  background(0,255,0);
  Engine.update(engine);

 
 
  
 
 
  bobObj1.display();
    drawSprites();
 
}



