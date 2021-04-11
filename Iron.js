class Iron{
	constructor(x, y) {
        var options = {
          'density':30,
          'friction': 3,
          'restitution':0.8
        }
	// assign options to the iron ball
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 80;
    this.height = 50;
    World.add(world, this.body);

	};
	display()
	{
            var ironpos=this.body.position;
            var angle=this.body.angle;		
            push();
            translate(ironpos.x, ironpos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("brown");
            rect(0,0,this.width,this.height);

			pop();
	}

}