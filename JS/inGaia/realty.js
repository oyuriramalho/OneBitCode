// Casa individual
let realState={}
let CurrentID = 1

class Realty {
  constructor() {
    this.id = CurrentID
    CurrentID+=1
    this.kind = document.querySelector("select[name='kind'] option:checked").text
    this.area = document.querySelector("select[name='area']")
    this.status = "Rented" // or Avaiable
  }
}

function newRealty(){
  let x = new Realty()
  realState.push(x)
  document.querySelector("select[name='area']").value=""
}