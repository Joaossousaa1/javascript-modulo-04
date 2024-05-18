const Product = require("./Product")

class Category {
    constructor (name) {
        this.name = name
        this.listProducts = []
        this.productPrices = []
    }

    addProduct(name, price) {
        const product = new Product(name, price, this.name)
        this.listProducts.push(product)
        this.productPrices.push(product.price)

        return product
    }

    showProducts() {
        this.listProducts.forEach(product => {
            console.log(product)    
        })
    }

    totalStockValue() {
        const total = this.productPrices.reduce((acc, val) => acc + val, 0)
        console.log(`Category: ${this.name}`)
        console.log(`Total price: ${total}`)
        
        return total
    }
}

module.exports = Category