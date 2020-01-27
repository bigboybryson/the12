function preload(){
  mySound = loadSound('ppe.mp3');
}
function setup(){  
  
    createCanvas(900,400);


  sprite2=createSprite(150,200,0,0);
img=loadImage("e.png")
sprite2.addImage(img);
sprite2.scale=0.5
  time=0
  sprite = createSprite(10, 200,0,0);
img=loadImage("s.png")
sprite.addImage(img);
  group = createGroup();
group.add(sprite);
  score = 0 ;
  pause=0;
  coincollect=4;
  time2=0;
  start=false;
}


    




 function draw() {
 
  if (sprite.x<400) {
    time=time+1;
  } else {
   time=time
  }
  
  
  
      
  
  
  
  frameRate=60
  textSize(50);
  sprite.scale=.50;
  
  
  
    background("blue");
  
  
  if (sprite.x===sprite.x) {
    sprite.y = mouseY;
          sprite.x = sprite.x+coincollect;
    if (keyDown("up")) {
          sprite.y = sprite.y-5;

    }
    if (keyDown("down")) {
          sprite.y = sprite.y+5;

    }
     if (keyDown("space")) {
          sprite.y =200
             coincollect=6;
          
          sprite.x=50
          time=0;
          score=0
           sprite2.x=random(150, 400);
                sprite2.y=random(20, 400);
              }
    
    
    
     if (keyDown("b"))

     {
       pause=pause+1;
          }
           if (pause===2)
          {
            pause=pause-2;
          }
          


   
    
   if (group.isTouching(sprite2)) {
       mySound.play();
     sprite.x=0;
   coincollect=coincollect+.5;
             score = score+1;
 sprite2.x=random(150, 400);
      sprite2.y=random(20, 400);
      }


    fill("yellow");
                
 text('score',192,40 );
fill("red");
                  
text(score,192,82 );
    fill("yellow");
fill("red");

text(time/15,192,350 );
fill("yellow");

text('time',192,300 );

if (pause===1)
{
time=time-1;
          sprite.x = sprite.x-coincollect;
   stroke("black");
   text("paused",150,200 );
      

}
drawSprites();
  
  }
 }








