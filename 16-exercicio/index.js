const Character = require("./Character");
const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const hogrider = new Character('Hog Rider', 100, 20, 10)
const kratos = new Thief('Kratos', 200, 40, 20)
const harry = new Mage('Harry Potter', 150, 30, 40, 52)
const scott = new Warrior('Scott Mcal', 100, 60, 50, 20,'Attack')
console.log(scott)
scott.changePosition()
console.log(scott)
scott.attackTarget(harry)
scott.changePosition()
scott.attackTarget(harry)
