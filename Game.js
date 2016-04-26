( function ( window ) {
	
	class Game {
		
		init() {
			
			this.loader = PIXI.loader
			
			this.assets = {}
			this.textures = {}
			
			this.renderer = PIXI.autoDetectRenderer( 800, 600 )
			
			this.container = document.querySelector( 'main' )
			this.container.appendChild( this.renderer.view )
			
			this.engine = Matter.Engine.create()
			Matter.Engine.run( this.engine )
			
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
			
			var firstCallback = ( loader ) => {
				
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
			
			this.stage = stage
			this.stage.start()
			
		}
		
		/**
		 * @param <Number> time
		 */
		
		update( time ) {
			
			if ( time > 0 ) {
				
				let dt = ( time - this.time ) / 1000
				
				this.stage.update( dt )
				
			    this.renderer.render( this.stage.displayObject )
				
				this.time = time
				
			}
			    
			requestAnimationFrame( this.update.bind( this ) )
			
		}
		
	}
	
	window.GAME = new Game
	console.log(GAME)
	
} ) ( window )