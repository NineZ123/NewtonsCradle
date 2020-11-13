
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;

var roofObj;

var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObj1 = new bob(660,700,70);
	bobObj2 = new bob(730,700,70);
	bobObj3 = new bob(800,700,70);
	bobObj4 = new bob(870,700,70);
	bobObj5 = new bob(940,700,70);

	roofObj = new Roof(800,300,500,30)

	rope1 = new Rope(bobObj1.body, roofObj.body,-140,0);
	rope2 = new Rope(bobObj2.body, roofObj.body,-70,0);
	rope3 = new Rope(bobObj3.body, roofObj.body,0,0);
	rope4 = new Rope(bobObj4.body, roofObj.body,70,0);
	rope5 = new Rope(bobObj5.body, roofObj.body,140,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

	bobObj1.display();
	bobObj2.display();
	bobObj3.display();
	bobObj4.display();
	bobObj5.display();

	

	roofObj.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-65,y:-45});
	//Matter.Body.setStatic(bobObj1.body, false);

}

}

function drawLine(constraint){
	 bobBodyPosition=constraint.bodyA.position 
	roofBodyPosition=constraint.bodyB.position 
	roofBodyOffset=constraint.pointB;
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x 
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y 
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY); 

}
