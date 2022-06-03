class inGaia {
  static addNewHouse() {
    let element = document.getElementsByTagName('input')
    let line = document.createElement('tr')
    for (let i = 0; i <= element.length - 1; i++) {
      let item = document.createElement('td')
      item.innerText = element[i].value
      element[i].value = ''
      line.appendChild(item)
    }

    let item = document.createElement('td')
    let innerItem = document.createElement('button')
    innerItem.setAttribute('onclick', 'inGaia.removeLine(this)')
    innerItem.setAttribute('type', 'button')
    innerItem.innerText = 'Remover'
    item.appendChild(innerItem)
    line.appendChild(item)
    document.getElementById('tableItems').appendChild(line)
  }

  static removeLine(element) {
    element.parentNode.parentNode.parentNode.removeChild(
      element.parentNode.parentNode
    )
  }
}
