const Char = require('./Char.js')

module.exports = class Warrior extends Char {
  constructor(name, atk, def, life, shield) {
    super(name, atk, def, life)
    this.shield = shield
    this.position = 'atack'
  }
  shiftPosition() {
    if (this.position == 'atack') {
      this.position = 'defense'
      this.def += this.shield
    } else {
      this.position = 'atack'
      this.def -= this.shield
    }
  }
  kombat(enemy) {
    ;(this.atk > enemy.def) & (this.position == 'atack')
      ? (enemy.life -= this.atk - enemy.def)
      : pass
  }
}
