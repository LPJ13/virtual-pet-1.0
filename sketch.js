//Create variables here
var dog,dogImage;

function preload()
{
	//load images here
  dogImage = loadImage("images/dogImg.png");

}

function setup() {
	createCanvas(800, 700);
  dog = createSprite(400,400,15,15);
  dog.addImage(dogImage);
  dog.scale=0.3;
}


function draw() {  

  drawSprites();
  //add styles here

}



