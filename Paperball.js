class Paperball{
    constructor(x, y, radius){
        var options={
           
            'stiffness':0.4,
            'density':0.9,
            //'friction':0.5,
            'restitution':0.8,
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world, this.body);
    }

    display(){
       var pos = this.body.position;

        push();
        ellipseMode(RADIUS);
        strokeWeight(7);
        stroke("purple");
        fill("yellow");
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}