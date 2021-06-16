class stone{
	constructor(x,y,e)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :1,
            density : 1.2
			}
		this.x=x;
		this.y=y;
		this.e=e;
		this.image=loadImage("images/stone.png")
		this.body=Bodies.circle(this.x, this.y, this.e, options)
		World.add(world, this.body);
	}

	display()
	{
		push()
		translate(this.body.position.x, this.body.position.y);
		imageMode(CENTER);
		image(this.image, 10,10,this.e)
		pop()
 }
}