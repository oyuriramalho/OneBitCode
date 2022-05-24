let spaceshipName = prompt('Digite o nome da sua nave')
let spaceshipNameCovered = ''

let remover = prompt(
  `Nome da nave: ${spaceshipName}\n\n Qual caracter pretende esconder?`
)
let liar = prompt('Por qual caracter gostaria de trocar?')

for (let i = 0; i < spaceshipName.length; i += 1) {
  (spaceshipName[i]==remover) ? spaceshipNameCovered+=liar : spaceshipNameCovered+=spaceshipName[i]
}
alert('New name of your ship: ' + spaceshipNameCovered)
