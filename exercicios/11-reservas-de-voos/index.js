const Flight = require("./Flight");

const chile = new Flight(1, 'Brazil', 'Chile', '20/05/2024')
chile.addPassengers('Jhon', 12)
chile.addPassengers('Hayssa', 31)
chile.addPassengers('Samuel', 53)
chile.addPassengers('Fátima', 68)

console.log(chile)

chile.showPassengers()