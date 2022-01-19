var canvas, bgImg; 
var cat, catimg1, catimg2;
var mouse, mouseimg1,mouseimg2;  
var together;
function preload() {
    //load the images here
   bgImg = loadImage("images/garden.png");
   catimg1 = loadAnimation("images/cat1.png");
   catimg2 = loadAnimation("images/cat2.png", "images/cat3.png");
   catimg3 = loadAnimation("images/cat4.png");
   mouseimg1= loadAnimation("images/mouse1.png");
   mouseimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
   mouseimg3 = loadAnimation("images/mouse4.png");
}


function setup(){
    canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("CatSitting", catimg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("MouseWalking", mouseimg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("CatAtLast", catimg3);
    cat.x = 300;
    cat.scale = 0.2;
    cat.changeAnimation("CatAtLast");
    mouse.addAnimation("MouseAtLast", mouseimg3);
    mouse.scale = 0.15;
    mouse.changeAnimation("MouseAtLast");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

    cat.velocityX = -5
    cat.addAnimation("catWalking", catimg2);
    cat.changeAnimation("catWalking");
}

}
