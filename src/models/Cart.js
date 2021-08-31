class Cart {
    //common logic
    constructor(id ) {
        this.id = id
        this.items = []       
    }
    
    toPOJO() {
       
         return{
            id : this.id,
            items:this.items
        }
       
    }
    toJson(){
        return JSON.stringify(this.toPOJO())
    }
    
    //cart specific logic
    add( item ){
        let newCart = new Cart(this.id)
        newCart.items = this.items.concat([item])
        return newCart
    }
    
    getCount(){
        return this.items.length
    }

}
export default Cart;