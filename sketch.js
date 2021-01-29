

var player,track,ground,enemy,enemy2
var trackImage,groundImage,playerImage
var distance=0

var score=0
var enemyImage,enemyImage1
var PLAY=1
var END=0
var gameState=PLAY
var restart
var title1,title2,title3

//gameState="end"
function preload(){
trackImage=loadImage("track.jpg")
restartImage=loadImage("restart.png")
playerImage=loadImage("car3.png")
enemyImage=loadImage("car2.png")
enemyImage1=loadImage("car4.png")
obstacleImage=loadImage("BLOCK.JPG")
}

function setup(){
createCanvas(displayWidth-10,displayHeight-20)
player=createSprite(590,350,30,30)
player.addImage(playerImage)
player.debug=true
enemy=createSprite(370,300,30,30)
enemy.shapeColor="red"
enemy.scale=1.3
enemy.debug=true
enemy.addImage(enemyImage)
enemy2=createSprite(800,390,30,30)
enemy2.addImage(enemyImage1)
enemy2.scale=1.3
enemy2.debug=true

//restart=createSprite(displayWidth/2,displayHeight-500)
//restart.addImage(restartImage)
//restart.scale=0.5
//restart.visible=false

//title1group=new Group()
console.log(displayHeight)
console.log(displayWidth)
}

function draw(){
background("white")
//image(trackImage,0,-displayHeight*50,displayWidth,displayHeight*51)
if(gameState===PLAY){
   
image(trackImage,0,-displayHeight*50,displayWidth,displayHeight*51)
    

    if(keyDown(LEFT_ARROW)){
        score=score+1
    player.x=player.x-5
    //player.velocityY=0
    }
   if(keyDown(RIGHT_ARROW)){
    player.x=player.x+8
    
 }
        if(keyDown(UP_ARROW)){
     distance=distance+20
     score=score+1
     console.log(camera.position.x)
console.log(camera.position.y)

    player.y=displayHeight-(distance)
    camera.position.x=displayWidth/2
camera.position.y=player.y
    enemy.velocityY=-10
    enemy2.velocityY=-10
        }
    //  setInterval(obstacles,90);
obstacles()
if(player.isTouching(enemy) || player.isTouching(enemy2)     ){
//reset()
gameState=END
console.log(camera.position.x)
console.log(camera.position.y)

 

//
}

}         

if (gameState===END){
    
    //player.velocityY=0;
    //enemy.velocityY=0;
    //enemy2.velocityY=0;
enemy.visible=false
     enemy2.visible=false
     player.visible=false

    //textSize(30)    //textSize(30)

//reset()
//restart.visible=true
if(!restart){
 restart=createButton('Restart')
restart.position(camera.position.x,displayHeight/2-300)
}
//background("white")
if(!title1){
title1=createElement('h1')
title1.html('Game ended')
title1.position(displayWidth/2,displayHeight/2-100)
}
//title1group.add(title1)
if(!title2){
title2=createElement('h1')
title2.html('please restart')
title2.position(displayWidth/2,displayHeight/2-50)
}
//title2group.add(title1)
if(!title3){
 title3=createElement('h1')
title3.html('please click on restart to play again')
title3.position(displayWidth/2,displayHeight/2)
}
//title3group.add(title1)




            
restart.mousePressed(function(){
   
     //clear()
     restart.remove()

     title1.remove();
     title2.remove();
     title3.remove()
    // trackImage.remove()
     player.destroy()
     enemy.destroy()
     enemy2.destroy()
     //enemy.visible=true
     //enemy2.visible=true
     //player.visible=true
    // trackImage.reset()
     reset1()
 });       
}




drawSprites();

fill("black")
textSize(20)
text("Score:"+score,camera.position.x+300,camera.position.y-300)
}


 function obstacles(){
    
if(frameCount%100===0){
        var obstacle=createSprite(400,300,60,60)
           //obstacle.addImage(obstacleImage)
           obstacle.x=Math.round(random(500,1000))
           obstacle.y=Math.round(random(768,39168))
           obstacle.shapeColor="red"
           obstacle.scale=2
           console.log("hello")
}



}

function reset1(){
   // displayHeight=768
  //trackImage=loadImage("track.jpg")
  
     gameState=PLAY
     

 
player=createSprite(590,350,30,30)
player.addImage(playerImage)
player.debug=true
enemy=createSprite(370,300,30,30)
enemy.shapeColor="red"
enemy.scale=1.3
enemy.debug=true
enemy.addImage(enemyImage)
enemy2=createSprite(800,390,30,30)
enemy2.addImage(enemyImage1)
enemy2.scale=1.3
enemy2.debug=true
enemy.velocityY=-10
 enemy2.velocityY=-10
  player.visible=true
  enemy.visible=true
  enemy2.visible=true 
    score=0
     console.log("hi")
 
}



