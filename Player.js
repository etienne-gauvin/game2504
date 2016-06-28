class Player extends GameObject {
	
	constructor() {
		
		super()
		
		this.dobj = new PIXI.Sprite.fromImage('assets/test.png')
		
		this.body = Matter.Bodies.circle(
			this.position.x,
			this.position.y,
			32
		)
		
		this.composite = Matter.Composite.create( { bodies: [ this.body ] } )
		
		
		this.prevButtonState = GAME.get
		
	}
	
	
	update( dt ) {
		
		this.dobj.position = this.body.position
		
		let gamepad = GAME.gamepads[0] 
		
		if ( gamepad ) {
			
			if ( !this.prevButtonState && gamepad.buttons[0].pressed ) {
				
				console.log('BAM')
				Matter.Body.applyForce(
					this.body,
					this.body.position,
					{ x: 0, y: -0.1 }
				)
				
			}
			
			this.prevButtonState = gamepad.buttons[0].pressed
			
		}
		
	}
}