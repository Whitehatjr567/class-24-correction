class Paper{
    constructor(x,y,width){ 
       var options = {
         isStatic : false,
         'restitution' : 0.3,
         'friction' : 0.5,
         'density' : 1.2
        }
    this.body = Bodies.circle(x,y,width,options);
    this.width = width
    
    World.add(world,this.body);
 
     }
 
   display(){
    var pos = this.body.position;
    ellipseMode(CENTER);
    fill("purple");
    ellipse(pos.x,pos.y,this.width);
   }
 
 }