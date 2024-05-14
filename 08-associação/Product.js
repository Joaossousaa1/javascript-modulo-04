class Product {
    constructor (id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    calculateDescount(descount) {
        this.price = this.price * ((100 - descount) / 100)
    }
}

module.exports = Product;