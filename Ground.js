class Ground extends GameObject {
	
	constructor() {
		
		super()
		
		this.size = new PIXI.Point(700, 30)
		
		this.dobj = new PIXI.Graphics
		
		this.dobj.position.x = 50
		this.dobj.position.y = 500
		
		this.dobj.beginFill( 0x6F0000 )
		this.dobj.lineStyle( 2, 0xFF0000 )
		this.dobj.drawRect( 0, 0, this.size.x, this.size.y )
		
		
		this.body = Matter.Bodies.rectangle(
			this.position.x,
			this.position.y,
			this.size.x,
			this.size.y,
			{ isStatic: true }
		)
		
		this.composite = Matter.Composite.create( { bodies: [ this.body ] } )
		
	}
	
}