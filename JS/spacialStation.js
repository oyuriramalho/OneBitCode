let spacialStation = {
  hitched: [],
  hitchedSpaceshipNames: function () {
    return this.hitched.map(ship => ship.name).join(', ')
  }
}

class spaceship {
  constructor() {
    this.name = prompt('Name of spaceship: ')
    this.crewQuantity = Number(prompt('Crew quantity: '))
    this.hitched = false
    this.openedGate = false
  }
  hitching() {
    alert('Hitching spaceship ' + this.name)
    spacialStation.hitched.push(this)
    this.hitched = true
    alert('Oppening gates of ' + this.name)
    this.openedGate = true
  }
}

function showMenu() {
  do {
    let option = Number(
      prompt(
        'Bem vindo à Estação Espacial Ramalho\n\n' +
          'Digite a opção desejada:\n\n' +
          '1 - Engatar nova nave\n' +
          '2 - Exibir naves acopladas\n' +
          '3 - Sair do programa'
      )
    )
    switch (option) {
      case 1:
        let someSpacechip = new spaceship()
        /* someSpacechip.constructor() */
        someSpacechip.hitching()
        break
      case 2:
        alert(
          'Naves acopladas à estaçaõ espacial:\n' +
            spacialStation.hitchedSpaceshipNames()
        )
        break
      case 3:
        alert('Saindo do programa')
        break
      default:
        alert('Opção inválida, reiniciando menu')
    }
  } while (option != 3)
}

showMenu()
