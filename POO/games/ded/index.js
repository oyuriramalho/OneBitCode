// Common JS

const Mage = require('./Mage.js')
const Thief = require('./Thief.js')
const Warrior = require('./Warrior.js')

let veigar = new Mage('Veigar', 5, 5, 80, 8)
let katarina = new Thief('Katarina', 5, 5, 80)
let garen = new Warrior('Garen', 5, 5, 80, 10)

console.table({ veigar, katarina, garen })
garen.shiftPosition()
console.table({ veigar, katarina, garen })
garen.shiftPosition()
katarina.kombat(garen)
veigar.kombat(katarina)
veigar.heal(garen)
console.table({ veigar, katarina, garen })