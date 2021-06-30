
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var arav, gun, theif, diamond, ground, bullet;
var ai, gi, ti, di, gi, bi, bgi;


function preload()
{
	bgi = loadImage("purple background.jpeg");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	arav = new Arav();
	//gun = new Gun();
	theif = new Theif();
	diamond = new Diamond();
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(bgi);
  
  drawSprites();

  arav.display()
  //gun.display()
  theif.display()
  diamond.display()

  if(keyIsDown(RIGHT_ARROW)){
	bullet = new Bullet(1, 690);
	bullet.display()
   }else if(keyIsDown(LEFT_ARROW)){
	bullet = new Bullet(0, 690);
	bullet.display()
   }
   

  //console.log(mouseX);
  //console.log(mouseY);


 
}



