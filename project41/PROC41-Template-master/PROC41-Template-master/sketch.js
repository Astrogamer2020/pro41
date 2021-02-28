const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var maxDrops=100;
var drops=[];
function preload(){
    
}

function setup(){
   createCanvas(1000,1000)
 
   engine = Engine.create();
   world = engine.world;

    umbrella1=new Umbrella(500,560,300,550);
   
    for (var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,1000),random(0,400),30))
    }
}

function draw(){
    background("black");
    Engine.update(engine);
    umbrella1.display();
    
    for (var i=0; i<maxDrops; i++){
        drops[i].update();
        drops[i].display();
    }

    drawSprites();
}   

