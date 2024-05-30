const Lion = require("./Lion");

const lion = new Lion('Joe', 25)
console.log(lion.status())
lion.toFeed()
console.log(lion.status())
lion.toFeed()
lion.toFeed()
lion.hunger = true
console.log(lion.status())