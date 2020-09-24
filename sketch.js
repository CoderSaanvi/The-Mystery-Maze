var gameState = 0;
var prince,princeImg;
var zombieImg;
var monsterImg;
var finishLine;

function preload() {
  princeImg = loadImage("Prince1.png");
  zombieImg = loadImage("Zombie.png");
  monsterImg = loadImage("Monster.png");
}
function setup() {
  createCanvas(830, 830);
  maze1 = new Maze();
  prince = createSprite(612,50,20,20);
  prince.addImage(princeImg);
  prince.scale = 0.2;
  finishLine = createSprite(765,578,5,50);
  finishLine.visible = false;
}

function draw() {
  background(0);
  console.log(getFrameRate());

 // frameRate(1000);

  switch(gameState){
    case 0: fill("white");
    textSize(30);
    text("Instructions on how to play this game: ",150,30);
    textSize(14);
    text("This is a maze with many obstacles to face. Your goal is to try to save the princess before time runs out. There are three levels to",10,110);
    text("pass to reach the princess. However, remember that you only have a specific amount of minutes and lives in each level. If you",10,130);
    text("collide into one of the obstacles, you lose. If time runs out, you lose. If you rescue the princess, you win!",10,150);
    text("Use the arrow keys to play.",304,189);
    textSize(9);
    text("(Reminder: You will only be able to see the whole maze for the first five seconds of the game. Then it will zoom onto the prince, and you won't be able to see anything except for the obstacles and the prince.)",5,588);
    fill("blue");
    textSize(40);
    text("Level 1",325,262);
    textSize(30);
    text("Escape the zombies before time runs out! Remember... you",10,320);
    text("only have 2 minutes and 2 lives.",200,360);
    textSize(50);
    text("Press Space to Start",167,708);

    if(keyIsDown(32)){
      gameState = 1;
    }
    break;
    case 1: maze1.display();
    if(prince.collide(finishLine)){
      gameState = 2;
    }

    spawnZombies();

    if(keyIsDown(UP_ARROW)){
      prince.y = prince.y-5;
    }

    if(keyIsDown(DOWN_ARROW)){
      prince.y = prince.y+5;
    }

    if(keyIsDown(LEFT_ARROW)){
      prince.x = prince.x-5;
    }

    if(keyIsDown(RIGHT_ARROW)){
      prince.x = prince.x+5;
    }

    drawSprites();
    break;
    case 2: fill("white");
    textSize(30);
    fill("red");
    text("Level 2",335,262);
    text("Escape the zombies and now monsters before time runs out!",10,320);
    text("Remember... you only have 3 minutes and 3 lives.",10,360);
    
    if(keyDown(32)){
      maze1.display();
      if(keyIsDown(UP_ARROW)){
        prince.y = prince.y-5;
      }
  
      if(keyIsDown(DOWN_ARROW)){
        prince.y = prince.y+5;
      }
  
      if(keyIsDown(LEFT_ARROW)){
        prince.x = prince.x-5;
      }
  
      if(keyIsDown(RIGHT_ARROW)){
        prince.x = prince.x+5;
      }

      spawnZombies();
    }
    if(prince.collide(finishLine)){
      gameState = 3;
    }
    case 3: fill("white");
    textSize(30);
    fill("green");
    text("Level 3",335,262);
    text("Escape the zombies and monsters and don't run into the burning hot walls before time runs out!",10,320);
    text("Remember... you only have 4 minutes and 4 lives. This is the last level!",10,360);
    if(keyDown(32)){
      maze1.display();
    }
    if(prince.collide(finishLine)){
      gameState = 4;
    }
    case 4: fill("white");
    textSize(30);
    text("Congratulations");
  }


  fill(255);
  textSize(15);
  text("x: "+mouseX+ 'y: '+mouseY,10,30);

}

function spawnZombies() {
  if(frameCount %60 === 0){
    var zombie = createSprite(random(4,764),random(50,780),10,10);
    zombie.addImage(zombieImg);
    zombie.velocityX = random(-2,2);
    zombie.velocityY = random(-2,2);
    zombie.scale = 0.06;
    zombie.lifetime = 100;
  }
}

function spawnMonsters() {
  if(frameCount %60 === 0){
    var zombie = createSprite(random(4,764),random(50,780),10,10);
    zombie.addImage(zombieImg);
    zombie.scale = 0.06;
  }
}