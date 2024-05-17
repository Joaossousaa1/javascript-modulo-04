const Passenger = require("./Passenger");

class Flight {
    constructor (number, origin, destination, date) {
        this.number = number;
        this.origin = origin;
        this.destination = destination;
        this.date = date;
        this.listPassengers = []
    }

    addPassengers(name, documentNumber) {
        if (this.listPassengers.length < 4) {
            const passenger = new Passenger(name, documentNumber)
            this.listPassengers.push(passenger)

            console.log(passenger.name + ' added to the flight.')
        } else {
            console.log(`Flight full!!!!`)
        }
    }

    showPassengers() {
        const list = this.listPassengers.map((passenger) => passenger.name)
        console.log(`Passengers: ${list}`)
    }
}

module.exports = Flight;