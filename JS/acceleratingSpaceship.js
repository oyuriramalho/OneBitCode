let speed = 0
let spaceshipName = prompt('Qual o nome da nave?')

let menu =
  'Opções:\n\n1 - Acelerar 5km/s\n2 - Desacelerar 5km/s\n3 - Imprimir velocímetro\n4 - Sair do programa'
let keep = true

function slowDown(speed) {
  if (speed == 0) {
    alert('Nave parada, impossível reduzir')
  } else {
    speed -= 5
  }
}

function speedControl() {
  let keep = true
  alert(`Velocidade da ${spaceshipName}: ${speed} km/s \n`)
  do {
    let option = prompt(menu)
    switch (option) {
      case '1':
        speed += 5
        break
      case '2':
        slowDown(speed)
        break
      case '3':
        alert(`Velocidade da ${spaceshipName}: ${speed} km/s`)
        break
      case '4':
        alert('Saindo do programa')
        keep = false
        break
      case null:
        keep = false
        alert('Saindo do programa')
        break
      default:
        alert('Opção inválida')
        break
    }
  } while (keep)
}
speedControl()
