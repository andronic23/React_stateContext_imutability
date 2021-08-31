class Product {
    constructor(id, name, imageUrls, description ) {
        this.id = id
        this.name = name
        this.imageUrls = imageUrls
    }
    
    toPOJO() {
       
         return{
            id : this.id,
            name : this.name,
            imageUrls: this.imageUrls
        }
       
    }
    toJson(){
        return JSON.stringify(this.toPOJO())
    }
}
export default Product;