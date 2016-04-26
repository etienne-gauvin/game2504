class Player extends GameObject {
	
	constructor() {
		
		super()
		
		
		this.displayObject = new PIXI.Sprite.fromImage('assets/test.png')
		
		this.body = Matter.Bodies.circle( this.x, this.y, 32 )
		
		this.composite = Matter.Composite.create( { bodies: [ this.body ] } )
		
	}
	
}