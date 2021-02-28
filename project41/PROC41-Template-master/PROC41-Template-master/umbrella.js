// class Umbrella  {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//         this.r = 700

//         this.image=loadImage("images/Walking Frame/walking_1.png");
//     }
    
// display(){
//     imageMode(CENTER);
//     image(this.image,this.x,this.y,this.r);
// }
// }
class Umbrella {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("Walking Frame/walking_1.png");
       
    }

    display() {
        var pos = this.body.position;
        push();
      //  fill("brown");
       // translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
        pop();
    }
}