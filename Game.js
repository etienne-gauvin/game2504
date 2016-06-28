( function ( window ) {
	
	class Game {
		
		init() {
			
			// <PIXI.Loader>
			this.loader = PIXI.loader
			
			this.assets = {}
			this.textures = {}
			
			this.renderer = PIXI.autoDetectRenderer( 800, 600 )
			
			this.container = document.querySelector( 'main' )
			this.container.appendChild( this.renderer.view )
			
			this.engine = Matter.Engine.create()
			Matter.Engine.run( this.engine )
			
			this.stages = {}
			
			this.gamepads = new GamepadListener
			
			this.AXES = {
				LEFT_X: 0,
				LEFT_Y: 1,
				RIGHT_X: 2,
				RIGHT_Y: 3
			}
				
			this.BUTTONS = {
				A: 0,
				B: 1,
				X: 2,
				Y: 3,
				LB: 4,
				RB: 5,
				LT: 6,
				RT: 7,
				BACK: 8,
				START: 9,
				
				UP: 12,
				DOWN: 13,
				LEFT: 14,
				RIGHT: 15
			}
			
			
			this.update()
		}
		
		
		/**
		 * @param <Object> sources
		 * @param <Function> callback
		 */
		
		load( sources, callback ) {
			
			for ( let name in sources ) {
				
				this.loader.add( name, sources[ name ] )
				
			}
			
			let firstCallback = ( loader ) => {
				
				for ( let name in loader.resources ) {
					
					let resource = loader.resources[ name ]
					
					if ( resource.texture ) {
						
						resource.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
						this.textures[ resource.name ] = resource.texture
						
					}
					
				}
				
				this.resources = loader.resources
				
				callback()
				
			}
			
			this.loader.once( 'complete', firstCallback.bind( this ) )
			
			this.loader.load()
			
		}
		
		
		/**
		 * @param <GAME.Stage> stage
		 */
		
		start( stage ) {
			
			if ( this.stage ) {
				
				this.stage.stop()
				
			}
			
			this.stage = stage
			this.stage.start()
			
		}
		
		/**
		 * @param <Number> time
		 */
		
		update( time ) {
			
			if ( time > 0 ) {
				
				let dt = ( time - this.time ) / 1000
				
				this.gamepads.update()
				
				if ( this.stage != null ) {
					
					this.stage.update( dt )
					
				    this.renderer.render( this.stage.dobj )
				    
				}
				
				this.time = time
				
			}
			    
			requestAnimationFrame( this.update.bind( this ) )
			
		}
		
		/**
		 * Listen to events on a button (on the first Gamepad)
		 */
		addButtonPressedListener( id, callback ) {
			
			if ( !this.buttonsListeners[ id ] ) {
				
				this.buttonsListeners[ id ] = []
				
			}
			
			this.buttonPressedListeners[ id ].push( callback )
			
		}
		
	}
	
	window.GAME = new Game
	
} ) ( window )