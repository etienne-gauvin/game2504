
/**
 * @abstract
 */

class Stage extends GameObject {
	
	constructor() {
		
		super()
		
		this.dobj = new PIXI.Container
		
		this.composite = GAME.engine.world
		
	}
	
	start() {
		
		console.log(`Starting stage ${this}`)
		
	}
	
	stop() {
		
	}
	
	log() {
		
		super.log( arguments )
		
	}
	
}