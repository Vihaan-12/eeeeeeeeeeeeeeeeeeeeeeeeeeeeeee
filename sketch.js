
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var world,boy;
var stoneImg;
var gun;
var bodyA;


function preload(){
	boy=loadImage("images/boy.png");
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	mango2=new mango(950,190,30);

	mango3=new mango(1000,100,30);

	mango4=new mango(1000,150,30);

	mango5=new mango(1100,170,30);

	mango6=new mango(1010,250,30);

	mango7=new mango(1040,190,30);

	mango8=new mango(1200,210,30);

	mango9=new mango(1150,210,30);

	mango10=new mango(1100,210,30);
	
	stoneObj = new stone(250,340,25);

	gun = new shot(stoneObj.body,{x:250, y:340});

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background("grey");
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

stoneObj.display();

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

detectCollision(stoneObj,mango1);

detectCollision(stoneObj,mango2);

detectCollision(stoneObj,mango3);

detectCollision(stoneObj,mango4);

detectCollision(stoneObj,mango5);

detectCollision(stoneObj,mango6);

detectCollision(stoneObj,mango7);

detectCollision(stoneObj,mango8);

detectCollision(stoneObj,mango9);

detectCollision(stoneObj,mango10);

  groundObject.display();

}

function mouseDragged(){

Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){

gun.fly();

}

function detectCollision(lstone, lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=lmango.e + lstone.e){
Matter.Body.setStatic(lmango.body,false);
}
}