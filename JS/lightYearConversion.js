let LYDistance = Number(prompt('Please enter distance at Light Year:'))
let ConvertedDistance = null
const conversionText =
  'Which unit do you want to convert?\n\n1: Parsec(pc)\n2: Astronimic Unit (AU)\n3: Quilometers (Km)'

let conversionOption = prompt(conversionText)

switch (conversionOption) {
  case '1':
    ConvertedDistance = [LYDistance * 0.306601, 'pc', 'Parsec']
    console.log('Caso Parsec')
    break
  case '2':
    ConvertedDistance = [LYDistance * 63241.1, 'AU', 'Astronomic Unit']
    console.log('Caso AU')
    break
  case '3':
    ConvertedDistance = [
      String(LYDistance * 9.5) + '*10e12',
      'Km',
      'Quilometers'
    ]
    console.log('Caso Km')
    break
  default:
    alert('Invalid option, press F5')
    break
}
alert(
  `Distance at Light Year: ${LYDistance}\nDistance at ${ConvertedDistance[2]}: ${ConvertedDistance[0]} ${ConvertedDistance[1]}`
)
