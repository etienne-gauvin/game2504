class Player extends GameObject {
	
	constructor() {
		
		super()
		
		this.dobj = new PIXI.Sprite.fromImage('assets/test.png')
		
		this.position.x = 300
		this.position.y = 10
		
		this.body = Matter.Bodies.circle(
			this.position.x,
			this.position.y,
			32
		)
		
		this.composite = Matter.Composite.create( { bodies: [ this.body ] } )
		
		GAME.gamepads.addButtonListener( 0, GAME.BUTTONS.UP, ( button ) => {
			
			if ( button.pressed ) {
				
				this.jump()
				
			}
			
		} )
		
	}
	
	
	update( dt ) {
		
		this.dobj.position = this.body.position
		
	}
	
	jump() {
		console.log('jump')
		
		Matter.Body.applyForce(
			this.body,
			{ x: this.body.position.x, y: this.body.position.y },
			{ x: 0, y: -0.1 }
		)
	}
}