class shot{
	constructor(bodyA, pointB)
	{
		var options={
			bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length :10
			}
        this.pointB = pointB
		this.shot = Constraint.create(options);
		World.add(world, this.shot);
	}

    fly (){
        this.shot.bodyA = null;
    }

	display()
	{
 }
}