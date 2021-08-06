var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var gameOverImg;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
 gameOverImg = loadImage("gameOver.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(width/2,height-2,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
 
gameOver = createSprite(width/2,height/2);
gameOver.addImage(gameOverImg); 
gameOver.scale = 1;
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
  



boy.setCollider("circle",0,0,350);
boy.debug = true
}

function draw() {

 background(0); 
  
  
  console.log("this is ",gameState)
   //code to reset the background
  if(path.y >height ){
    path.y = height/2;
  }
  if(gameState===PLAY){
  
  gameOver.visible = false;
  path.velocityY = 4;
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
        createCash();
        createDiamonds();
        createJwellery();
        createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
    treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
    treasureCollection=treasureCollection+150;
    }if(swordGroup.isTouching(boy)){
        gameState = END;
  }}
   
    
 
else if(gameState===END){
gameOver.visible = true;
console.log("hey") 
path.velocityY = 0;


swordGroup.setLifetimeEach(-1);
cashG.setLifetimeEach(-1);
diamondsG.setLifetimeEach(-1);
jwelleryG.setLifetimeEach(-1);
  
swordGroup.setVelocityYEach(0);
cashG.setVelocityYEach(0);
diamondsG.setVelocityYEach(0);
jwelleryG.setVelocityYEach(0);


}
  

drawSprites();

  textSize(20);
fill(255);
text("Treasure: "+ treasureCollection,width/2+width/4,30); 
  

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40,10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}