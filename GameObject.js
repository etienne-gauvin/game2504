
/**
 * @abstract
 */

class GameObject {
	
	constructor() {
		
		// <PIXI.DisplayObject>
		this.dobj = null
		
		// <Matter.Composite>
		this.composite = null
		
	}
	
	/**
	 * Add a child to this this object if his DisplayObject is a Container
	 * 
	 * @param <GameObject> child
	 */
	
	addChild( child ) {
		
		if ( ! this.dobj instanceof PIXI.Container ) {
			
			throw new Error( `${this} isn't a container` )
			
		}
		else {
			
			if ( child.dobj ) {
				
				child.dobj.setParent( this.dobj )
				
			}
			
			if ( child.composite ) {
				
				if ( child.composite.parent ) {
					
					Matter.Composite.remove( child.composite.parent, child.composite )
					
				}
				
				Matter.Composite.add( this.composite, child.composite )
				
			}
			
		}
		
	}
	
	/**
	 * Update the object
	 * 
	 * @param <Number> delta: temps en secondes depuis le dernier affichage
	 */
	update( delta ) {
		
	}
	
	/**
	 * Shortcut for the position
	 * 
	 * @return <PIXI.Point>
	 */
	get position() {
		
		if ( !this.dobj ) {
			
			throw new Error( `${this} has no dobj` )
			
		}
		else {
			
			return this.dobj.position
			
		}
		
	}
	
	/**
	 * Get the object as a string
	 * 
	 * @return <String>
	 */
	toString() {
		
		return this.__proto__.constructor.name
		
	}
	
	/**
	 * Destroy the object
	 */
	destroy( recursive = true ) {
		
		if ( this.dobj != null ) {
			
			this.dobj.destroy()
			
		}
		
		if ( this.composite != null ) {
			
			Matter.Composite.remove( this.composite.parent, this.composite, recursive )
		
		}
	}
	
}