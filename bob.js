class bob{
    constructor(x, y,radius) {
        var options = {
            isStatic : false,
            restitution : 1,
            density : 1
        }
    this.body = Bodies.circle(x ,y,radius/2,options);

    this.radius=radius;

    World.add(world,this.body);
    
    }
    
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("pink");
        ellipse(0,0,this.radius);

      pop();
    }

    
    
}
