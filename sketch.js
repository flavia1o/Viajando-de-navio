var mar;
var marImage;
var navio;
var navioImage;

function preload(){
    marImage = loadImage("sea.png");
    navioImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  }

function setup(){
  createCanvas(400,400);
  mar = createSprite(200, 200, 30, 30);
  mar.addImage("oceano", marImage);
  mar.scale=0.3;
  navio = createSprite(200, 200, 50, 50);
  navio.addAnimation("navio se movendo", navioImage);
  navio.scale= 0.2;

  
  mar.velocityX= -2;

}

function draw() {
  background("blue");

  if(mar.x<-50){
    mar.x= 200;
  }







    drawSprites();

 
}
