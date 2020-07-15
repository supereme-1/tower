class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyB = null;
    }

    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        strokeWeight(4);
        line(posA.x,posA.y,posB.x,posB.y);
    }
    
}