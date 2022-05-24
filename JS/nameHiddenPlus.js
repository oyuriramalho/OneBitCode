let spaceshipName = prompt('Digite o nome da sua nave')
let spaceshipNameCovered = ""

let remover = prompt(
  `Nome da nave: ${spaceshipName}\n\n Qual caracter pretende esconder?`
)
let liar = prompt('Por qual caracter gostaria de trocar?')
let forbidenChar = prompt('Qual o caracter proibido ?')
console.log(spaceshipName, remover, liar, forbidenChar)

for (let i = spaceshipName.length - 1; i >= 0; i --) {
  // console.log(i)
  /* spaceshipName[i] == remover
    ? (spaceshipNameCovered += liar)
    : (spaceshipNameCovered += spaceshipName[i]) */
  console.log('spaceshipName[i]')
  if (spaceshipName[i] == forbidenChar) {
    break
  } else if (spaceshipName[i] == remover) {
    spaceshipNameCovered += liar
  } else {
    spaceshipNameCovered += spaceshipName[i]
  }
}
alert('New name of your ship: ' + spaceshipNameCovered)
