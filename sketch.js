//Create variables here
var dog,dogImg,happyDog,foodS,foodStock;
var database;

function preload()
{
  //load images here
  dogImg=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog=createSprite(250,250,20,20);
  dog.addImage("lbl1",dogImg);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }







  drawSprites();
  //add styles here
  fill("yellow");
  text("Food Remaining"+foodStock,350,100);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}