const Product = require("./Product");
const Category = require("./Category");
const productList = []

const games = new Category('Games')
const electronics = new Category("electronics")

const cod = new Product(productList.length, 'Cold war', 150, games)
productList.push(cod)

const phone = new Product(productList.length, "Iphone 11", 3300, electronics)
productList.push(phone)

console.log(productList[phone.id])