var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30)
}

function draw() 
{
  background("black");

  if(keyIsDown(RIGHT_ARROW)){
    box.velocityX= 4;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.velocityX= 4;
  }
  if(keyIsDown(UP_ARROW)){
    box.velocityY= -4;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.velocityY= 4;
  }
   
  drawSprites()

}




