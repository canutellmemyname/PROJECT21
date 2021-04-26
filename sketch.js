var canvas,redBox, orangeBox, greenBox,blueBox, ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    redBox = createSprite(700, 590, 200, 20);
    redBox.shapeColor = "red";
    orangeBox = createSprite(500,590,200,20);
    orangeBox.shapeColor = "orange";
    greenBox = createSprite(300,590,200,20);
    greenBox.shapeColor = "green";
    blueBox = createSprite(100,590,200,20);
    blueBox.shapeColor = "blue";
    ball = createSprite(400, 300, 20,20);
    ball.shapeColor = "black";
    //create box sprite and give velocity
    ball.velocityY= 9;
    ball.velocityX = 5;

}

function draw() {

    background(rgb(169,169,169));
    edges= createEdgeSprites();
    ball.bounceOff(edges);
    text(mouseX + "," + mouseY, 10,45);
    //create edgeSprite
 
   
    
   
  
   
   
    if(redBox.isTouching(ball)&& ball.bounceOff(redBox)){
        ball.shapeColor = "red" ;
        music.play();
    }
    if(orangeBox.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    if(blueBox.isTouching(ball)&& ball.bounceOff(blueBox)){
        ball.shapeColor = "blue" ;
        music.play();
    }
    if(greenBox.isTouching(ball)&& ball.bounceOff(greenBox)){
        ball.shapeColor = "green" ;
        music.play();
    }

    //add condition to check if box touching surface and make it box
    drawSprites();
}
