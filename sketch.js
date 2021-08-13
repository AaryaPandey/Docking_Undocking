var spacecraft, iss;
var spImg1, spImg2, spImg3, spImg4, issImg, bg;
var hasDocked = false;

function preload(){
  spImg1 = loadImage("Docking-undocking/spacecraft1.png");
  spImg2 = loadImage("Docking-undocking/spacecraft2.png");
  spImg3 = loadImage("Docking-undocking/spacecraft3.png");
  spImg4 = loadImage("Docking-undocking/spacecraft4.png");
  issImg = loadImage("Docking-undocking/iss.png");
  bg = loadImage("Docking-undocking/spacebg.jpg");
}

function setup() {
  createCanvas(800,400);

  spacecraft = createSprite(285, 240);
  spacecraft.addImage(spImg1);
  spacecraft.scale = 0.2;

  iss = createSprite(330, 130);
  iss.addImage(issImg);
  iss.scale = 0.5;

}

function draw() {
  background(bg);  

  spacecraft.addImage(spImg1);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1, 1);

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y - 2;
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spImg4);
      spacecraft.x = spacecraft.x - 1;
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spImg3);
      spacecraft.x = spacecraft.x + 1;
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spImg2);
      spacecraft.y = spacecraft.y + 2;
    }

  }

  if(spacecraft.y <= (iss.y + 70) && spacecraft.x <= (iss.x - 10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful!", 200, 300)
  }
  
  drawSprites();
}