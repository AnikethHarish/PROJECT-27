class Chain {
 constructor(bob1,bob5){
    var options={
        bodyA:roofObject,
        bodyB:bob1,
        stiffness:0.03,
        length:5.0
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      
    }
             
        }
    

