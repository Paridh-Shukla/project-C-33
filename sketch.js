var ground, groundImg
var snow, snowImg

function preload(){
groundImg=loadImage("snow1.jpg");
snowImg=loadImage("snow5.webp");

}

function setup() {
  createCanvas(800,400);
  //ground=createSprite(800,400);
  //ground.addImage(groundImg)
}

function draw() {
  background(groundImg);  
  
  if(frameCount %30===0){
  snowFall();
  }  

  drawSprites();
}

function snowFall(){
  snow=createSprite(random(10,600),50,50);
  snow.addImage(snowImg);
  snow.velocityY= 5;
  snow.scale=0.1;

}