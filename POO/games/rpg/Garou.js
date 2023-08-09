// Es Modules
import {Human} from './Human.js'
export class Garou extends Human {
  constructor(name, player, raceBorn, tribe, auspices) {
    super(name, player)
    this.raceBorn = raceBorn
    this.actualForm = 0 // human
    //humanAttributes é o que aparece na ficha, o attributes inclui o modificador de forma
    this.humanAttributes = JSON.parse(JSON.stringify(this.attributes))
    this.tribe = tribe
    this.auspices = auspices
    this.grade = 'puppy'
    this.fury = [1, 1] //permanent and temporary
    this.gnosis = [1, 1] //permanent and temporary
    // renome
    this.reputation = {
      // renome
      honor: [0, 0],
      glory: [0, 0],
      wisdom: [0, 0]
    }
  }
  transform(nextForm) {
    //[ homo glabro crinos hispo lupus]
    // [nome-da-forma, dificuldade, força, destreza, vigor, aparencia, manipulação]
    let changings = [
      ['Hominídeo', 6, 0, 0, 0, 0, 0],
      ['Glabro', 7, 2, 0, 2, -1, -1],
      ['Crinos', 6, 4, 1, 3, 0, -3],
      ['Hispo', 7, 3, 2, 3, 0, -3],
      ['Lupino', 6, 1, 2, 2, 0, -3]
    ]
    if (nextForm == 0) {
      this.attributes = JSON.parse(JSON.stringify(this.humanAttributes))
    } else {
      this.attributes.physical.strength =
        this.humanAttributes.physical.strength + changings[nextForm][2]

      this.attributes.physical.dexterity =
        this.humanAttributes.physical.dexterity + changings[nextForm][3]

      this.attributes.physical.vigor =
        this.humanAttributes.physical.vigor + changings[nextForm][4]

      this.attributes.social.beauty =
        this.humanAttributes.social.beauty + changings[nextForm][5]

      this.attributes.social.manipulation =
        this.humanAttributes.social.manipulation + changings[nextForm][6]
      if (nextForm == 2) {
        this.attributes.social.beauty = 0
      }
    }
    this.actualForm = nextForm
  }
}