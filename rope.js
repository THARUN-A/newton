class Rope{
	constructor(body1,body2,pointA,pointB)
	
	{
		this.pointA=pointA
		this.pointB=pointB

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB}
		}
        
		this.rope=Constraint.create(options)
		World.add(world,this.rope,)

		
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//CHOOSE THE CORRECT OPTION TO RENDER A LINE BETWEEN THE TWO BODIES

		// line(pointA.x, pointA.y, pointB.y);
		line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
		// line(pointA.x, pointA.y, pointB.x + this.offsetX);
		// line(pointA.x, pointA.y + this.offsetX,, pointB.x, pointB.y);
	}

}