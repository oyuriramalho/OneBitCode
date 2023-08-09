// CommonJS

module.exports = class Char {
  constructor(name, atk, def, life) {
    this.name = name
    this.atk = atk
    this.def = def
    this.life = life
  }
  kombat(enemy){
    (this.atk>enemy.def ? enemy.life-= (this.atk-enemy.def):null)
  }
}
