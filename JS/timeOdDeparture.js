let departureDayEntry = prompt(
  'Entre com a data de partida (Formato DD/MM/YYYY)'
)

let departureDay = moment(departureDayEntry, 'DD/MM/YYYY')

let today = moment()

let dateDiff = today - departureDay
let chosenDiffOption

let chosenOption = prompt(
  'Escolha como gostaria de exibir o tempo de partida:\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias'
)

if (chosenOption == '1') {
  dateDiff = Math.round(dateDiff / 1000)
  alert(`Tempo de vôo: ${dateDiff} segundos`)
} else if (chosenOption == '2') {
  dateDiff = Math.round(dateDiff / (1000 * 60))
  alert(`Tempo de vôo: ${dateDiff} minutos`)
} else if (chosenOption == '3') {
  dateDiff = Math.round(dateDiff / (1000 * 3600))
  alert(`Tempo de vôo: ${dateDiff} horas`)
} else if (chosenOption == '4') {
  dateDiff = Math.round(dateDiff / (1000 * 3600 * 24))
  alert(`Tempo de vôo: ${dateDiff} dias`)
} else {
  alert('Opção inválida')
}
