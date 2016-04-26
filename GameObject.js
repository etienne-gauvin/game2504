
/**
 * @abstract
 */

class GameObject {
	
	constructor() {
		
		// <GameObject>
		this.parent = null
		
		// <PIXI.DisplayObject>
		this.displayObject = null
		
		// <Matter.Composite>
		this.composite = null
		
	}
	
	/**
	 * <GameObject> child
	 */
	
	addChild( child ) {
		
		if ( ! child instanceof GameObject ) {
			
			throw new Error( `${child} isn't a GameObject instance` )
			
		}
		else {
			
			if ( child.parent ) {
				
				throw new Error( `${child.toString()} already has a parent ${child.parent}` )
				
			}
			else {
				
				if ( ! this.displayObject instanceof PIXI.Container ) {
					
					throw new Error( `${this} isn't a container` )
					
				}
				else {
					
					child.parent = this
					
					if ( child.displayObject ) {
						
						child.displayObject.setParent( this.displayObject )
						
					}
					
					if ( child.composite ) {
						
						if ( child.composite.parent ) {
							
							Matter.Composite.remove( child.composite.parent, child.composite )
							
						}
						
						Matter.Composite.add( this.composite, child.composite )
						
					}
					
				}
				
			}
			
		}
		
	}
	
	
	update( delta ) {
		
		if ( this.displayObject && this.body ) {
			
			this.copyPosition( this.body )
			
		}
		
	}
	
	
	copyPosition( body ) {
		
		if ( this.displayObject && this.composite ) {
			
			this.displayObject.position.copy( body.position )
			
		}
		
	}
	
	get x() {
		return this.displayObject.position.x
	}
	
	get y() {
		return this.displayObject.position.y
	}
	
	set x( value ) {
		this.displayObject.position.x = value
	}
	
	set y( value ) {
		this.displayObject.position.y = value
	}
	
	
	toString() {
		
		return this.__proto__.constructor.name
		
	}
	
}