var gameState = 0;
var prince,princeImg;
var zombieImg;
var monsterImg;
var finishLine;
var trials = 0;
var hearts = [];
var heartImg;

function preload() {
  princeImg = loadImage("Prince1.png");
  zombieImg = loadImage("Zombie.png");
  monsterImg = loadImage("Monster.png");
  mazeImg = loadImage("Maze.png");
  heartImg = loadImage("Heart.png");

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

  monsterGroup = createGroup();
  zombieGroup = createGroup();
  monstersGroup = createGroup();
  zombiesGroup = createGroup();

var x = 30;

  for(var i=0; i<3; i++){
    hearts[i] = createSprite(x,20,10,10);
    hearts[i].addImage(heartImg);
    x = x+20;
    hearts[i].scale = 0.03;
  }
}

function draw() {
  background(0);
  console.log(getFrameRate());

  edges = createEdgeSprites();

  if(prince.collide(edges[0]) || prince.collide(edges[1]) || prince.collide(edges[2]) || prince.collide(edges[3])){
    prince.x = 660;
    prince.y = 15;
  }

  if(prince.x > 57 && prince.x <215 && prince.y>59 && prince.y<67){
    prince.x = 660;
    prince.y = 15;
  }

  if(prince.x > 271 && prince.x <569 && prince.y>59 && prince.y<67){
    prince.x = 660;
    prince.y = 15;
  }

  if(prince.x > 683 && prince.x < 755 && prince.y>59 && prince.y<66){
    prince.x = 660;
    prince.y = 15;
  }

  if(prince.x > 109 && prince.x <164 && prince.y>114 && prince.y<123){
    prince.x = 660;
    prince.y = 15;
  }

  if(prince.x > 326 && prince.x <517 && prince.y>114 && prince.y<122){
    prince.x = 660;
    prince.y = 15;
  }

  if(prince.x > 323 && prince.x <572 && prince.y>172 && prince.y<179){
    prince.x = 660;
    prince.y = 15;
  }

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
    textSize(15);
    text("(REMINDER: IF YOU TOUCH THE WALLS, YOU WILL GO BACK TO WHERE YOU STARTED.)",100,588);
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

    if(prince.isTouching(zombieGroup)){
      hearts.pop(trials);
      trials++;
    }

    if(trials>3){
      gameState = 7;
    }
    //camera.x = prince.x;
   // camera.y = prince.y;

    zombieGroup.bounceOff(edges[0]);
    zombieGroup.bounceOff(edges[2]);
    zombieGroup.bounceOff(edges[3]);
    zombieGroup.bounceOff(edges[1]);

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
    textSize(15);
    text("(REMINDER: IF YOU TOUCH THE WALLS, YOU WILL GO BACK TO WHERE YOU STARTED.)",100,588);
    fill("white");
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

      if(prince.isTouching(zombieGroup) || prince.isTouching(monsterGroup)){
        hearts.pop(trials);
        trials++;
      }
  
      if(trials>3){
        gameState = 7;
      }

    monsterGroup.bounceOff(edges[0]);
    monsterGroup.bounceOff(edges[2]);
    monsterGroup.bounceOff(edges[3]);
    monsterGroup.bounceOff(edges[1]);

    zombieGroup.bounceOff(edges[0]);
    zombieGroup.bounceOff(edges[2]);
    zombieGroup.bounceOff(edges[3]);
    zombieGroup.bounceOff(edges[1]);

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
    fill("white");
    textSize(15);
    text("(REMINDER: IF YOU TOUCH THE WALLS, YOU WILL GO BACK TO WHERE YOU STARTED.)",100,588);
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

      if(prince.isTouching(zombiesGroup) || prince.isTouching(monstersGroup)){
        hearts.pop(trials);
        trials++;
      }
  
      if(trials>3){
        gameState = 7;
      }

      monstersGroup.bounceOff(edges[0]);
      monstersGroup.bounceOff(edges[2]);
      monstersGroup.bounceOff(edges[3]);
      monstersGroup.bounceOff(edges[1]);

      zombiesGroup.bounceOff(edges[0]);
      zombiesGroup.bounceOff(edges[2]);
      zombiesGroup.bounceOff(edges[3]);
      zombiesGroup.bounceOff(edges[1]);


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

    if(keyIsDown()){
      gameState = 0;
    }
    break;

    case 7:
      background(0);
      textSize(40);
      fill("purple");
      text("You Lost All Of Your Lives! Press r to restart.", 20,406);

      if(keyIsDown(82)){
        gameState = 0;
        trials = 0;
      }
      break;
    
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

    zombieGroup.add(zombie);
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

    monsterGroup.add(monster);
  }
}

function spawnInfiniteZombies() {
  if(frameCount %50 === 0){
    edges = createEdgeSprites();
    var zombies = createSprite(random(4,764),random(50,780),10,10);

    zombies.addImage(zombieImg);
    zombies.velocityX = random(-2,2);
    zombies.velocityY = random(-2,2);
    zombies.scale = 0.06;
  //  zombies.lifetime = 250;
  zombiesGroup.add(zombies);
  }
}

function spawnInfiniteMonsters() {
  if(frameCount %50 === 0){
    edges = createEdgeSprites();
    var monsters = createSprite(random(4,764),random(50,780),10,10);

    monsters.addImage(monsterImg);
    monsters.velocityX = random(-2,2);
    monsters.velocityY = random(-2,2);
    monsters.scale = 0.06;
   // monsters.lifetime = 250;
   monstersGroup.add(monsters);
  }
}