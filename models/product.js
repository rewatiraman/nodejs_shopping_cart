const Products = []

module.exports = class Product {
    constructor(t){
        this.title = t
    }
    save (){
        Products.push(this)
    }
    static fetchAll(){
        return Products
    }
}