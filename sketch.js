const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonimage 
var score = 0
function preload(){
  polygonimage=loadImage("baseball.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    ground1=new Ground(390,250,300,10);
    block1 = new Box(310,235,30,40);
    block2 = new Box(350,235,30,40);
    block3 = new Box(390,235,30,40);
    block4 = new Box(430,235,30,40);
    block5 = new Box(470,235,30,40);

    block6 = new Box(340,195,30,40);
    block7 = new Box(380,195,30,40);
    block8 = new Box(420,195,30,40);
    block9 = new Box(460,195,30,40);

    block10 = new Box(370,155,30,40);
    block11 = new Box(410,155,30,40);
    block12 = new Box(450,155,30,40);



  polygon = Bodies.rectangle(200,200,50,50,{restitution:0.8, 'friction':1.0,
  'density':1.0})
  World.add(world,polygon);
  
  chain = new Chain(polygon,{x:200,y:200});

}
function draw() {
  Engine.update(engine);
  background(0); 
  text(mouseX+":"+mouseY,600,100);
imageMode(CENTER)
image(polygonimage,polygon.position.x,polygon.position.y,50,50)
  ground1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  chain.display();
  drawSprites();
}
function mouseDragged (){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
chain.fly();
}

function keyPressed(){
  if(keyCode === 32 ){
     chain.attach(polygon);
  }
}
