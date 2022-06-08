// Gestão de imóveis via DOM
var XPTO = 'X'
class Equities {
  static register() {
    // Elemento linha

    // novo elemento para a linha
    let kindCell = document.createElement('td')
    kindCell.innerText = document.getElementById('kind').selectedOptions[0].text

    let areaCell = document.createElement('td')
    areaCell.innerText = document.getElementById('area').value

    let avaiabilityCell = document.createElement('td')
    avaiabilityCell.innerText = document.querySelector(
      "input[name='avaiability']:checked"
    ).value

    let removeHouseButtonCell = document.createElement('td')
    let removeHouseButton = document.createElement('button')
    removeHouseButton.setAttribute('onclick', 'Equities.removeHouse(this)')
    removeHouseButton.setAttribute('type', 'button')
    removeHouseButton.innerText = 'Remover'
    removeHouseButtonCell.appendChild(removeHouseButton)

    let newHouse = document.createElement('tr')
    newHouse.appendChild(kindCell)
    newHouse.appendChild(areaCell)
    newHouse.appendChild(avaiabilityCell)
    newHouse.appendChild(removeHouseButtonCell)
    XPTO = newHouse

    document.getElementById("tableHouses").appendChild(newHouse)
  }

  static removeHouse(element) {
    element.parentNode.parentNode.parentNode.removeChild(
      element.parentNode.parentNode
    )
  }
  /*   static avaiabilityText(avaiableFor){
    let X = ["Rented", "AvaiableForRent", "AvaiableForSell"]
    let Y = ["Alugado", "Disponível para Alugar", "Disponível para Venda"]
    for (let i =0; X.lenght-1; i++){
      if (avaiableFor == X[i]){
        return Y[i]
      }
    }
  } */
}
