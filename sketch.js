var gameState = 0;
var prince,princeImg;
var zombieImg;
var monsterImg;
var finishLine;

function preload() {
  princeImg = loadImage("Prince1.png");
  zombieImg = loadImage("Zombie.png");
  monsterImg = loadImage("Monster.png");
  mazeImg = loadImage("Maze.png");
}
function setup() {
  createCanvas(830, 830);
  //maze1 = new Maze();
  //maze2 = new Maze();
  //maze3 = new Maze();
  
  prince = createSprite(660,15,20,20);
  prince.addImage(princeImg);
  prince.scale = 0.2;
  finishLine = createSprite(824,600,5,50);
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
    text("pass to reach the princess. However, remember that you only have a three lives in each level. If you collide into one of the",10,130);
    text("obstacles, you lose, but if you rescue the princess, you win!",10,150);
    text("Use the arrow keys to play.",304,189);
    textSize(9);
    text("(Reminder: You will only be able to see the whole maze for the first five seconds of the game. Then it will zoom onto the prince, and you won't be able to see anything except for the obstacles and the prince.)",5,588);
    fill("blue");
    textSize(40);
    text("Level 1",325,262);
    textSize(35);
    text("Escape the zombies before all of them take over!",20,320);
    //text("only have 3 lives.",270,360);
    textSize(50);
    text("Press Space to Start",167,708);

    prince.x = 400;
    prince.y = 455;
    prince.scale = 1;

    if(keyIsDown(32)){
      gameState = 1;
      prince.x = 660;
      prince.y = 15;
      prince.scale = 0.23;
    }
    break;

    case 1: background(mazeImg);

    spawnZombies();

    if(keyIsDown(UP_ARROW)){
      prince.y = prince.y-4;
    }

    if(keyIsDown(DOWN_ARROW)){
      prince.y = prince.y+4;
    }

    if(keyIsDown(LEFT_ARROW)){
      prince.x = prince.x-4;
    }

    if(keyIsDown(RIGHT_ARROW)){
      prince.x = prince.x+4;
    }

    if(prince.collide(finishLine)){
      gameState = 2;
    }

    break;

    case 2:
    fill("white");
    textSize(30);
    fill("red");
    text("Level 2",335,262);
    text("Escape the zombies and now monsters before all of them take over!",10,320);
   // text("Remember... you only have 3 minutes and 3 lives.",10,360);
   prince.x = 400;
   prince.y = 455;
   prince.scale = 1;

   if(keyIsDown(32)){
     gameState = 3;
     prince.x = 660;
     prince.y = 15;
     prince.scale = 0.23;
   }
    break;

    case 3: background(mazeImg)

      spawnZombies();
      spawnMonsters();

      if(keyIsDown(UP_ARROW)){
        prince.y = prince.y-4;
      }
  
      if(keyIsDown(DOWN_ARROW)){
        prince.y = prince.y+4;
      }
  
      if(keyIsDown(LEFT_ARROW)){
        prince.x = prince.x-4;
      }
  
      if(keyIsDown(RIGHT_ARROW)){
        prince.x = prince.x+4;
      }

    if(prince.collide(finishLine)){
      gameState = 4;
    }

    case 4: fill("white");
    textSize(30);
    fill("green");
    text("Level 3",335,262);
    text("Escape the zombies and monsters and don't run into the burning hot walls before everything becomes a disatser!",10,320);
   // text("Remember... you only have 4 minutes and 4 lives. This is the last level!",10,360);
   prince.x = 400;
   prince.y = 455;
   prince.scale = 1;

   if(keyIsDown(32)){
     gameState = 5;
     prince.x = 660;
     prince.y = 15;
     prince.scale = 0.23;
   }
   break;

    case 5: background(mazeImg);

    spawnZombies();
    spawnMonsters();
      
    if(keyIsDown(UP_ARROW)){
        prince.y = prince.y-4;
      }
  
      if(keyIsDown(DOWN_ARROW)){
        prince.y = prince.y+4;
      }
  
      if(keyIsDown(LEFT_ARROW)){
        prince.x = prince.x-4;
      }
  
      if(keyIsDown(RIGHT_ARROW)){
        prince.x = prince.x+4;
      }

    if(prince.collide(finishLine)){
      gameState = 6;
    }
    break;

    case 6: fill("white");
    textSize(30);
    text("Congratulations!");
  }

  drawSprites();


  fill(255);
  textSize(15);
  text("x: "+mouseX+ 'y: '+mouseY,10,30);

}

function spawnZombies() {
  if(frameCount %40 === 0){
    var zombie = createSprite(random(4,764),random(50,780),10,10);
    zombie.addImage(zombieImg);
    zombie.velocityX = random(-2,2);
    zombie.velocityY = random(-2,2);
    zombie.scale = 0.06;
    zombie.lifetime = 250;
  }
}

function spawnMonsters() {
  if(frameCount %40 === 0){
    var monster = createSprite(random(4,764),random(50,780),10,10);
    monster.addImage(monsterImg);
    monster.velocityX = random(-2,2);
    monster.velocityY = random(-2,2);
    monster.scale = 0.06;
    monster.lifetime = 250;
  }
}