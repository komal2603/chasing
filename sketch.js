var bg
function preload() {
    //load the images here
    bg = loadImage("images/garden.png")
    tom1 = loadAnimation("images/cat1.png")
    tom2 = loadAnimation("images/cat2.png","images/cat3.png")
    tom3 = loadAnimation("images/cat4.png")

    jerry1 = loadAnimation("images/mouse1.png")
    jerry2 = loadAnimation("images/mouse1.png","images/mouse3.png")
    jerry3 = loadAnimation("images/mouse1.png")



}

function setup(){
    createCanvas(1200,900);
    //create tom and jerry sprites here
      tom = createSprite(870,600);
      tom.addAnimation("slipping",tom1)
      jerry = createSprite(200,600);
      jerry.addAnimation("standing",jerry1)
      tom.scale = 0.2
      jerry.scale = 0.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX = 0
        tom.addAnimation("last image",tom3);
        tom.scale = 0.2
        tom.x = 300
        
        jerry.velocity = 0
        jerry.addAnimation("previous",jerry3)
        jerry.scale = 0.15
        

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        tom.velocityX = -5
        tom.addAnimation("creating",tom2)
        tom.changeAnimation("creating")

        jerry.addAnimation("teasing",jerry2)
        jerry.changeAnimation("teasing")
        jerry.frameDelay = 25
    }

}
