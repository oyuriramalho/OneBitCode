const Char = require('./Char.js')

module.exports = class Thief extends Char {
  constructor(name, atk, def, life) {
    super(name, atk, def, life)
  }
  kombat(enemy) {
    2 * this.atk > enemy.def ? (enemy.life -= 2 * this.atk - enemy.def) : null
  }
}
