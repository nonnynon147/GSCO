var car, wall;
var speed, weight;
var car,wall;
var formula;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  formula = 0.5*weight*speed*speed/22500;
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  car.velocityX = speed;
  car.collide(wall);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(formula<100){
    car.shapeColor(0,255,0);
  }
  if(100<formula<180){
    car.shapeColor(230,230,0);
  }
  if(formula>180){
    car.shapeColor(255,0,0);
  }
  display();
}
function display(){
  car.display();
  wall.display();
}
