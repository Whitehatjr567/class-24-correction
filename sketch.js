
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust1,dust2,dust3;
var ground1;
var paper1;
var help1;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 1800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  dust1 = new dustbin(1090,620,300,20);
  dust2 = new dustbin(950,380,20,540);
  dust3 = new dustbin(1230,280,20,700);
  paper1 = new Paper(50,580,30);
  ground1 = new Ground(400,630,2000,20);
	help1 = new Helper(1090,40,300,20);
	
	
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  keyPressed();

  drawSprites();
  dust1.display();
  dust2.display();
  dust3.display();
  paper1.display();
  ground1.display();
  help1.display();
}


function keyPressed(){
 if(keyCode === UP_ARROW){

 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:8,y:-5});
 
}


}


