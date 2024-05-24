class Vehicle {
    move() {
        console.log(`The vehicle moves`)
    }
}

class Car extends Vehicle {
    move() {
        console.log(`The car moves`)
    }
}

class Ship extends Vehicle {
    move() {
        console.log(`The ship moves`)
    }
}