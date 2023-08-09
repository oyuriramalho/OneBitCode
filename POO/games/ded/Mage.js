const Char = require('./Char.js')

module.exports = class Mage extends Char {
  constructor(name, atk, def, life, mp) {
    super(name, atk, def, life)
    this.mp = mp
  }
  kombat(enemy) {
    this.mp + this.atk > enemy.def
      ? (enemy.life -= this.mp + this.atk - enemy.def)
      : null
  }
  heal(partner) {
    partner.life += 2 * this.mp
  }
}
