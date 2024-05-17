const Category = require("./Category");

const bags = new Category("Bags")
bags.addProduct('Shouder Bag', 250)
bags.addProduct('Big Bag', 159)

bags.showProducts()
bags.totalStockValue()

console.log(bags)