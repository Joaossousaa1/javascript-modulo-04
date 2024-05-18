class People {
    constructor (name, lastName, birthDate) {
        this.name = name;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.age = 0;
    }

    age() {
        this.age = 2024 - this.birthDate
        console.log(`${this.name + ' ' + this.lastName} is ${2024 - this.birthDate} years old. `)
    }
}

const jhon = new People('Jhon', 'Octavio', 2004)
jhon.age()
console.log(jhon)
