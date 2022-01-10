var asteroid1, asteroid2, asteroid4;
var bg, rocket, blast;
var bg_img, rocket_img, asteroid1_img, asteroid2_img, blast_img ;
function preload(){
bg_img = loadImage("starrybg.png");
blast_img = loadImage("blast image.png");

asteroid2_img = loadImage("asteroid2.png");
asteroid1_img = loadImage("asteroid2.png");


rocket_img = loadImage("rocket1.jpg");
}
function setup(){
  createCanvas(800,800);
  rocket = createSprite(100,100,60,60);
  rocket.addImage(rocket_img);
  rocket.scale = 0.2;

  asteroid1 = createSprite(300,200,80,80);
  asteroid1.addImage(asteroid1_img);
  asteroid1.scale = 0.1;
  
  
    asteroid2 = createSprite(200, 80, 20,20);
  asteroid2.addImage(asteroid2_img);
  asteroid2.scale = 0.1;

  bg = createSprite(0,800,800,1000);
  bg.addImage(bg_img);
  bg.velocityX = -4;
  }

   
function draw(){
  background(bg_img);
  
  
 rocket.x = mouseX;
rocket.y = mouseY;
drawSprites();
}

function blast(){
  if(rocket.isTouching(asteroid1)&& rocket.isTouching(asteroid2)){
    blast = createSprite(271,80,25,25);
  blast.addImage( blast_img);
  blast.scale = 0.1;

  }
}