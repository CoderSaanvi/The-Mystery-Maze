/*

class Maze {
    constructor(){
        this.hLines = []
        this.vLines = []
    }

    display(){

        var rightVLine1 = createSprite(width-65,303,5,497);
        rightVLine1.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine1);

        var rightVLine2 = createSprite(width-60,690,5,175);
        rightVLine2.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine2);

        var rightVLine3 = createSprite(587,201,5,300);
        rightVLine3.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine3);

        var rightVLine4 = createSprite(530,150,5,100);
        rightVLine4.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine4);

        var rightVLine5 = createSprite(637,225,5,250);
        rightVLine5.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine5);//sssss

        var rightVLine6 = createSprite(700,250,5,300);
        rightVLine6.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine6);

        var rightVLine7 = createSprite(532,375,5,50);
        rightVLine7.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine7);

        var rightVLine8 = createSprite(482,325,5,50);
        rightVLine8.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine8);

        var rightVLine9 = createSprite(550,550,5,100);
        rightVLine9.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine9);

        var rightVLine10 = createSprite(400,575,5,50);
        rightVLine10.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine10);

        var rightVLine11 = createSprite(650,625,5,50);
        rightVLine11.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine11);

        var rightVLine12 = createSprite(600,550,5,100);
        rightVLine12.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine12);

        var rightVLine13 = createSprite(700,475,5,50);
        rightVLine13.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine13);

        var rightVLine14 = createSprite(707,645,5,185);
        rightVLine14.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(rightVLine14);//sssssss

        var leftVLine1 = createSprite(3,height/2,5,723);
        leftVLine1.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine1);

        var leftVLine2 = createSprite(50,175,5,150);
        leftVLine2.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine2);
        
        var leftVLine3 = createSprite(200,200,5,200);
        leftVLine3.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine3);

        var leftVLine4 = createSprite(150,200,5,100);
        leftVLine4.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine4);

        var leftVLine5 = createSprite(100,175,5,50);
        leftVLine5.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine5);

        var leftVLine6 = createSprite(250,275,5,350);
        leftVLine6.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine6);

        var leftVLine7 = createSprite(303,175,5,50);
        leftVLine7.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine7);

        var leftVLine8 = createSprite(52,540,5,385);
        leftVLine8.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine8);

        var leftVLine9 = createSprite(302,328,5,150);
        leftVLine9.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine9);

        var leftVLine10 = createSprite(347,325,5,50);
        leftVLine10.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine10);

        var leftVLine11 = createSprite(200,425,5,50);
        leftVLine11.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine11);

        var leftVLine12 = createSprite(100,500,5,200);
        leftVLine12.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine12);

        var leftVLine13 = createSprite(150,450,5,100);
        leftVLine13.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine13);

        var leftVLine14 = createSprite(300,575,5,150);
        leftVLine14.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine14);

        var leftVLine15 = createSprite(250,575,5,50);
        leftVLine15.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine15);

        var leftVLine16 = createSprite(350,596,5,200);
        leftVLine16.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.vLines.push(leftVLine16);

        var topHLine1 = createSprite(width/3,50,width-205,5);
        topHLine1.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine1);

        var topHLine2 = createSprite(705,50,130,5);
        topHLine2.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine2);

        var topHLine3 = createSprite(100,250,100,5);
        topHLine3.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine3);

        var topHLine4 = createSprite(125,100,150,5);
        topHLine4.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine4);

        var topHLine5 = createSprite(125,150,50,5);
        topHLine5.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine5);

        var topHLine6 = createSprite(100,300,200,5);
        topHLine6.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine6);

        var topHLine7 = createSprite(390,100,280,5);
        topHLine7.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine7);

        var topHLine8 = createSprite(390,150,180,5);
        topHLine8.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine8);

        var topHLine9 = createSprite(416,200,232,5);
        topHLine9.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine9);

        var topHLine10 = createSprite(670,100,70,5);
        topHLine10.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine10);

        var topHLine11 = createSprite(503,400,395,5);
        topHLine11.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine11);

        var topHLine12 = createSprite(150,350,200,5);
        topHLine12.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine12);

        var topHLine13 = createSprite(440,250,282,5);
        topHLine13.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine13);

        var topHLine14 = createSprite(530,300,100,5);
        topHLine14.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine14);

        var topHLine15 = createSprite(415,350,140,5);
        topHLine15.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine15);

        var topHLine16 = createSprite(390,300,92,5);
        topHLine16.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine16);

        var topHLine17 = createSprite(125,402,50,5);
        topHLine17.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(topHLine17);

        var bottomHLine1 = createSprite(width/2-30,height-53,width-55,5);
        bottomHLine1.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine1);

        var bottomHLine2 = createSprite(380,height-96,650,5);
        bottomHLine2.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine2);

        var bottomHLine3 = createSprite(451,450,500,5);
        bottomHLine3.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine3);

        var bottomHLine4 = createSprite(225,500,150,5);
        bottomHLine4.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine4);

        var bottomHLine5 = createSprite(177,650,250,5);
        bottomHLine5.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine5);

        var bottomHLine6 = createSprite(175,600,150,5);
        bottomHLine6.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine6);

        var bottomHLine7 = createSprite(200,550,100,5);
        bottomHLine7.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine7);

        var bottomHLine8 = createSprite(225,693,250,5);
        bottomHLine8.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine8);

        var bottomHLine9 = createSprite(450,498,200,5);
        bottomHLine9.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine9);

        var bottomHLine10 = createSprite(477,600,150,5);
        bottomHLine10.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine10);

        var bottomHLine11 = createSprite(450,550,100,5);
        bottomHLine11.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine11);

        var bottomHLine12 = createSprite(500,647,300,5);
        bottomHLine12.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine12);

        var bottomHLine13 = createSprite(625,600,50,5);
        bottomHLine13.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine13);

        var bottomHLine14 = createSprite(650,500,105,5);
        bottomHLine14.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine14);

        var bottomHLine15 = createSprite(709,550,105,5);
        bottomHLine15.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine15);//sss

        var bottomHLine16 = createSprite(555,693,300,5);
        bottomHLine16.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
        this.hLines.push(bottomHLine16);
    }
}
*/