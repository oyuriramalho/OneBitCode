export class Human {
  constructor(player, name) {
    this.name = name
    this.player = player

    this.attributes = {
      physical: {
        strength: 1,
        dexterity: 1,
        vigor: 1
      },
      social: {
        charisma: 1,
        manipulation: 1,
        beauty: 1
      },
      mental: {
        perception: 1,
        intelligence: 1,
        logic: 1
      }
    }
    this.habilities = {
      talents: {
        sports: 1
      },
      skills: {
        guns: 2
      },
      knowledge: {
        computer: 5
      }
    }
    this.willpower = [1, 1] //permanent and temporary
    this.vitality = 0
    this.background = {}
  }
}



