class Product {
    constructor (name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discount) {
        const value = this.price * (discount / 100)
        this.price -= value
    }
}

const game = new Product('God of War', 'The action and adventure game', 80)
game.addToStock(109)
game.calculateDiscount(15)      
console.log(game)