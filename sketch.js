const Engine=Matter.Engine; 
const World=Matter.World;
const Bodies=Matter.Bodies;
const body=Matter.body;


var fairyBody,starBody,starImage,fairyImage,fairyVoice;
var fairy,star,bg;

function preload(){
  //preload the images here
  fairyImage=loadAnimation("images/fairy1.png","images/fairy2.png");
  starImage=loadImage("images/star.png");
  bg=loadImage("images/starnight.png");
  fairyVoice=loadSound("sound/joyMusic.mp3");
 
}

function setup() {
  createCanvas(800, 750);

  //fairyVoice.play();
 
  fairy=createSprite(330,450);
  fairy.addAnimation("flying",fairyImage);
  fairy.scale=0.2;


  star=createSprite(650,30);
  star.addImage(starImage);
  star.scale=0.2;
  
  engine=Engine.create();
  world=engine.world;

  var star_options={
  resitution:0.5,
  isStatic:true
  }

  starBody=Bodies.circle(650,30,20,star_options);
  World.add(world,starBody);

  Engine.run(engine);


}

function draw() {
  background(bg);
  
  star.x=starBody.position.x;
  star.y=starBody.position.y;

  if(starBody.position.y>400){
    Matter.Body.setStatic(starBody,true);
  }
  drawSprites();
}

function keyPressed(){

  if(keyCode===RIGHT_ARROW){
    fairy.x=fairy.x+20;
  }

  if(keyCode===LEFT_ARROW){
    fairy.x=fairy.x-20;
  }

  if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(starBody,false); 
	}
}

