class PlayStage extends Stage {
	
	constructor() {
		
		super()
		
	}
	
	start() {
		
		super.start()
		
		this.player = new Player
		this.addChild( this.player )
		
		this.ground = new Ground
		this.addChild( this.ground )
		
	}
	
	/**
	 * @param <Number> delta
	 */
	
	update( delta ) {
		
		this.player.update( delta )
		
	}
	
}