// class Drop{
//     constructor(x,y){
       
//         this.x = x;
//         this.y = y;
//         this.r = 20
     
//     }
    
   
//     update(){
//         if(this.y>800){
//             this.y=0;
//         }
//     }
//     display(){
//       var  options={
//             friction : 0.1,
//             isStatic : false,
//             } 
//         fill("lightblue");
//         ellipseMode(CENTER);
//         ellipse(this.x,this.y,20,options);
//     }
// }
class Drop {
    constructor(x, y, radius) {
        var  options={
            friction : 0.3,
            isStatic : false,
            } 
            
        this.body = Bodies.circle(x, y, radius / 2, options);
        this.radius = radius / 2;
        
        World.add(world, this.body);
    }
    update(){
        if(this.body.position.y>600){
            Body.setPosition(this.body, { x: this.body.position.x, y: 0 });
        }
    }
    display() {
        var pos = this.body.position;
        push();
       //translate(this.body.position.x, this.body.position.y);
        fill("lightblue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y, this.radius);
       
        pop();
    }
}