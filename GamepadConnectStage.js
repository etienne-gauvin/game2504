class GamepadConnectStage extends Stage {
	
	constructor() {
		
		super()
		
	}
	
	start() {
		
		super.start()
		
		window.addEventListener('gamepadconnected', this.onGamepadConnected)
		window.addEventListener('gamepaddisconnected', this.onGamepadDisconnected)
		
		this.text = new GameObject
		this.text.dobj = new PIXI.Text(
			'Please connect a gamepad, or press a button...',
			{
				font: '24px sans-serif',
				fill : 0xffffff,
				align : 'center'
			}
		)
		
		this.addChild( this.text )
		
		
	}
	
	stop() {
		
		window.removeEventListener('gamepadconnected', this.onGamepadConnected)
		
		this.text.destroy()
		
	}
	
	onGamepadConnected( event ) {
		
		let gp = navigator.getGamepads()[ event.gamepad.index ]
		console.log(`Gamepad connected at index ${gp.index}: ${gp.id}. ${gp.buttons.length} buttons, ${gp.axes.length} axes.`)
		
	}
	
	onGamepadDisconnected( event ) {
		
		GAME.log(event)
		
	}
	
	/**
	 * @param <Number> delta
	 */
	
	update( delta ) {
		
		let gamepads = navigator.getGamepads()
		
		if ( gamepads && gamepads[0] && gamepads[0].connected ) {
			
			GAME.start( GAME.stages.play )
			
		}
	}
	
}