function addNewHouse() {
  let element = document.getElementsByTagName('input')
  let line = document.createElement('tr')
  for (let i = 0; i <= element.length - 1; i++) {
    let item = document.createElement('td')
    item.innerText = element[i].value
    line.appendChild(item)
  }
  let item = document.createElement('td')
  let innerItem = document.createElement('button')
  innerItem.setAttribute('onclick', 'removeLine(this)')
  innerItem.setAttribute('type', 'button')
  innerItem.innerText = 'Remover'
  item.appendChild(innerItem)
  line.appendChild(item)
  let T = document.getElementById("tableItems")
  T.appendChild(line)
}

function removeLine(element) {
  var X = element
  
}