class Property {
    constructor (area, price) {
        this.area = area
        this.price = price 
    }

    getPricePerSquareMeter() {
        return this.price / this.area
    }
}

class House extends Property {}

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)

console.log(land)
console.log(someHouse)
console.log(someHouse instanceof Property)

class Apartment extends Property {
    constructor(number, area, price) {
        super(area, price)
        this.number = number
    }

    getFloor() {
        return this.number.slice(0, -2)
    }
}

const apt = new Apartment('310819', 100, 160000)

class Room extends Apartment {
    constructor (quantity, number, area, price) {
        super(number, area, price)
        this.quantity = quantity
    }
}

const room = new Room(4, '2', 'area', 'price')
console.log(room.getPricePerSquareMeter())
console.log(room)