const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, ground2;
var stick1, stick2, stick3, stick4, stick5, stick6;
var ball1, ball2;

function preload(){

}

function setup(){
	createCanvas(1270, 575);
	
	engine = Engine.create();
	world = engine.world;

    ground1 = new Ground(700, 450, 1500, 20);
	
	ground3 = new Ground(1257, 230, 15, 1500);
	ground4 = new Ground(515, 4, 1500, 15);
	ground5 = new Ground(5, 230, 15, 1500);
	

	stick1 = new Stick(950, 433,  185, 10);
	stick2 = new Stick(860, 386.5,  10, 105);
	stick3 = new Stick(1045, 386.5,  10, 105);

	ball1 = new Paperball(400, 400, 40);
	
}

function draw(){
	background("violet");
	Engine.update(engine);

	
	fill("maroon");
	textSize(30);
	text("Press SPACE to move the balls", 470, 50);
	ground1.display();
	
	ground3.display();
	ground4.display();
	ground5.display();

	stick1.display();
	stick2.display();
	stick3.display();

	ball1.display();
}

function keyPressed(){
if(keyCode===32){
Matter.Body.applyForce(ball1.body, ball1.body.position, {x:150, y:-45})
}


}













