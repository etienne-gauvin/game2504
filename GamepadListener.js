class GamepadListener {
	
	constructor() {
		
		this.previous = {}
		
		this.listeners = []
		
	}
	
	/**
	 * @param <Number> time
	 */
	
	update() {
		
		this.gamepads = navigator.getGamepads()
		
		for ( let listener of this.listeners ) {
			
			let gid = listener.gamepadId
			
			if ( listener.buttonId )
			{
				let bid = listener.buttonId
				
				let prevButton = this.previous[ gid ].buttons[ bid ]
				let currButton = this.gamepads[ gid ].buttons[ bid ]
				
				if ( prevButton.pressed ^ currButton.pressed ) {
					
					listener.callback( currButton )
					
				}
				
				prevButton.pressed = currButton.pressed
				
			}
		}
		
	}
	
	/**
	 * Listen to events on a button (on the first Gamepad)
	 */
	addButtonListener( gid, bid, callback ) {
		
		if ( this.previous[ gid ] == null ) {
			
			this.previous[ gid ] = {
				axes: [],
				buttons: []
			}
			
		}
		
		if ( this.previous[ gid ].buttons[ bid ] == null ) {
			
			this.previous[ gid ].buttons[ bid ] = {
				pressed: this.gamepads[ gid ].buttons[ bid ].pressed,
				value: this.gamepads[ gid ].buttons[ bid ].value
			}
			
		}
		
		this.listeners.push( {
			gamepadId: gid,
			buttonId: bid,
			callback: callback
		} )
		
	}
	
}