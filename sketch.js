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

  edges = createEdgeSprites();

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
    text("Escape the zombies with limited lives before all",30,320);
    text("your lives are gone!",268,360);
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
    textSize(30);
    fill("red");
    text("Level 2",335,262);
    text("Escape the zombies and now monsters with limited lives",30,320);
    text("without losing all three lives!",230,360);
    textSize(50);
    text("Press Space To Go On To Level 2",40,707);
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
    
break;

    case 4:
    textSize(30);
    fill("green");
    text("Level 3",335,262);
    text("Escape the zombies and monsters with infinite lives now.",10,320);
    text("Reach the princess before everything becomes a disaster!",10,360);
    textSize(50);
    text("Press Space To Go On To Level 3",40,707);
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

    case 5: background(mazeImg)

      spawnInfiniteZombies();
      spawnInfiniteMonsters();

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

    case 6: 
    
    fill("white");
    textSize(30);
    text("Congratulations! You saved the princess!");

    if(keyIsDown(32)){
      gameState = 0;
    }
  }

  drawSprites();


  fill(255);
  textSize(15);
  text("x: "+mouseX+ 'y: '+mouseY,10,30);

}

function spawnZombies() {
  if(frameCount %40 === 0){
    var zombie = createSprite(random(4,764),random(50,780),10,10);

    zombie.bounceOff(edges[0]);
    zombie.bounceOff(edges[2]);
    zombie.bounceOff(edges[3]);
    zombie.bounceOff(edges[1]);

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

    monster.bounceOff(edges[0]);
    monster.bounceOff(edges[2]);
    monster.bounceOff(edges[3]);
    monster.bounceOff(edges[1]);

    monster.addImage(monsterImg);
    monster.velocityX = random(-2,2);
    monster.velocityY = random(-2,2);
    monster.scale = 0.06;
    monster.lifetime = 250;
  }
}

function spawnInfiniteZombies() {
  if(frameCount %50 === 0){
    edges = createEdgeSprites();
    var zombies = createSprite(random(4,764),random(50,780),10,10);

    zombies.bounceOff(edges[0]);
    zombies.bounceOff(edges[2]);
    zombies.bounceOff(edges[3]);
    zombies.bounceOff(edges[1]);

    zombies.addImage(zombieImg);
    zombies.velocityX = random(-2,2);
    zombies.velocityY = random(-2,2);
    zombies.scale = 0.06;
  //  zombies.lifetime = 250;
  }
}

function spawnInfiniteMonsters() {
  if(frameCount %50 === 0){
    edges = createEdgeSprites();
    var monsters = createSprite(random(4,764),random(50,780),10,10);
    
    monsters.bounceOff(edges[0]);
    monsters.bounceOff(edges[2]);
    monsters.bounceOff(edges[3]);
    monsters.bounceOff(edges[1]);

    monsters.addImage(monsterImg);
    monsters.velocityX = random(-2,2);
    monsters.velocityY = random(-2,2);
    monsters.scale = 0.06;
   // monsters.lifetime = 250;
  }
}