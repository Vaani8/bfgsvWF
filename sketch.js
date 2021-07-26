var bfly;
var lives=2;
var gamestate ="serve"
function preload(){
  bricks=loadImage("bricks.png");
  bf=loadImage("butturfly.png");
  fin=loadImage("finish.png");
  spid=loadImage("spider.png");
  st=loadImage("start.png");
  walls=loadImage("walls.png");
}
function setup(){
var start=createSprite(360,373,25,15);
start.addImage("st");
start.scale=0.5;

var block=createSprite(0,340,1,80);

var finish=createSprite(30,373,25,15);
finish.addImage("fin");
finish.scale=0.5;

var invisibleBrick1=createSprite(105,120,170,10);
invisibleBrick1.shapeColor="white";

var invisibleBrick2=createSprite(105,270,170,10);
invisibleBrick2.shapeColor="white";

var rightEdgedWall = createSprite(390, 150, 20, 320);
rightEdgedWall.addImage("walls");
rightEdgedWall.width=20;
rightEdgedWall.height=320;

var leftEdgedWall = createSprite(10, 150, 20, 320);
leftEdgedWall.addImage("walls");
leftEdgedWall.width=20;
leftEdgedWall.height=320;

var topEdgedWall = createSprite(200, 10, 360, 20);
topEdgedWall.addImage("walls");
topEdgedWall.width=360;
topEdgedWall.height=20;

var bottomEdgedWall = createSprite(200, 390, 400, 20);
bottomEdgedWall.addImage("walls");
bottomEdgedWall.width=400;
bottomEdgedWall.height=20;

var middleWall=createSprite(200,260,20,320);
middleWall.addImage("walls");
middleWall.width=20;
middleWall.height=320;

bfly = createSprite(360, 345, 20, 20);
bfly.shapeColor="orange";
bfly.addImage("butterfly");
bfly.scale=0.14;

var brick1=createSprite(330,140,90,20);
brick1.addImage("bricks");
brick1.width=90;
brick1.height=20;
brick1.velocity.x =-2;

var brick2=createSprite(260,230,90,20);
brick2.addImage("bricks");
brick2.width=90;
brick2.height=20;
brick2.velocity.x =2;

var spider=createSprite(33,190,25,25);
spider.shapeColor="black";
spider.addImage("spider");
spider.scale=0.13;
spider.velocity.y=3.5;
spider.velocity.x=3.5;

function draw() {
    background("white");

  bfly.velocityX=0;
  bfly.velocityY=0;
  text("Lives : " + lives,50,50);

  brick1.bounceOff(middleWall);
  brick1.bounceOff(rightEdgedWall);
  
  brick2.bounceOff(middleWall);
  brick2.bounceOff(rightEdgedWall);
  
  spider.bounceOff(invisibleBrick1);
  spider.bounceOff(invisibleBrick2);
  spider.bounceOff(leftEdgedWall);
  spider.bounceOff(middleWall);
  
  bfly.bounceOff(rightEdgedWall);
  bfly.bounceOff(leftEdgedWall);
  bfly.bounceOff(bottomEdgedWall);
  bfly.bounceOff(topEdgedWall);
 // bfly.bounceOff(middleWall);
  
  if(keyDown(UP_ARROW)){
    bfly.velocityX=0;
    bfly.velocityY=-3;
  }
  if(keyDown(DOWN_ARROW)){
    bfly.velocityX=0;
    bfly.velocityY=3;
  }
  if(keyDown(LEFT_ARROW)){
    bfly.velocityX=-3;
    bfly.velocityY=0;
  }
  if(keyDown(RIGHT_ARROW)){
    bfly.velocityX=3;
    bfly.velocityY=0;
  }
  if(bfly.isTouching(brick2)){
    lives=lives-1;
    lifeover();
  }
 
  if(bfly.isTouching(brick1)){
    lives=lives-1;
   lifeover()
  }
  if(bfly.isTouching(spider)){
    lives=lives-1;
    lifeover()
  }
  if(bfly.isTouching(block)){
  var youwin=createSprite(200,200);
  youwin.setAnimation("yw");
  youwin.scale=1.2;
  bfly.destroy();
   brick1.destroy();
   brick2.destroy();
   spider.destroy();
   start.destroy();
   finish.destroy();
   rightEdgedWall.destroy();
   leftEdgedWall.destroy();
   topEdgedWall.destroy();
   bottomEdgedWall.destroy();
   middleWall.destroy();
}

  drawSprites();
}

function lifeover(){
  if(lives>=1) {
     bfly.x=360
  bfly.y=345
  
  }
  else {
    
gameover = createSprite(200,200 );
    gameover.addImage("go1.jpg_1");
    gameover.scale=1.2;
   bfly.destroy();
   brick1.destroy();
   brick2.destroy();
   spider.destroy();
   start.destroy();
   finish.destroy();
   rightEdgedWall.destroy();
   leftEdgedWall.destroy();
   topEdgedWall.destroy();
   bottomEdgedWall.destroy();
   middleWall.destroy();
   
  }

}
}