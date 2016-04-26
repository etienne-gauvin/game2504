class PlayStage extends Stage {
	
	constructor() {
		
		super()
		
		this.displayObject = new PIXI.Container
		
		this.composite = GAME.engine.world
		
	}
	
	start() {
		
		this.player = new Player
		this.addChild( this.player )
		
		this.ground = Matter.Bodies.rectangle( 400, 610, 810, 60, { isStatic: true } )
		Matter.Composite.add( this.composite, this.ground )
		
	}
	
	/**
	 * @param <Number> delta
	 */
	
	update( delta ) {
		
		this.player.update( delta )
		
	}
	
}