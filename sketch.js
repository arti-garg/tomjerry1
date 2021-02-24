var tom, jerry;
var tomimg1, tomimg2, tomimg3,bg, mouseimg1, mouseimg2, mouseimg3;

function preload() {
    
bg = loadImage("images/garden.png");

tomimg1= loadAnimation("images/cat1.png");
tomimg2= loadAnimation("images/cat2.png", "images/cat3.png")
tomimg3 = loadAnimation("images/cat4.png")

mouseimg1= loadAnimation("images/mouse1.png");
mouseimg2= loadAnimation("images/mouse2.png", "images/mouse3.png");
mouseimg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

tom = createSprite( 750, 500, 50, 50);
tom.addAnimation ("tomrest", tomimg1);
tom.scale= 0.25;

jerry = createSprite( 200, 500, 50, 50);
jerry.addAnimation("jerryrest", mouseimg1);
jerry.scale=0.2;

// cat.addAnimation (catanim);
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomimg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", mouseimg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if (keyCode=== LEFT_ARROW){
      tom.velocityX=-5;
  tom.addAnimation("tomrun",tomimg2 );
   tom.changeAnimation("tomrun");
  
jerry.addAnimation("jerry1", mouseimg2);
jerry.frameDelay= 1125;
jerry.changeAnimation("jerry1");

}

}
